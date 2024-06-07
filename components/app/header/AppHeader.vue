<script setup lang="ts">
const items = [
  // { name: "Home", link: "/" },
  { name: 'Sobre', link: '/about' },
  { name: 'Patrocinadores', link: '/sponsors' },
  { name: 'Programação', link: '/schedule' },
  { name: 'Duvidas', link: '/faq' },
  { name: 'Contato', link: '/contact' },
];

const menu = ref<HTMLElement | null>(null);

function menuToggle() {
  menu.classList.toggle('hidden');
}
</script>
<template>
  <header class="">
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <a href="#" class="text-white text-2xl font-bold">Dev Tools</a>
        <div class="block lg:hidden">
          <button id="menu-toggle" @click="menuToggle"  class="text-white focus:outline-none">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul id="menu" ref="menu" class="hidden lg:flex space-x-6 text-white">
          <li v-for="item in items" :key="item.name">
            <NuxtLink :to="item.link" prefetch class="hover:text-gray-400">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
        <div class="hidden lg:block">
          <input type="text" placeholder="Search..." class="p-2 rounded" />
        </div>
        <AppHeaderColorTheme class="right-0" />
      </div>
    </nav>
  </header>
</template>
