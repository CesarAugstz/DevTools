<script setup lang="ts">
const loading = ref(false);
const { email, password } = reactive({ email: '', password: '' });

const toast = useToast();

async function login() {
  loading.value = true;
  const { data, pending, error, refresh } = await useFetch('/api/login', {
    method: 'POST',
    body: { email, password },
  });

  if (error.value) {
    console.error(error.value);
    toast.add({
      title: 'Login Error',
      description: 'Invalid username or password.',
      color: 'red',
      icon: 'i-heroicons-x-circle',
    });
    loading.value = false;
    return;
  }

  toast.add({
    title: 'Login Success',
    description: 'You have successfully logged in.',
    color: 'green',
    icon: 'i-heroicons-check-circle',
  });
  loading.value = true;
}
</script>
<template>
  <form @submit.prevent="login">
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
    <UButton
      class="w-full justify-center"
      :loading="loading"
      :ui="{ rounded: 'rounded-full' }"
      size="lg"
      type="submit"
      >Login
    </UButton>
  </form>
</template>
