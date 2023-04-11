<template>
  <div class="layout">
    <app-header />
    <slot />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/appHeader/AppHeader.vue'
</script>

<style lang="scss" scoped></style>
