<script setup lang="ts">
definePageMeta({ title: 'Login', description: 'Login page', layout: false });

const isSingup = ref(false);
</script>
<template>
  <div class="flex min-h-screen">
    <div class="flex-1 flex center justify-center align-center m-auto">
      <UCard class="text-center">
        <template #header>
          <h1 class="text-lg">Hello there!</h1>
          <p>Welcome to the login page</p>
        </template>
        <AppLoginForm v-show="!isSingup" />
        <AppSingupForm v-show="isSingup" />
        <template #footer>
          <p>
            {{
              isSingup ? 'Already have an account?' : "Don't have an account?"
            }}
            <UButton color="gray" variant="link" @click="isSingup = !isSingup"
              >{{ isSingup ? 'Login' : 'Sing Up' }}
            </UButton>
          </p>
        </template>
      </UCard>
    </div>
  </div>
</template>
