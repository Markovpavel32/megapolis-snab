<template>
  <div class="app-header">
    <div class="app-header__info container">
      <div class="app-header__info__logo">
        <logo />
      </div>
      <div class="app-header__info__delivery">
        Доставка по центральному федеральному округу
      </div>
      <div class="app-header__info__phones">
        <phone />
        <span>+7 (4832) 30-55-55,</span>
        <span>+7 (4832) 30-55-55</span>
      </div>
      <b-button variant="outline-primary">Перезвоните мне</b-button>
    </div>
    <m-nav-tabs class="app-header__nav-tabs container" :tabs="navigationTabs" />
  </div>
</template>

<script setup lang="ts">
import MNavTabs from '~/components/_common/tabs/mNavTabs.vue'
import { Tab } from '~/components/_common/tabs/types';
import Logo from 'assets/logo.svg'
import Phone from '~/assets/icons/phone.svg'
import MButton from '~/components/_common/button/mButton.vue';

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
</script>

<style lang="scss" scoped>
@import '/assets/styles/variables';
$header-background: $surface;

.app-header {
  background: $header-background;
  &__info {
    display: flex;
    padding: 16px;
    border-bottom: 1px solid $primary;
    align-items: center;

    &__logo {
      flex-basis: 306px;
      padding-right: 16px;
      margin-right: 16px;
      border-right: 1px solid #004985;
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

  &__nav-tabs {
    padding: 0;
  }

  :deep(.nav-link) {
    color: black;
  }
}
</style>
