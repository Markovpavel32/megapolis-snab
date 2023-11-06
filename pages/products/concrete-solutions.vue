<template>
  <div class="concrete-solutions">
    <main-banner>
      <main-banner-item :img-src="ConcreteSolutions" active>
        <template #caption>
          <head-banner-form
            header="Бетонные растворы и смеси"
            description="Поставляем различные бетонные растворы и смеси по Брянску и рф"
          />
        </template>
      </main-banner-item>
    </main-banner>
    <div class="container">
      <div class="row">
        <div class="col-3 d-none d-md-block" />
        <div class="col-12 col-md-9 p-12 concrete-solutions__main">
          <h1 class="fw-bold">
            Стоимость бетонных растворов и смесей
          </h1>
          <b-tabs pills>
            <b-tab title="Растворы">
              <div class="my-4">
                <h3 class="fw-bold">
                  Растворы
                </h3>
                <b-table-simple>
                  <b-thead>
                    <b-tr>
                      <b-th>Марка бетона</b-th>
                      <b-th>Стоимость без ПМД</b-th>
                    </b-tr>
                  </b-thead>
                  <b-tbody>
                    <b-tr v-for="item in solutions" :key="item.title">
                      <b-td>{{ item.title }}</b-td>
                      <b-td>{{ item.value }}</b-td>
                    </b-tr>
                  </b-tbody>
                </b-table-simple>
              </div>
            </b-tab>
            <b-tab title="Бетона на граните">
              Бетона на граните
            </b-tab>
            <b-tab title="Бетон на гравии">
              Бетон на гравии
            </b-tab>
          </b-tabs>
          <div class="concrete-solutions__footnote">
            <p>
              * Уточняйте точную стоимость наших товаров и услуг по телефону или по электронной почте. Обращаем ваше
              внимание на то, что цены могут варьироваться в зависимости от объема.
            </p>
            <p>
              ** При заказе продукции с маркой по подвижности П4 (под АБН) стоимость возрастает на 50 руб/м³ (без НДС)
            </p>
          </div>
          <capture-card
            v-model:name="name"
            v-model:phone="phone"
            class="concrete-solutions__capture-card"
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
import ConcreteSolutions from 'assets/img/banners/concrete-solutions.png'
import MainBannerItem from '~/components/mainBanner/MainBannerItem.vue'
import HeadBannerForm from '~/components/headBanner/HeadBannerForm.vue'
import CaptureCard from '~/components/_common/cards/CaptureCard.vue'
import { useFetch, useState } from '#app'

const solutions = [
  {
    title: 'М50',
    value: '3100'
  },
  {
    title: 'М75',
    value: '3265'
  },
  {
    title: 'М100',
    value: '3715'
  },
  {
    title: 'М150',
    value: '3970'
  },
  {
    title: 'М200',
    value: '4245'
  },
]

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
