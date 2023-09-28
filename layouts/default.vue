<template>
  <div class="layout">
    <app-header />
    <slot />
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/appHeader/AppHeader.vue'
import AppFooter from '~/components/appFooter/AppFooter.vue'
</script>

<style lang="scss" scoped></style>
