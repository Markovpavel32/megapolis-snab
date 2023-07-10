// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"

export default defineNuxtConfig({
  modules: ['@bootstrap-vue-next/nuxt'],
  css: ['~/assets/styles/main.scss', 'vue3-carousel/dist/carousel.css'],
  vite: {
    plugins: [svgLoader()]
  },
  nitro: {
    plugins: ['~/server/index.ts'],
    // storage: {
    //   db: {
    //
    //   }
    // }
  },
  runtimeConfig: {
    mailer: {
      host: process.env.MAILER_HOST,
      port: process.env.MAILER_PORT,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      }
    }
  }
})
