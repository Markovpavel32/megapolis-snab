<template>
  <m-routed-tabs
    :tabs="tabs"
    tag="nav"
    :vertical="vertical"
    is-main-navigation
  />
</template>

<script setup lang="ts">
import MRoutedTabs from '~/components/_common/tabs/mRoutedTabs.vue'
import { Tab } from '~/components/_common/tabs/types'

interface IProps {
  tabs: Tab[];
  vertical?: boolean
}

defineProps<IProps>()
</script>

<style lang="scss" scoped></style>
