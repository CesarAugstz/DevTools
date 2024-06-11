<script setup lang="ts">
definePageMeta({ title: 'Login', description: 'Login page', layout: false });

const loading = ref(false);
const { username, password } = reactive({ username: '', password: '' });

function login() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
  console.log('Logging in...');
}
</script>
<template>
  <div class="flex min-h-screen">
    <div class="flex-1 flex center justify-center align-center m-auto">
      <UCard class="text-center">
        <template #header>
          <h1 class="text-lg">Hello there!</h1>
          <p>Welcome to the login page</p>
        </template>
        <form @submit.prevent="login">
          <UInput class="mb-4" v-model="username" placeholder="Username" />
          <UInput
            class="mb-4"
            v-model="password"
            placeholder="Password"
            type="password"
          />
          <UButton
            class="w-full justify-center"
            :loading="loading"
            :ui="{ rounded: 'rounded-full' }"
            size="lg"
            type="submit"
            >Login</UButton
          >
        </form>
        <template #footer>
          <p>
            Don't have an account?
            <ULink
              class="text-primary hover:tranlate-y-1 hover:scale-50"
              to="/register"
            >
              Register
            </ULink>
          </p>
        </template>
      </UCard>
    </div>
  </div>
</template>
