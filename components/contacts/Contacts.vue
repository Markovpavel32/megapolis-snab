<template>
  <div class="contacts">
    <div class="d-md-none contacts__info">
      <h2 class="contacts-card__title mb-5">
        Контакты
      </h2>
      <div class="contacts__address">
        Брянский район, с.Толмачево, ул. Трудовая, 54
      </div>
      <a class="contacts__email" href="mailto:megapolis-snab@mail.ru">megapolis-snab@mail.ru</a>
      <a class="contacts__phone" href="tel:+74832305555">+7 (4832) 30-55-55 </a>
      <a class="contacts__phone" href="tel:+74832345555">34-55-55</a>
      <a class="contacts__phone" href="tel:+74832305550">30-55-50 (факс)</a>
      <social-media-icons />
    </div>
    <div class="container z-1 d-md-block d-none">
      <b-card no-body class="contacts-card">
        <b-card-title class="contacts-card__title mb-5">
          Контакты
        </b-card-title>
        <div class="contacts__address">
          Брянский район, с.Толмачево, ул. Трудовая, 54
        </div>
        <a class="contacts__email" href="mailto:megapolis-snab@mail.ru">megapolis-snab@mail.ru</a>
        <a class="contacts__phone" href="tel:+74832305555">+7 (4832) 30-55-55 </a>
        <a class="contacts__phone" href="tel:+74832345555">34-55-55</a>
        <a class="contacts__phone" href="tel:+74832305550">30-55-50 (факс)</a>
        <social-media-icons />
      </b-card>
    </div>
    <div id="iframe">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae73eaf86b02b1a6ccdb649fb1564f0472885543c3c236630fd20752e630cb20c&amp;source=constructor"
        width="100%"
        height="100%"
        frameborder="0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '/assets/styles/main';

.contacts {
  position: relative;
  background: $surface;

  &__info {
    max-width: 416px;
    padding-left: 36px;
    padding-top: 32px;
    padding-bottom: 55px;
  }

  @media (min-width: 768px) {
    padding: 86px;
  }
  #iframe {
    max-height: 272px;

    @include media-breakpoint-up(xs) {
      max-height: 652px;
    }

    @include media-breakpoint-up(md) {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 0;
        max-height: 100%;
      }
  }


  &-card {
    max-width: 648px;
    z-index: 1;

    &__title {
      font-size: 32px;
      color: black;
    }
    padding: 86px 123px 88px 109px;
  }

  &__address {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 12px;
  }

  &__email, &__phone {
    display: block;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 12px;
  }
}
</style>
