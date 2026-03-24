// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["./app/assets/css/main.css"],
  ssr: true,
  nitro: {
    static: true,
  },
});
