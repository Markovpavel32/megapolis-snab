<template>
  <div class="m-tabs">
    <component
      :is="tag"
      class="nav"
      :class="{ 'flex-column': vertical }"
    >
      <li v-for="tab in tabs" class="nav-item">
        <nuxt-link class="nav-link" :to="tab?.path || tab?.to">
          {{ tab.title }}
        </nuxt-link>
      </li>
    </component>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Tab } from '~/components/_common/tabs/types'

interface IProps {
  tag?: string;
  tabs: Tab[];
  vertical?: boolean;
}

withDefaults(defineProps<IProps>(), {
  tag: 'ul'
})
</script>

<style lang="scss" scoped></style>
