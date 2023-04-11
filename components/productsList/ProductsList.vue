<template>
  <div class="products-list">
    <b-card
      v-for="(product, i) in products"
      :key="i"
      class="products-list__card"
      v-bind="product"
    >
      <b-card-text>
        {{ product.text }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import concreteSolutions from '~/assets/img/productCards/concreteSolutions.png'
import indentationOfPiles from '~/assets/img/productCards/indentationOfPiles.png'
import floorSlab from '~/assets/img/productCards/floorSlab.png'
import reinforcedConcreteLintels from '~/assets/img/productCards/reinforcedConcreteLintels.png'
import foundationBlocks from '~/assets/img/productCards/foundationBlocks.png'
import reinforcedConcretePiles from '~/assets/img/productCards/reinforcedConcretePiles.png'

const products = useState('products', () => [
  {
    title: 'Бетонные растворы',
    imgSrc: concreteSolutions,
    imgTop: true,
    text: 'Поставляем различные бетонные растворы'
  },
  {
    title: 'Вдавливание свай',
    imgSrc: indentationOfPiles,
    imgTop: true,
    text: 'Цены до 800 руб. за пог. метр сваи с НДС. В зависимости от объема цена обговаривается'
  },
  {
    title: 'Плита перекрытия ПК',
    imgSrc: floorSlab,
    imgTop: true,
    text: 'Прямые поставки многопустотных плит ПК по обоснованным ценам.'
  },
  {
    title: 'Перемычки железобетонные',
    imgSrc: reinforcedConcreteLintels,
    imgTop: true,
    text: 'Прямые поставки перемычки железобетонные для зданий'
  },
  {
    title: 'Блоки фундаментные',
    imgSrc: foundationBlocks,
    imgTop: true,
    text: 'Предлагаем качественные блоки ФБС ГОСТ 13579-78 с доставкой по России'
  },
  {
    title: 'Сваи железобетонные',
    imgSrc: reinforcedConcretePiles,
    imgTop: true,
    text: 'Производим сваи 300х300; 350х350; 400х400 длинной до 16 метров'
  },
])
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
