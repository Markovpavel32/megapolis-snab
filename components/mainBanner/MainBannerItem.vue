<template>
  <div ref="item" class="carousel-item">
    <div v-if="imgSrc">
      <slot name="img">
        <img class="carousel-item__img" :src="imgSrc" :alt="alt">
      </slot>
      <slot />
    </div>
    <svg
      v-else
      class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
      width="800"
      height="400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: First slide"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    ><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text
      x="50%"
      y="50%"
      fill="#555"
      dy=".3em"
    >First slide</text></svg>
    <slot name="caption" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from '#imports'
import { ref } from 'vue'

interface IProps {
  imgSrc?: string;
  alt?: string;
  active?: boolean;
}

const props = defineProps<IProps>()
const item = ref<null | HTMLElement>(null)
const slots = useSlots()

onMounted(() => {
  if (props.active) item.value?.classList.add('active')
})
</script>

<style lang="scss" scoped>
.carousel {
  &-item {
    &__img {
      height: 600px;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
