<template>
  <div class="layout">
    <app-header />
    <div class="container">
      <slot />
    </div>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/appFooter/AppFooter.vue'
import AppHeader from '~/components/appHeader/AppHeader.vue'
</script>

<style scoped lang="scss">

</style>
