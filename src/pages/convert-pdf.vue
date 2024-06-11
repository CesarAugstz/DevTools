<script setup lang="ts">
const file = defineModel();
const highlightClass = ['bg-cprimary', 'border-cprimary-500'];

const highlight = e => e.currentTarget.classList.add(...highlightClass);
const unhighlight = e => e.currentTarget.classList.remove(...highlightClass);

function handleDrop(e) {
  console.log('Dropped');
  console.log(e);
  e.currentTarget.classList.remove(...highlightClass);
  const dt = e.dataTransfer;
  const file = dt.files;
  handleFile(file[0]);
}

function handleFile(file) {
  console.log('handle file', file);
  uploadFile(file);
}

async function uploadFile(file) {
  // File upload logic here
  const formData = new FormData();
  formData.append('file', file);

  console.log('Uploading', file);

  const { base64, mimetype } = await $fetch('/api/convert-to-pdf', {
    method: 'POST',
    body: formData,
    contentType: 'multipart/form-data',
  });

  const src = `data:${mimetype};base64,${base64}`;
  console.log('src', src);

const main = document.querySelector('main');
main?.style.setProperty('background-image', `url(${src})`);

  const image = document.createElement('img');
  image.src = src;
  document.body.appendChild(image);
}

function changeInput(fileList) {
  console.log('change input', fileList);
  handleFile(fileList[0]);
}
</script>
<template>
  <div
    id="drop-area"
    @dragenter.prevent="highlight"
    @dragover.prevent="highlight"
    @dragleave.prevent="unhighlight"
    @drop.prevent="handleDrop"
    class="m-auto flex-1 content-center"
    style="height: 85vh"
  >
    <UContainer class="" style="text-align-last: center">
      <UInput
        :model-value="file"
        @change="changeInput"
        type="file"
        size="xl"
        icon="i-heroicons-folder"
      />

      <Placeholder class="h-32" />
    </UContainer>
  </div>
</template>
