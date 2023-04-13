<template>
  <div class="social-media-icons">
    <a href="https://t.me/megapolissnab" rel="nofollow noopener" target="_blank">
      <telegram class="social-media-icons__icon clickable" />
    </a>
    <a href="https://wa.me/79001559166" rel="nofollow noopener" target="_blank">
      <whatsapp class="social-media-icons__icon clickable" />
    </a>
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
