<template>
  <div class="main__head">
    <h1 class="main__head-title text-uppercase">
      Производитель бетона<br> и железобетонных изделий
    </h1>
    <div class="main__head-description mb-5">
      Сваи, перемычки, плиты перекрытия, дорожные плиты, фундаментальные блоки
    </div>
    <div class="row">
      <div class="col">
        <b-form-input
          v-bind="input"
          :state="input.modelValue && !errors.input"
          class="main__banner-field me-3"
          type="text"
          placeholder="Ваш email или телефон"
          size="lg"
        />
      </div>
      <div class="col">
        <b-button
          class="main__banner-button col"
          variant="primary"
          size="lg"
          @click="sendCapture"
        >
          Рассчитать стоимость
        </b-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useFetch } from '#app'

const { values, errors, defineComponentBinds } = useForm({
  validationSchema: yup.object({
    input: yup.string().test('test-name', 'Enter Valid Phone/Email',
        function(value) {
          const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

          const phoneRegex = /^(\+7)?\d{10}$/ // Change this regex based on requirement
          let isValidEmail = emailRegex.test(value)
          let isValidPhone = phoneRegex.test(value)
          if (!isValidEmail && !isValidPhone ){
            return false
          }
          return true
        }).required(),
  }),
})

const input = defineComponentBinds('input')

const sendCapture = async () => {
  await useFetch('api/capture', {
    method: 'POST',
    body: {
      name: 'Banner',
      phone: input.value.modelValue,
    }
  })
}
</script>

<style scoped lang="scss">
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

  &__banner-field {
    max-width: 306px;
  }
}
</style>
