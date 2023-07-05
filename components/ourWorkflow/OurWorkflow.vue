<template>
  <div class="our-workflow">
    <div class="our-workflow__container container p-5">
      <div class="our-workflow__header">
        <h2 class="our-workflow__title mb-4 fw-bold">
          Как мы работаем
        </h2>
        <div class="our-workflow__subtitle mb-5">
          Пошаговый алгоритм услуги возведения надежного и долговечного фундамента на железобетонных забивных сваях
        </div>
      </div>
      <div class="our-workflow__cards">
        <m-carousel
          class="our-workflow__carousel d-lg-none"
          :breakpoints="breakPoints"
          :items-to-show="2"
          :pagination="false"
          viewport-visible
        >
          <slide v-for="(workflow, i) in workflows" :key="i">
            <workflow-card
              class="our-workflow__card"
              :index="i + 1"
              :text="workflow.text"
              :title="workflow.title"
            />
          </slide>
        </m-carousel>
        <div class="our-workflow__cards-container d-none d-lg-flex">
          <workflow-card
            v-for="(workflow, i) in workflows"
            :key="i"
            class="our-workflow__card"
            :index="i + 1"
            :text="workflow.text"
            :title="workflow.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WorkflowCard from '~/components/_common/cards/WorkflowCard.vue'
import MCarousel from '~/components/_common/carousel/mCarousel.vue'
import { Slide } from 'vue3-carousel'

interface IWorkflow {
  title: string;
  text: string;
}

const breakPoints = {
  0: {
    itemsToShow: 1,
  },
  768: {
    itemsToShow: 2,
  },
}
const workflows: IWorkflow[] = [
  {
    title: 'Поступление заявки и расчет работ',
    text: 'Для того чтобы оставить заявку Вы можете написать нам на электронную почту или позвонить по указанному номеру телефона'
  },
  {
    title: 'Выезд инженера и ознакомление с объектом (площадкой)',
    text: 'После согласования цен, условий оплаты и сроков строительства менеджер согласует с вами удобное время для осмотра участка специалистом'
  },
  {
    title: 'Производство работ',
    text: 'Подписываем договор на оказание услуг, после чего приступаем к работам по вдавливанию свай. Перевозим технику, делаем разметку строительной площадки и формирование свайного поля'
  },
  {
    title: 'Приём работ',
    text: 'Мы подготавливаем исполнительную документацию. Заказчик проверяет качество работ, подписывает приемо-сдаточный акт и производится окончательный расчет.'
  }
]
</script>

<style lang="scss" scoped>
@import '/assets/styles/main';

.our-workflow {
  background-image: url("@/assets/backgrounds/workflow.png");
  color: $surface;

  &__header {
    max-width: 416px;
  }

  &__cards-container {
    flex-wrap: wrap;
    gap: 24px;
  }

  &__card {
    flex: 1 1 200px;
  }

  &__carousel {
    :deep(.carousel__pagination) {
      bottom: -20px !important;
    }

    :deep(.carousel__prev) {
      top: auto;
      bottom: -50px;
      color: $surface;
      right: 40px;
      left: auto;
    }
    :deep(.carousel__next) {
      top: auto;
      bottom: -50px;
      color: $surface;
      right: 0;
      left: auto;
    }
  }

  &__carousel &__card {
    height: 100%;
    width: 306px;
    margin-right: 24px;
  }
}
</style>
