<template>
  <div
    :id="id"
    class="carousel slide"
    data-bs-touch="false"
    data-bs-interval="false"
  >
    <div class="carousel-indicators">
      <button
        class="carousel-control-prev"
        type="button"
        :data-bs-target="`#${id}`"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        v-for="indicator in slidersLength"
        ref="indicators"
        type="button"
        :data-bs-target="`#${id}`"
        :data-bs-slide-to="indicator - 1"
        :aria-label="`Slide ${indicator}`"
      />
      <button
        class="carousel-control-next"
        type="button"
        :data-bs-target="`#${id}`"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="carousel-inner">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { uniqueId } from 'lodash'
import { Button } from 'bootstrap'
import { onMounted } from '#imports'

interface IProps {
  controls?: boolean;
}

const id = uniqueId('carousel_')
const slots = useSlots()
const slidersLength = slots.default && slots.default().length

const indicators = ref<null | Button>(null)


onMounted(() => {
  indicators.value && indicators.value[0].classList.add('active')
})
</script>

<style lang="scss" scoped>
.carousel-indicators .carousel-control-prev,
.carousel-indicators .carousel-control-next, {
  position: static;
  background-color: transparent;
}
</style>

