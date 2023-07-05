<template>
  <div class="capture-form">
    <div class="container p-5">
      <b-card class="capture-form__card">
        <h2 class="mb-3 fw-bold">
          Есть вопросы — спрашивайте!
        </h2>
        <b-card-text>Наши специалисты проконсультируют вас по любым вопросам и сделают точный расчет</b-card-text>
        <div class="capture-form__form-container">
          <b-form-input
            v-model="name"
            class="capture-form__field"
            type="text"
            placeholder="Ваше имя"
            size="lg"
          />
          <b-form-input
            v-model="data"
            class="capture-form__field"
            type="text"
            placeholder="Ваш email или телефон"
            size="lg"
          />
        </div>
        <b-button class="d-block w-100 mb-4" variant="primary" size="lg">
          Задать вопрос
        </b-button>
        <div class="d-flex align-items-center justify-content-center fw-semibold">
          Или напишите нам в <social-media-icons />
        </div>
      </b-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const name = useState('name', () => '')
const data = useState('data', () => '')
</script>

<style lang="scss" scoped>
.capture-form {
  background-image: url("@/assets/backgrounds/capture-form.png");

  &__card {
    max-width: 636px;
  }

  &__form-container {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 12px
  }

  &__field {
    flex: 1 1 226px;
  }
}
</style>
