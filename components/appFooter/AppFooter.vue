<template>
  <div class="app-footer py-5">
    <div class="container">
      <div class="row">
        <div class="app-footer__block col col-md-4 mb-3">
          <span class="app-footer__block-title text-uppercase d-block mb-3 fw-bolder">
            Товары и услуги
          </span>
          <nuxt-link class="app-footer__link d-block mb-3">
            Бетонные растворы
          </nuxt-link>
          <nuxt-link class="app-footer__link d-block mb-3">
            Плита перекрытия ПК
          </nuxt-link>
          <nuxt-link class="app-footer__link d-block mb-3">
            Вдавливание свай
          </nuxt-link>
          <nuxt-link class="app-footer__link d-block mb-3">
            Плита перекрытия ПК
          </nuxt-link>
          <nuxt-link class="app-footer__link d-block mb-3">
            Сваи железобетонные
          </nuxt-link>
          <nuxt-link class="app-footer__link d-block mb-3">
            Блоки фундаментные
          </nuxt-link>
        </div>
        <div class="app-footer__block col-12 col-md-4">
          <span class="app-footer__block-title text-uppercase d-block mb-3 fw-bolder">
            Другое
          </span>
          <nuxt-link class="app-footer__link d-block mb-3">
            Главная
          </nuxt-link>
          <nuxt-link class="app-footer__link d-block mb-3">
            О заводе
          </nuxt-link>
          <nuxt-link class="app-footer__link d-block mb-3">
            Вакансии
          </nuxt-link>
          <nuxt-link class="app-footer__link d-block mb-3">
            Реквизиты
          </nuxt-link>
          <nuxt-link class="app-footer__link d-block mb-3">
            Доставка
          </nuxt-link>
          <nuxt-link class="app-footer__link d-block mb-3">
            Цены
          </nuxt-link>
        </div>
        <div class="app-footer__block col-12 col-md-4">
          <span class="app-footer__block-title text-uppercase d-block mb-3">
            Контакты
          </span>
          <span class="app-footer__link d-block mb-3">
            +7 (4832) 30-55-55
          </span>
          <span class="app-footer__link d-block mb-3">
            34-55-55
          </span>
          <span class="app-footer__link d-block mb-3">
            30-55-50 (факс)
          </span>
          <span class="app-footer__link d-block mb-3">
            megapolis-snab@mail.ru
          </span>
          <span class="app-footer__link d-block mb-3 fw-bolder">
            Напишите нам
          </span>
          <social-media-icons />
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12 col-md-4 mb-5">
          <logo-inverted />
        </div>
        <div class="col-12 col-md-4 app-footer__link">
          Политика конфиденциальности
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoInverted from '~/assets/logo-inverted.svg'
import SocialMediaIcons from '~/components/socialMediaIcons/SocialMediaIcons.vue'
</script>

<style lang="scss" scoped>
@import '/assets/styles/main';

.app-footer {
  background-color: $primary;
  color: $white;

  &__link {
    color: $white;
  }
}
</style>
