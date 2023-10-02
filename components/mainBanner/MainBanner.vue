<template>
  <div
    :id="id"
    class="carousel slide"
    data-bs-touch="false"
    data-bs-interval="false"
  >
    <div class="carousel-indicators">
      <button
        v-if="slidersLength > 1"
        class="carousel-control-prev"
        type="button"
        :data-bs-target="`#${id}`"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="visually-hidden">Previous</span>
      </button>
      <template v-if="slidersLength > 1">
        <button
          v-for="indicator in slidersLength"
          ref="indicators"
          :key="indicator"
          type="button"
          :data-bs-target="`#${id}`"
          :data-bs-slide-to="indicator - 1"
          :aria-label="`Slide ${indicator}`"
        />
      </template>

      <button
        v-if="slidersLength > 1"
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
import lodash from 'lodash'
import { onMounted } from '#imports'
import { ref, useSlots } from 'vue'

const { uniqueId } = lodash
const id = uniqueId('carousel_')
const slots = useSlots()
const slidersLength = slots.default && slots.default().length

const indicators = ref<null | HTMLButtonElement[]>(null)


onMounted(() => {
  if (indicators.value) indicators.value[0].classList.add('active')
})
</script>

<style lang="scss" scoped>
.carousel-indicators .carousel-control-prev,
.carousel-indicators .carousel-control-next, {
  position: static;
  background-color: transparent;
}
</style>

