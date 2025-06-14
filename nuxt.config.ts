import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // Módulos
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/i18n'
  ],

  // Configuración para Github Pages
  ssr: false,
  app: {
    baseURL: '/portfalio/',
  },

  // Internacionalización
  i18n: {
    locales: [
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'es',
    lazy: true,
    langDir: 'locales/',
    bundle: { optimizeTranslationDirective: false},
  }
});