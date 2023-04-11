<template>
  <m-carousel >
    <m-carousel-item :img-src="headPic">
      <template #caption>
        <h1 class="main__head-title">Производитель бетона и железобетонных изделий</h1>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </template>
    </m-carousel-item>
<!--    <m-carousel-item />-->
  </m-carousel>
</template>

<script setup lang="ts">
import MCarousel from '~/components/_common/carousel/mCarousel.vue'
import MCarouselItem from '~/components/_common/carousel/mCarouselItem.vue'
import headPic from '~/assets/img/head-pic.png'
</script>

<style lang="scss" scoped>
.main {
  &__head-title {
    position: absolute;
    left: 0;
    top: 0;
    //right: 15%;
    //top: 1rem;
    //bottom: 1.25rem;
    //left: 15%;
    //padding-top: 1.25rem;
    //padding-bottom: 1.25rem;
    color: #fff;
    text-align: center;
  }
}
</style>
