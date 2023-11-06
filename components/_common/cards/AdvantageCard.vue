<template>
  <b-card class="advantage-card">
    <b-card-title class="advantage-card__title mb-4">
      <slot name="title" />
    </b-card-title>
    {{ text }}
  </b-card>
</template>

<script setup lang="ts">
interface IProps {
  imgSrc?: string;
  alt?: string;
  text: string;
}

defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import '/assets/styles/main';
.advantage-card {
  &__title {
    color: $tertiary;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }
}
</style>
