// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "/",
  },
  modules: ["@nuxt/ui", "@nuxt/content"],
  css: ["~/assets/css/main.css"],
  ssr: true,
  nitro: {
    static: true,
    storage: {
      "cache:nuxt": { driver: "memory" },
    },
    devStorage: {
      "cache:nuxt": { driver: "memory" },
    },
  },
  colorMode: {
    preference: "light",
    fallback: "light",
  },
});
