<template>
  <div class="capture-form">
    <div class="container p-12">
      <capture-card
        v-model:name="name"
        v-model:phone="phone"
        title="Есть вопросы — спрашивайте!"
        subtitle="Наши специалисты проконсультируют вас по любым вопросам и сделают точный расчет"
        @send-button-clicked="sendCapture"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CaptureCard from '~/components/_common/cards/CaptureCard.vue'
import { useFetch, useState } from '#app'

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

<style lang="scss" scoped>
.capture-form {
  background-image: url("@/assets/backgrounds/capture-form.png");
}
</style>
