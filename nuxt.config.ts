export default defineNuxtConfig({
  modules: [
    '@nuxtjs/ionic',
    '@nuxt/eslint'
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