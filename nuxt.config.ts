export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '', // load from env
    }
  },
  modules: [
    '@nuxtjs/ionic',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  typescript: {
    strict: true,
    typeCheck: false
  },
  vite: {
    esbuild: {
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    },
    server: {
      watch: {
        usePolling: true,
      }
    }
  },
  imports: {
    dirs: [
      'composables/auth',
    ]
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  devtools: { enabled: true }
})