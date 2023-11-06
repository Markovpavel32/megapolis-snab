<template>
  <div class="products-list">
    <b-card
      v-for="(product, i) in products"
      :key="i"
      class="products-list__card clickable"
      v-bind="product"
      @click="$router.push('/products/' + product.value)"
    >
      <b-card-text>
        {{ product.text }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import { useState } from '#app'
import productsList from "~/const/productsList"

const products = useState('products', () => productsList)
</script>

<style lang="scss" scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  &__card {
    flex: 1 1 416px;
  }
}
</style>
