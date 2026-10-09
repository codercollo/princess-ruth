import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },

  // Enable auto-import for components inside app/components/
  components: [
    { path: '~/components', pathPrefix: false }
  ],

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@pinia/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  site: {
    url: 'https://princessruth.co.ke',
    name: 'Princess Ruth',
    description: 'Custom traditional, official and occasion wear for women. Sabina Building, Ngong Town, Kenya.',
    defaultLocale: 'en',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en', class: 'no-js' },
      meta: [
        { name: 'theme-color', content: '#16110E' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      ],
      script: [
        { innerHTML: "document.documentElement.classList.replace('no-js','js')" },
      ],
    },
    pageTransition: false,
    layoutTransition: false,
  },

  icon: {
    serverBundle: { collections: ['ph', 'simple-icons'] },
  },

  image: {
    format: ['avif', 'webp'],
    quality: 72,
    screens: { xs: 320, sm: 480, md: 768, lg: 1024, xl: 1280, xxl: 1536 },
    densities: [1, 2],
  },

  runtimeConfig: {
    resendApiKey: process.env.NUXT_RESEND_API_KEY || '',
    contactToEmail: process.env.NUXT_CONTACT_TO_EMAIL || 'info@princessruth.co.ke',
    public: {
      whatsapp: process.env.NUXT_PUBLIC_WHATSAPP || '+254748428622',
      phone: process.env.NUXT_PUBLIC_PHONE || '+254724051039',
      mapLat: process.env.NUXT_PUBLIC_MAP_LAT || '-1.3621',
      mapLng: process.env.NUXT_PUBLIC_MAP_LNG || '36.6566',
    },
  }
})
