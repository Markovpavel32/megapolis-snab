<template>
  <div class="concrete-solutions">
    <main-banner>
      <main-banner-item :img-src="IndentationOfPiles" active>
        <template #caption>
          <head-banner-form
            header="Вдавливание свай"
            description="Цены: до 800 рублей за погонный метр сваи с НДС. В зависимости от объема цена обговаривается."
          />
        </template>
      </main-banner-item>
    </main-banner>
    <div class="container">
      <div class="row">
        <div class="col-3 d-none d-md-block" />
        <div class="col-12 col-md-9 p-12 concrete-solutions__main">
          <h1 class="fw-bold">
            Преимущества погружения свай методом вдавливания:
          </h1>
          <ul>
            <li>Копер адаптирован под любые виды свай</li>
            <li>Обеспечивает равномерное распределение силы зажима (важно при погружении высокотоннажных и тонкостенных опор)</li>
          </ul>
          <h5 class="fw-bold">
            Технологии вдавливания
          </h5>
          <ul>
            <li>Нет шума, вибраций и динамических нагрузок (в отличие от ударного метода)</li>
            <li>Минимальное расстояние от существующий строений от 1,5 метров</li>
          </ul>
          <h5 class="fw-bold">
            Позволяет работать вблизи:
          </h5>
          <ul>
            <li>Исторических строений</li>
            <li>Ветхих и аварийных сооружений</li>
            <li>В оползневых зонах</li>
            <li>Инновационные технологии, благодаря которым снижается сопротивление, и свая легко проходит через грунт</li>
          </ul>
          <capture-card
            v-model:name="name"
            v-model:phone="phone"
            class="concrete-solutions__capture-card mb-3"
            title="Есть вопросы — спрашивайте!"
            subtitle="Наши специалисты проконсультируют вас по любым вопросам и сделают точный расчет"
            @send-button-clicked="sendCapture"
          />
          <our-technics />
          <h2 class="fw-bold">
            Cваи собственного производства
          </h2>
          <div class="fw-bold mb-3">
            Пошаговый алгоритм услуги возведения надежного и долговечного фундамента на железобетонных забивных сваях
          </div>
          <b-img class="mb-8" :src="Piles" fluid-grow />
          <div class="row mb-8">
            <div class="col-12 col-md-6">
              <m-advantage :icon="Tabs" text="Производство собственных ЖБ свай (Производим сваи 300х300; 350х350; 400х400 длинной до 16 метров);" />
            </div>
            <div class="col-12 col-md-6">
              <m-advantage :icon="Truck" text="Доставляем сваи до 16м (Предприятие обладает своим автопарком грузовых автомобилей - осуществляет доставку продукции на объекты заказчиков, в том числе изделия до 16м длинной);" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <m-advantage :icon="ShieldCheck" text="Полная ответственность за целостность продукции на этапах изготовления, доставки и погружения;" />
            </div>
            <div class="col-12 col-md-6">
              <m-advantage :icon="Calculator" text="Минимизируем дополнительные издержки заказчика при заказе свай у нас (полностью сокращаем до минимума дополнительные издержки заказчика, меняем сломанные сваи);" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainBanner from '~/components/mainBanner/MainBanner.vue'
import IndentationOfPiles from 'assets/img/banners/indentation-of-piles.png'
import MainBannerItem from '~/components/mainBanner/MainBannerItem.vue'
import HeadBannerForm from '~/components/headBanner/HeadBannerForm.vue'
import CaptureCard from '~/components/_common/cards/CaptureCard.vue'
import { useFetch, useState } from '#app'
import OurTechnics from '~/components/ourTechnics/OurTechnics.vue'
import Piles from '~/assets/img/products/indentation-of-piles/piles.png'
import MAdvantage from '~/components/_common/advantage/mAdvantage.vue'
import Calculator from '~/assets/icons/calculator.svg'
import ShieldCheck from '~/assets/icons/shield-check.svg'
import Tabs from '~/assets/icons/tabs.svg'
import Truck from '~/assets/icons/truck.svg'

const name = useState('name', () => '')
const phone = useState('phone', () => '')

const sendCapture = async () => {
  await useFetch('api/capture', {
    method: 'POST',
    body: {
      name: name.value,
      phone: phone.value,
    }
  })
}
</script>

<style scoped lang="scss">
@import '/assets/styles/main';
.concrete-solutions {
  &__main {
    background-color: $surface;
  }

  &__footnote {
    color: $secondary-description;
  }

  &__capture-card {
    background-color: $background;
  }
}
</style>
