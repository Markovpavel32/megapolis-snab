<template>
  <div class="our-advantages container">
    <advantage-card
      v-for="advantage in advantages"
      :key="advantage.id"
      class="our-advantages__advantage"
      alt="Куб"
      :text="advantage.text"
    >
      <template #title>
        <component :is="advantage.icon" v-if="advantage.icon" />
        <span v-else-if="advantage.title">{{ advantage.title }}</span>
      </template>
    </advantage-card>
  </div>
</template>

<script setup lang="ts">
import AdvantageCard from '~/components/_common/cards/AdvantageCard.vue'
import CubeIcon from '~/assets/icons/cube.svg'
import TruckIcon from '~/assets/icons/truck.svg'
import MapPinIcon from '~/assets/icons/map-pin.svg'

interface Advantage {
  id: number;
  icon?: string;
  title?: string;
  text: string;
}

const advantages: Advantage[] = [
    {
    icon: CubeIcon,
    text: 'Завод производит сваи, сваи мостовые, перемычки, блоки фундаментные, дорожные плиты, плиты перекрытия, бетонные растворы и смеси.',
    id: 1,
  },
  {
    icon: TruckIcon,
    text: 'Компания имеет большой парк техники для доставки продукции. Так же в собственности находится три новые сваевдавливающие установки Sunward ZYJ360B, 2022 г. производства',
    id: 2,
  },
  {
    icon: MapPinIcon,
    text: 'Доставка продукци и осуществление услуг по вдавливанию свай производится по всей России.',
    id: 3,
  },
  {
    title: '300+',
    text: 'Тонн продукции произведено',
    id: 4,
  },
  {
    title: '100 000+',
    text: 'Свай вдавлено',
    id: 5,
  },
  {
    title: '40+',
    text: 'Сотрудников в компании',
    id: 6,
  },
]
</script>

<style lang="scss" scoped>
.our-advantages {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  &__advantage {
    flex: 1 1 368px;
  }
}
</style>
