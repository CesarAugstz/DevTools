<script setup lang="ts">
const { name, email, password, passwordConfirmation } = reactive({
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
});

const loading = ref(false);

async function singup() {
  loading.value = true;
  const res = await useFetch('/api/auth/singup', {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      password,
      passwordConfirmation,
    }),
  });
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}
</script>

<template>
  <form @submit.prevent="singup">
    <UInput
      class="mb-4"
      v-model="name"
      placeholder="Name"
      autocomplete="dt:name"
    />
    <UInput
      class="mb-4"
      v-model="email"
      placeholder="E-mail"
      autocomplete="dt:email"
    />
    <UInput
      class="mb-4"
      v-model="password"
      placeholder="Password"
      type="password"
      autocomplete="dt:current-password"
    />
    <UInput
      class="mb-4"
      v-model="passwordConfirmation"
      placeholder="Confirm Password"
      type="password"
      autocomplete="new-password"
    />
    <UButton
      class="w-full justify-center"
      :loading="loading"
      :ui="{ rounded: 'rounded-full' }"
      size="lg"
      type="submit"
      >Sing Up</UButton
    >
  </form>
</template>
