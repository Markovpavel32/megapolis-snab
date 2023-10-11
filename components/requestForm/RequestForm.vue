<template>
  <div class="request-form">
    <div class="container p-12">
      <capture-card
        v-model:name="name"
        v-model:phone="phone"
        title="Оставьте заявку на расчет"
        subtitle="Наши специалисты проконсультируют вас по любым вопросам и помогут с точным расчетом"
        @send-button-clicked="sendRequest"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import CaptureCard from '~/components/_common/cards/CaptureCard.vue'
import { useFetch, useState } from '#app'

const name = useState('name', () => '')
const phone = useState('phone', () => '')

const sendRequest = async () => {
  await useFetch('api/request', {
    method: 'POST',
    body: {
      name: name.value,
      phone: phone.value,
    }
  })
}
</script>

<style lang="scss" scoped>
.request-form {
  background-image: url("@/assets/backgrounds/request-form.png");
}
</style>
