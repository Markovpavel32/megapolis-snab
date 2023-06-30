<template>
  <render />
</template>

<script lang="ts" setup>
import { useSlots, h} from 'vue'
import { Carousel, Pagination, Navigation } from 'vue3-carousel'

const slots = useSlots()
const render = () => {
  return  h('div', { class: 'mv-slide' }, [
    h(Carousel, { 'items-to-show': 1 }, {
      default: () => slots.default && slots.default().map(slide => {
        if (!slide.props) slide.props = {}
        return slide
      }),
      addons: () => [ h(Navigation),  h(Pagination) ]
    })
  ])
}
</script>

<style lang="scss" scoped>
@import '/assets/styles/main';
:deep(.carousel__pagination) {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
}

:deep(.carousel__pagination-button::after) {
  width: 30px;
  height: 3px;
  background: $surface;
}

:deep(.carousel__pagination-button--active::after) {
  background: $secondary;
}
</style>

