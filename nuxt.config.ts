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
    // A cached route rule anywhere (@nuxt/fonts adds one for `/_fonts/**`) turns
    // on Nuxt's runtime payload cache for every route. It keys entries by URL
    // under one storage prefix, so `/` lands as a *file* at
    // `.nuxt/cache/nuxt/payload` and every other route then fails to write
    // `payload/<route>` beneath it — ENOTDIR, and a 500 for `/contact/_payload.json`.
    // Nuxt means this cache to be in-memory at runtime anyway.
    storage: {
      "cache:nuxt": { driver: "memory" },
    },
    devStorage: {
      "cache:nuxt": { driver: "memory" },
    },
  },
  // The design commits to a single light "paper" palette, so pin the mode
  // rather than let a visitor's dark system preference half-apply it.
  colorMode: {
    preference: "light",
    fallback: "light",
  },
});
