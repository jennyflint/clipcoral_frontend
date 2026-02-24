export default defineNuxtConfig({
  modules: [
    '@nuxtjs/ionic',
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],
  typescript: {
    strict: true,
    typeCheck: false
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      }
    }
  },
  devtools: { enabled: true }
})