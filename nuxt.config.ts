// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-09-02",
  devtools: { enabled: true },
  components: {
    dirs: [
      "~/components",
      {
        path: "~/components/dashboard/",
        prefix: "Dashboard",
      },
      {
        path: "~/components/inputs/",
        prefix: "Input",
      },
      {
        path: "~/components/skeleton/",
        prefix: "Skeleton",
      },
    ],
  },
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/toastification.client.ts", "~/plugins/vue-query.ts"],
  build: {
    // Use Vite options instead of Rollup options
    transpile: ["vue-toastification"], // Example of specifying dependencies to transpile
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["shadcn-nuxt"],
  shadcn: {
    /**
     * Prefix for all the imported components
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  runtimeConfig: {
    public: {
      apiUrl:
        process.env.NUXT_PUBLIC_API_URL ??
        "https://backend.agrinnovationsummit.com/api",
    },
  },
  vite: {
    // Vite-specific configuration options
    // Example: configure Vite to handle specific dependencies
    optimizeDeps: {
      include: ["vue-toastification"],
    },
  },
});