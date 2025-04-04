// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Modules and plugins
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],

  // Experimental features
  experimental: {
    // reactivityTransform is no longer needed in Vue 3.4+
    typedPages: true,
    inlineSSRStyles: false,
    payloadExtraction: true,
  },

  // Auto-import composables and components
  imports: {
    dirs: [
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
      'stores',
    ],
    imports: [
      { name: 'useFirestore', from: 'vuefire' },
      { name: 'useFirebaseAuth', from: 'vuefire' },
      { name: 'useFirebaseStorage', from: 'vuefire' },
    ],
  },

  // Firebase configuration through runtime config
  runtimeConfig: {
    public: {
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
      },
    },
  },

  // Color modes config
  colorMode: {
    classSuffix: '',
  },

  // i18n configuration
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ko', name: '한국어', file: 'ko.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en',
      redirectOn: 'root',
    },
  },

  // TypeScript
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },

  // Build configurations
  build: {
    transpile: ['vuefire'],
  },

  // VueUse config
  vueuse: {
    ssrHandlers: true,
  },

  app: {
    // Global page transition
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: '%s - Vue Nuxt Firebase Template',
      meta: [
        { name: 'description', content: 'A modern, production-ready template combining Vue 3, Nuxt 3, Firebase, and Vitesse\'s configuration' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },
})