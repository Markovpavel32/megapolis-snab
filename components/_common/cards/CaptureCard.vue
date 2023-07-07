<template>
  <b-card class="capture-card">
    <h2 class="mb-3 fw-bold">
      {{ title }}
    </h2>
    <b-card-text>{{ subtitle }}</b-card-text>
    <div class="capture-card__form-container">
      <b-form-input
        v-model="localName"
        class="capture-card__field"
        type="text"
        placeholder="Ваше имя"
        size="lg"
      />
      <b-form-input
        v-model="localPhone"
        class="capture-card__field"
        type="text"
        placeholder="Ваш email или телефон"
        size="lg"
      />
    </div>
    <b-button
      class="d-block w-100 mb-4"
      variant="primary"
      size="lg"
      @click="emits('send-button-clicked')"
    >
      Задать вопрос
    </b-button>
    <div class="d-flex align-items-center justify-content-center fw-semibold">
      Или напишите нам в <social-media-icons />
    </div>
  </b-card>
</template>

<script setup lang="ts">
interface IProps {
  name: string;
  phone: string;
  title: string;
  subtitle: string;
}

const props = defineProps<IProps>()
const emits = defineEmits(['send-button-clicked', 'update:name', 'update:phone'])

const localName = computed({
  get() {
    return props.name
  },
  set(name) {
    emits('update:name', name)
  }
})

const localPhone = computed({
  get() {
    return props.phone
  },
  set(phone) {
    emits('update:phone', phone)
  }
})
</script>

<style lang="scss" scoped>
.capture-card {
  max-width: 636px;

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
