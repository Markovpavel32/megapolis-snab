<template>
  <render />
</template>

<script lang="ts" setup>
import { useSlots, h} from 'vue'
import { Carousel, Pagination, Navigation } from 'vue3-carousel'

interface IProps {
  itemsToShow?: number;
  breakpoints?: Record<number, Record<string, string|number>>;
  pagination?: boolean;
  viewportVisible?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  itemsToShow: 1,
  pagination: true,
  breakpoints: () => ({}),
  viewportVisible: false,
})

const slots = useSlots()
const render = () => {
  return  h('div', { class: { 'mv-slide': true, 'viewportVisible': props.viewportVisible } }, [
    h(Carousel, { 'items-to-show': props.itemsToShow, breakpoints: props.breakpoints }, {
      default: () => slots.default && slots.default().map(slide => {
        if (!slide.props) slide.props = {}
        return slide
      }),
      addons: () => [ h(Navigation),  props.pagination && h(Pagination) ]
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

.viewportVisible {
  :deep(.carousel__viewport) {
    overflow: visible;
  }
}
</style>

