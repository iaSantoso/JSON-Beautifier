export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-07-01',
  app: {
    head: {
      title: 'JSON Glow - Beautifier',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '64x64',
          href: '/favicon.png'
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        }
      ],
      meta: [
        {
          name: 'theme-color',
          content: '#0b0f14'
        },
        {
          property: 'og:image',
          content: '/logo.png'
        },
        {
          name: 'description',
          content: 'A modern JSON formatter, validator, minifier, and viewer built with Nuxt.'
        }
      ]
    }
  }
})
