<template>
  <m-tabs :tabs="tabs" :tag="tag">
    <nuxt-page v-if="!isMainNavigation" />
  </m-tabs>
</template>

<script setup lang="ts">
import MTabs from '~/components/_common/tabs/mTabs.vue';
import { Tab } from '~/components/_common/tabs/types';

interface IProps {
  tabs: Tab[];
  tag?: string;
  currentTab?: string;
  isMainNavigation?: boolean;
}

withDefaults(defineProps<IProps>(), {
  currentTab: ({ tabs }) => tabs[0].key
})
</script>

<style lang="scss" scoped></style>
