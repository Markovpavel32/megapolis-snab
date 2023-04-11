<template>
  <div class="app-header">
    <div class="app-header__info container" :class="{ bordered: !isMenuOpened }">
      <div class="app-header__info__logo">
        <logo />
      </div>
      <div class="app-header__info__burger-icon clickable d-md-none">
        <m-burger v-model:is-opened="isMenuOpened" />
      </div>
      <div class="app-header__info__delivery d-none d-lg-block">
        Доставка по центральному федеральному округу
      </div>
      <div class="app-header__info__phones d-none d-md-block">
        <phone />
        <span>+7 (4832) 30-55-55</span>
      </div>
      <b-button class="d-none d-lg-inline-block" variant="outline-primary">
        Перезвоните мне
      </b-button>
      <social-media-icons class="d-none d-md-flex d-lg-none" />
    </div>
    <div v-if="!isMenuOpened" class="app-header__info__phones justify-content-center d-md-none my-1">
      <phone />
      <span>+7 (4832) 30-55-55</span>
    </div>
    <div v-else>
      <m-nav-tabs class="app-header__nav-tabs" :tabs="navigationTabs" vertical />
      <div class="app-header__social-media d-flex align-items-center mx-3">
        Напишите нам <social-media-icons />
      </div>
      <div class="d-grid mb-3">
        <b-button class="mx-3" variant="outline-primary">
          Перезвоните мне
        </b-button>
      </div>
    </div>
    <div class="justify-content-between container p-0 d-none d-md-flex">
      <m-nav-tabs class="app-header__nav-tabs" :tabs="navigationTabs" />
      <div class="app-header__social-media d-none d-lg-flex align-items-center">
        Напишите нам <social-media-icons />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MNavTabs from '~/components/_common/tabs/mNavTabs.vue'
import { Tab } from '~/components/_common/tabs/types'
import Logo from '~/assets/logo.svg'
import Phone from '~/assets/icons/phone.svg'
import SocialMediaIcons from '~/components/socialMediaIcons/SocialMediaIcons.vue'
import MBurger from '~/components/_common/burger/mBurger.vue'
import { ref } from 'vue'

const navigationTabs = ref<Tab[]>([
  {
    key: 'main',
    title: 'Главная',
    path: '/',
  },
  {
    key: 'about',
    title: 'О заводе',
    path: 'about'
  },
  {
    key: 'production',
    title: 'Продукция',
  },
  {
    key: 'pilesIndentation',
    title: 'Вдавливание свай',
  },
  {
    key: 'delivery',
    title: 'Доставка',
  },
  {
    key: 'prices',
    title: 'Цены',
  },
  {
    key: 'Contacts',
    title: 'Контакты',
  },
])

const isMenuOpened = ref(false)
</script>

<style lang="scss" scoped>
@import '/assets/styles/main';
$header-background: $surface;

.app-header {
  background: $header-background;
  &__info {
    display: flex;
    padding: 16px;
    align-items: center;

    &__logo {
      flex-basis: 306px;
      padding-right: 16px;
      margin-right: 16px;
      @include media-breakpoint-up(md) {
        border-right: 1px solid #004985;
      }

      @include media-breakpoint-down(lg) {
        width: 216px;
        height: 27px;
      }
    }

    &__burger-icon {
      margin-left: auto;
      flex-basis: 26px;
      flex-shrink: 0;
      width: 26px;
    }

    &__delivery {
      flex-basis: 243px;
      color: $primary;
    }

    &__phones {
      display: flex;
      margin-left: auto;
      gap: 12px;
      font-weight: bold;
      font-size: 20px;
      margin-right: 32px;
    }
  }

  &__info.bordered {
    border-bottom: 1px solid rgba(0, 73, 133, 0.3);
  }

  &__nav-tabs {
    padding: 0;
  }

  &__social-media {
    font-weight: 700;
    font-size: 18px;
  }

  :deep(.nav-link) {
    color: black;
  }
}
</style>
