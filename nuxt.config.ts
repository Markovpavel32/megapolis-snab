// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"
export default defineNuxtConfig({
  modules: ['bootstrap-vue-next/nuxt'],
  css: ['~/assets/styles/main.scss', 'vue3-carousel/dist/carousel.css'],
  vite: {
    plugins: [svgLoader()]
  }
})
