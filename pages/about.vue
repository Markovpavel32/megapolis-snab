<template>
  <div class="container about">
    <div class="row">
      <div class="col-3" />
      <div class="col-9 about__main p-5">
        <div class="h2">
          О заводе
        </div>
        <p>
          Компания «Мега Бетон» является одним из лидеров в своем сегменте. Большой опыт компании и дружная команда
          позволяют нам предлагать свою продукцию на высоком уровне.
        </p>

        <p>
          Каждый клиент, который обратился к нам, осталася доволен. Мы знаем - что необходимо клиенту, поэтому всегда
          попадаем в цель.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '/assets/styles/main';
.about {
  &__main {
    background-color: $surface;
  }
}
</style>
