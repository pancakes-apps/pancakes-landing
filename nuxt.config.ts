import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],  
  },
  runtimeConfig: {
    public: {
      publicApiBase: 'http://localhost:3000',
    }
  },
  app: {
    head: {
      title: 'Pancakes',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
      meta: [
        { name: 'description', content: 'Pancakes is a collection of small, focused apps born from curiosity.' },
        { property: 'og:title', content: 'Pancakes' },
        { property: 'og:description', content: 'Pancakes is a collection of small, focused apps born from curiosity.' },
        { property: 'og:image', content: 'https://usepancakes.com/og-image.png' },
        { property: 'og:url', content: 'https://usepancakes.com' },
        { property: 'og:type', content: 'website' },
      ]
    }
  }
})
