export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-07-01',
  app: {
    head: {
      title: 'JSON Glow - Beautifier',
      meta: [
        {
          name: 'description',
          content: 'A modern JSON formatter, validator, minifier, and viewer built with Nuxt.'
        }
      ]
    }
  }
})
