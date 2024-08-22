// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: {
    dirs: [
      '~/components',
        {
          path: '~/components/dashboard/',
          prefix: 'Dashboard'
        },
        {
          path: '~/components/inputs/',
          prefix: 'Input'
        }
    ]
  },
  css: ['~/assets/css/main.css'],
  plugins:[
    '~/plugins/toastification.js',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["shadcn-nuxt"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL ?? 'https://backend.agrinnovationsummit.com/api'
    }
  }
})