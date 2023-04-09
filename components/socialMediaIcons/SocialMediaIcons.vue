<template>
  <div class="social-media-icons">
    <telegram class="social-media-icons__icon clickable" />
    <whatsapp class="social-media-icons__icon clickable" />
  </div>
</template>

<script setup lang="ts">
import Telegram from '~/assets/icons/telegram.svg'
import Whatsapp from '~/assets/icons/whatsapp.svg'
</script>

<style lang="scss" scoped>
.social-media-icons {
  display: flex;
  gap: 8px;
  padding: 8px;

  &__icon {
    flex-basis: 32px;
    width: 32px;
    height: 32px;
  }
}
</style>
