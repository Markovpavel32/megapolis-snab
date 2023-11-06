<template>
  <div class="concrete-solutions">
    <main-banner>
      <main-banner-item :img-src="Piles" active>
        <template #caption>
          <head-banner-form
            header="Сваи железобетонные"
            description="Производим сваи 300х300; 350х350; 400х400 длинной до 16 метров с доставкой"
          />
        </template>
      </main-banner-item>
    </main-banner>
    <div class="container">
      <div class="row">
        <div class="col-3 d-none d-md-block" />
        <div class="col-12 col-md-9 p-12 concrete-solutions__main">
          <b-table-simple class="mb-6">
            <b-thead>
              <b-tr>
                <b-th>Наименование</b-th>
                <b-th>Размеры, мм LxBxH</b-th>
                <b-th>Вес, кг</b-th>
                <b-th>Цена за шт, руб с НДС</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="item in piles" :key="item.name">
                <b-td>{{ item.name }}</b-td>
                <b-td>{{ item.size }}</b-td>
                <b-td>{{ item.weight }}</b-td>
                <b-td>{{ item.price }}</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <p>
            * Уточняйте точную стоимость наших товаров и услуг по телефону или по электронной почте.
            Обращаем ваше внимание на то, что цены могут варьироваться в зависимости от объема.
          </p>
          <p>
            Производим сваи 300х300; 350х350; 400х400 длинной до 16 метров с доставкой
          </p>
          <p>
            Компания «Мегабетон» предлагает купить железобетонные, забивные сваи в Брянске. Вся продукция
            изготавливается в строгом соответствии с ГОСТ, всеми нормами и допусками. Забивание сваи ЖБИ прочная
            основа фундамента. От них зависит прочность и долговечность здания. За счет полного погружения при
            забивании уплотняется грунт из-зодчего расчётное сопротивление под концом ствола увеличивается и в разы
            больше чем у подобных грунтов. Фундамент на забивных сваях прочнее и наиболее контролируем по несущей
            способности.
          </p>
          <p>
            Сваи забивные – это изделия из железобетона. Выполнены они в виде стержней, которые погружаются в грунт
            вдавливанием или забиванием.
          </p>
          <p>
            Изделие железобетонное со стальной ненапрягаемой арматурой.
          </p>
          <p>
            Соответствует ГОСТ 19804-2012.
          </p>
          <p>
            Длина составляет максимум 16 метров.
          </p>
          <p>
            Используется бетон класса В20 и выше.
          </p>
          <p>
            Используются при возведении фундаментов для усиления имеющегося фундамента в процессе ремонта и
            восстановления поврежденного фундамента в частном домостроении и промышленном строительстве.
          </p>
          <p>
            Применение забивных свай возможно в условиях любого климата.
          </p>
          <p>
            Осуществляем доставку свай по регионам!
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
import Piles from 'assets/img/banners/piles.png'
import MainBannerItem from '~/components/mainBanner/MainBannerItem.vue'
import HeadBannerForm from '~/components/headBanner/HeadBannerForm.vue'
import { useFetch, useState } from '#app'
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

const piles = useState('piles', () => [
  {
    name: 'С60.30-8у В20W4',
    size: '6000х300х300',
    weight: '1400',
    price: 'По запросу'
  },
  {
    name: 'С70.30-8у В20W4',
    size: '7000х300х300',
    weight: '1600',
    price: 'По запросу'
  },
  {
    name: 'С80.30-8у В25W4',
    size: '8000х300х300',
    weight: '1830',
    price: 'По запросу'
  },
  {
    name: 'С90.30-8у В25W4',
    size: '9000х300х300',
    weight: '2050',
    price: 'По запросу'
  },
  {
    name: 'С100.30-8у В25W4',
    size: '10000х300х300',
    weight: '2280',
    price: 'По запросу'
  },
  {
    name: 'С110.30-8у В25W4',
    size: '11000х300х300',
    weight: '2500',
    price: 'По запросу'
  },
  {
    name: 'С120.30-8у В25W4',
    size: '12000х300х300',
    weight: '2730',
    price: 'По запросу'
  },
])
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
