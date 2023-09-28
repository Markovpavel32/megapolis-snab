<template>
  <main-banner class="head-banner mb-5" navigation>
    <main-banner-item :img-src="Banner1" active>
      <template #caption>
        <head-banner-form />
      </template>
    </main-banner-item>
    <main-banner-item :img-src="Banner2">
      <template #caption>
        <head-banner-form />
      </template>
    </main-banner-item>
    <main-banner-item :img-src="Banner3">
      <template #caption>
        <head-banner-form />
      </template>
    </main-banner-item>
    <main-banner-item :img-src="Banner4">
      <template #caption>
        <head-banner-form />
      </template>
    </main-banner-item>
  </main-banner>
</template>

<script setup lang="ts">
import Banner1 from 'assets/img/mainCarousel/banner1.png'
import Banner2 from 'assets/img/mainCarousel/banner2.png'
import Banner3 from 'assets/img/mainCarousel/banner3.png'
import Banner4 from 'assets/img/mainCarousel/banner4.png'
import MainBannerItem from '~/components/mainBanner/MainBannerItem.vue'
import MainBanner from '~/components/mainBanner/MainBanner.vue'
import HeadBannerForm from '~/components/headBanner/HeadBannerForm.vue'
</script>

<style lang="scss" scoped>
.head-banner {
  :deep(.carousel-item__img) {
    filter: brightness(80%);
  }
}
</style>
