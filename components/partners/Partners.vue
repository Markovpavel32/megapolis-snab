<template>
  <div class="partners">
    <div class="partners__container container">
      <h2 class="partners__title mb-4 fw-bold">
        Партнеры
      </h2>
      <div>
        <m-carousel
          :items-to-show="4"
          :breakpoints="breakPoints"
          :pagination="false"
          viewport-visible
        >
          <slide>
            <b-card>
              <img src="../../assets/img/partners/cronospan.png">
            </b-card>
          </slide>
          <slide>
            <b-card>
              <img src="../../assets/img/partners/krost.png">
            </b-card>
          </slide>
          <slide>
            <b-card>
              <img src="../../assets/img/partners/atmosphera.png">
            </b-card>
          </slide>
          <slide>
            <b-card>
              <img src="../../assets/img/partners/megapolis.png">
            </b-card>
          </slide>
        </m-carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MCarousel from '~/components/_common/carousel/mCarousel.vue'
import { Slide } from 'vue3-carousel'

const breakPoints = {
  0: {
    itemsToShow: 1,
  },
  768: {
    itemsToShow: 2,
  },
  1000: {
    itemsToShow: 3,
  },
  1440: {
    itemsToShow: 4,
  }
}
</script>

<style lang="scss" scoped></style>
