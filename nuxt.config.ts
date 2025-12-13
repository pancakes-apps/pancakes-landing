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
    rubyApiBaseUrl: '',
    openAiApiKey: '',
    opusApiKey: '',
    neonApiKey: '',
    qdrantApiKey: '',

    public: {
      publicApiBase: 'http://localhost:3000',
    }
  },
  app: {
    head: {
      title: 'Pancakes',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ]
    }
  }
})
