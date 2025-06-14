// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
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
});