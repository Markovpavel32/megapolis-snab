<template>
  <div class="d-flex">
    <div class="mr-3">
      <component :is="icon" />
    </div>
    <div>{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string,
  icon: any
}>()
</script>

<style scoped lang="scss">

</style>
