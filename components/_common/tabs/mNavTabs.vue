<template>
  <m-routed-tabs :tabs="tabs" tag="nav" is-main-navigation />
</template>

<script setup lang="ts">
import MRoutedTabs from '~/components/_common/tabs/mRoutedTabs.vue';
import { Tab } from '~/components/_common/tabs/types';

interface IProps {
  tabs: Tab[];
}

defineProps<IProps>();
</script>

<style lang="scss" scoped></style>
