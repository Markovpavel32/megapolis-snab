<template>
  <div class="our-technics">
    <m-carousel class="our-technics__carousel">
      <slide>
        <img src="../../assets/img/sunward-1.jpg">
      </slide>
      <slide>
        <img src="../../assets/img/sunward-2.jpg">
      </slide>
      <slide>
        <img src="../../assets/img/sunward-3.jpg">
      </slide>
      <slide>
        <img src="../../assets/img/sunward-4.jpg">
      </slide>
    </m-carousel>
    <b-card class="our-technics__card">
      <b-card-title>
        <span class="text-xl">В работе мы используем установки Sunward ZYJ360B</span>
      </b-card-title>
      <div class="our-technics__advantages">
        <div class="row">
          <div class="our-technics__advantage col-12 col-md-6 mb-3">
            <div class="our-technics__advantage-title">
              16 метров
            </div>
            <div class="our-technics__advantage-text">
              Максимальная<br> длина сваи
            </div>
          </div>
          <div class="our-technics__advantage col-12 col-md-6 mb-3">
            <div class="our-technics__advantage-title">
              600мм
            </div>
            <div class="our-technics__advantage-text">
              Максимальный<br> размер сваи
            </div>
          </div>
        </div>
        <div class="row">
          <div class="our-technics__advantage col-12 col-md-6 mb-3">
            <div class="our-technics__advantage-title">
              Погружение
            </div>
            <div class="our-technics__advantage-text">
              Шпунта Ларсена, трубчатого шпунта и свай круглого сечения
            </div>
          </div>
          <div class="our-technics__advantage col-12 col-md-6 mb-3">
            <div class="our-technics__advantage-title">
              до 6,7 м/мин
            </div>
            <div class="our-technics__advantage-text">
              Скорость вдавливания
            </div>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import MCarousel from '~/components/_common/carousel/mCarousel.vue'
import { Slide } from 'vue3-carousel'
</script>

<style lang="scss" scoped>
@import '/assets/styles/main';
.our-technics {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  &__card, &__carousel {
    flex: 1 1 636px;
    align-items: center;

    :deep(.card-body) {
      display: flex;
      flex-direction: column;
      padding: 56px 86px 60px 86px;
    }
    :deep(.card-title) {
      color: #18181A;
      font-weight: 700;
      font-size: 32px;
      line-height: 120%;
      margin-bottom: 32px;
    }
  }

  &__carousel {
    overflow-x: hidden;
    border-radius: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__advantages {
  }

  &__advantage {
    &-title {
      color: $tertiary;
      font-weight: 700;
      font-size: 32px;
      line-height: 120%;
    }
  }

  :deep(.carousel__track) {
    margin-bottom: 0
  }
}
</style>
