<template>
  <div class="about-company">
    <div class="about-company__container container p-5">
      <h2 class="mb-4 fw-bold h1">
        О компании
      </h2>
      <div class="about-company__text">
        Компания ООО «Мегаполис-Снаб» является производителем железобетонных изделий, а так же оказывает услуги по погружению свай методом статического вдавливания.
        <br>
        <br>
        Компания работает с 2014 года. Основное производство находится в Брянской области.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.about-company {
  background-image: url("@/assets/backgrounds/about-company.png");
  background-size: cover;
  background-position: center;
  color: white;

  &__container {
    padding-bottom: 70px !important;
  }

  &__text {
    max-width: 416px;
  }

  &__card {
    max-width: 636px;
  }

  &__form-container {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 12px
  }

  &__field {
    flex: 1 1 226px;
  }
}
</style>
