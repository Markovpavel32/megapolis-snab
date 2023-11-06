<template>
  <b-card class="workflow-card">
    <b-card-title class="workflow-card__index">
      <div class="workflow-card__index-border">
        {{ index }}<div />
      </div>
    </b-card-title>
    <b-card-title>{{ title }}</b-card-title>
    {{ text }}
  </b-card>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
  text: string;
  index: number;
}

defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import '/assets/styles/main';

.workflow-card {
  &__index {
    color: $tertiary;

    &-border {
      border: 1px solid $tertiary;
      border-radius: 100%;
      display: flex;
      width: 32px;
      height: 32px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
