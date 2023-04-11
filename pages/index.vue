<template>
  <div>
    <main-banner class="main mb-5" navigation>
      <main-banner-item :img-src="headPic" active>
        <template #caption>
          <div class="main__head">
            <h1 class="main__head-title text-uppercase">
              Производитель бетона<br> и железобетонных изделий
            </h1>
            <div class="main__head-description">
              Сваи, перемычки, плиты перекрытия, дорожные плиты, фундаментальные блоки
            </div>
          </div>
        </template>
      </main-banner-item>
      <main-banner-item>
        <template #caption>
          <div class="main__head">
            <h1 class="main__head-title text-uppercase">
              Производитель бетона<br> и железобетонных изделий
            </h1>
            <div class="main__head-description">
              Сваи, перемычки, плиты перекрытия, дорожные плиты, фундаментальные блоки
            </div>
          </div>
        </template>
      </main-banner-item>
    </main-banner>
    <div class="container">
      <h2 class="mb-4">
        Производство
      </h2>
      <products-list />
    </div>
    <!--    <m-carousel>-->
    <!--      <slide><div>{{ 1 }}</div></slide>-->
    <!--    </m-carousel>-->
  </div>
</template>

<script setup lang="ts">
import headPic from '~/assets/img/head-pic.png'
import frame from 'assets/img/productCards/concreteSolutions.png'
import MainBanner from '~/components/mainBanner/MainBanner.vue'
import MainBannerItem from '~/components/mainBanner/MainBannerItem.vue'
import ProductsList from '~/components/productsList/ProductsList.vue'
</script>

<style lang="scss" scoped>
@import '/assets/styles/main';

.main {
  &__head {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    color: #fff;
    line-height: 140%;
    font-size: 21px;
    width: 93%;
    @include media-breakpoint-up(lg) {
      max-width: 636px;
      left: 36%;
      top: 50%;
    }

    &-title {
      font-weight: 700;
      font-size: 21px;
      line-height: 140%;
      margin-bottom: 24px;

      @include media-breakpoint-up(md) {
        font-weight: 700;
        font-size: 44px;
        line-height: 55px;
      }
    }

    &-description {
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;

      @include media-breakpoint-up(md) {
        font-size: 32px;
        line-height: 120%;
      }

      @include media-breakpoint-up(lg) {
        font-weight: 400;
        font-size: 32px;
        line-height: 120%;
      }
    }
  }

  :deep(.carousel-item__img) {
    @include media-breakpoint-down(lg) {
      object-position: -800px;
    }
  }
}
</style>
