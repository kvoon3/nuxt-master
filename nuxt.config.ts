import process from 'node:process'

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

  runtimeConfig: {
    openRouterApiKey: process.env.NUXT_OPEN_ROUTER_API_KEY,
  },

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
