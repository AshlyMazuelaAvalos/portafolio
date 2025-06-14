// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

export default ({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'es',
    lazy: true,
    langDir: 'locales/',
    bundle: { optimizeTranslationDirective: false },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    plugins: [vuetify({ autoImport: true})],
  },
});