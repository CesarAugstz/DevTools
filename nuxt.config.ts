// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', "@nuxt/eslint"],
  colorMode: { preference: 'system', fallback: 'light' },
  app: {
    head: { bodyAttrs: { class: 'w-full' }, htmlAttrs: { class: 'w-full' } },
  },
});