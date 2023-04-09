<template>
  <div class="animated-icon" :class="{ open: isOpened }" @click="isOpened = !isOpened">
    <span />
    <span />
    <span />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  isOpened?: boolean;
}

const props = withDefaults(defineProps<IProps>(), { isOpened: false })
const emit = defineEmits(['update:isOpened'])
const isOpened = ref(props.isOpened)

watch(isOpened, value => {
  emit('update:isOpened', value)
})

watch(() => props.isOpened, value => {
  isOpened.value = value
})
</script>

<style lang="scss" scoped>
@import '/assets/styles/main';
.animated-icon {
  width: 30px;
  height: 20px;
  position: relative;
  margin: 0;
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

.animated-icon span {
  display: block;
  position: absolute;
  height: 1.5px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

.animated-icon span {
  background: $primary;
}

.animated-icon span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.animated-icon span:nth-child(2) {
  top: 10px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.animated-icon span:nth-child(3) {
  top: 20px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.animated-icon.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 0px;
  left: 8px;
}

.animated-icon.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

.animated-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 21px;
  left: 8px;
}
</style>
