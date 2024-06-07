<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
  link: string;
}>();
</script>
<template>
  <NuxtLink :to="link">
    <UCard
      class="hover:shadow-lg hover:scale-105 hover:-translate-y-1 hover:bg-primary-100 transition ease-in-out duration-300 cursor-pointer"
    >
      <template #header>
        <h1 class="text-2xl text-center font-bold" v-text="title"></h1>
      </template>
      <div class="flex justify-center">
        <Icon
          v-if="icon"
          :name="icon"
          class="size-32 text-blue-500 flex center"
        />
      </div>

      <Placeholder class="h-32" />
    </UCard>
  </NuxtLink>
</template>
