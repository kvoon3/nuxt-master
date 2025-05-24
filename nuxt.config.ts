// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
  ],

  devtools: { enabled: true },

  css: [
    '~/styles/main.css',
  ],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-05-15',

  eslint: {
    config: {
      standalone: false,
    },
  },
})
