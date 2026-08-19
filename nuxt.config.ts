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
  },
  // The design commits to a single light "paper" palette, so pin the mode
  // rather than let a visitor's dark system preference half-apply it.
  colorMode: {
    preference: "light",
    fallback: "light",
  },
});
