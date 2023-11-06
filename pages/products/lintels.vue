<template>
  <div class="concrete-solutions">
    <main-banner>
      <main-banner-item :img-src="Lintels" active>
        <template #caption>
          <head-banner-form
            header="Перемычки железобетонные"
            description="Прямые поставки перемычки железобетонные для зданий с кирпичными стенами ГОСТ 948-84"
          />
        </template>
      </main-banner-item>
    </main-banner>
    <div class="container">
      <div class="row">
        <div class="col-3 d-none d-md-block" />
        <div class="col-12 col-md-9 p-12 concrete-solutions__main">
          <h2 class="fw-bold">
            Стоимость железобетонных перемычек
          </h2>
          <p>
            Компания «Мегабетон» производит и реализует в Брянске бетонные и железобетонные изделия,
            различные металлические и деревянные строительные конструкции, элементы мощения тротуаров.
            Мы – старейший российский производитель в данной сфере. Мы успели накопить солидный опыт – 20 лет.
            Наша компания предлагает качественную продукцию юридическим и физическим лицам. Доставка осуществляется по
            городу и России.
          </p>
          <p class="mb-12">
            В настоящее время многопустотные панели активно применяются в процессе возведения промышленных
            и жилых зданий. Из них создаются межэтажные перекрытия в сооружениях и зданиях, выполненных из бетона,
            стеновых блоков, кирпича. Они идеально подходят для быстрой и качественной прокладки коммуникаций.
            Характеристики данных изделий зависят от того, какая марка бетона используется, какова форма и размеры
            пустот, а также сколько плоскостей у поры. Также на них влияют и другие параметры, которые определяются
            определенной технологией их изготовления.
          </p>

          <h5 class="fw-bold">
            Наша продукция обладает массой достоинств:
          </h5>
          <div class="row mb-8">
            <div class="col-12 col-md-6">
              <m-advantage :icon="SelectionAll" text="Так как структура их многопустотная, обеспечивается отличная звуко- и теплоизоляция" />
            </div>
            <div class="col-12 col-md-6">
              <m-advantage :icon="ShieldChevron" text="Предварительно напряженная арматура гарантирует оптимальную прочность ЖБИ" />
            </div>
          </div>
          <div class="row mb-12">
            <div class="col-12 col-md-6">
              <m-advantage :icon="Tabs" text="Нагрузка на фундамент минимальная, так как многопустотные плиты весят совсем немного" />
            </div>
          </div>

          <p>
            Так же производим плиты перекрытия ПК шириной 600 мм; 750 мм; 1 м.Плиты с большими нагрузками:
            10; 12,5.Цена данной продукции по запросу.
          </p>

          <capture-card
            v-model:name="name"
            v-model:phone="phone"
            class="concrete-solutions__capture-card mb-3"
            title="Есть вопросы — спрашивайте!"
            subtitle="Наши специалисты проконсультируют вас по любым вопросам и сделают точный расчет"
            @send-button-clicked="sendCapture"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainBanner from '~/components/mainBanner/MainBanner.vue'
import Lintels from 'assets/img/banners/lintels.png'
import MainBannerItem from '~/components/mainBanner/MainBannerItem.vue'
import HeadBannerForm from '~/components/headBanner/HeadBannerForm.vue'
import { useFetch, useState } from '#app'
import SelectionAll from '~/assets/icons/selection-all.svg'
import ShieldChevron from '~/assets/icons/shield-chevron.svg'
import Tabs from '~/assets/icons/tabs.svg'
import MAdvantage from '~/components/_common/advantage/mAdvantage.vue'
import CaptureCard from '~/components/_common/cards/CaptureCard.vue'

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
