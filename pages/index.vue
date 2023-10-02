<template>
  <div>
    <head-banner />
    <div class="container mb-5">
      <h2 class="mb-4 fw-bold">
        Производство
      </h2>
      <products-list />
    </div>
    <capture-form class="mb-5" />
    <div class="container mb-5">
      <h2 class="mb-4 fw-bold">
        Наша техника
      </h2>
      <our-technics />
    </div>
    <about-company class="mb-5" />
    <our-advantages class="mb-5" />
  </div>
</template>

<script setup lang="ts">
import ProductsList from '~/components/productsList/ProductsList.vue'
import OurTechnics from '~/components/ourTechnics/OurTechnics.vue'
import AboutCompany from '~/components/aboutCompany/aboutCompany.vue'
import Partners from '~/components/partners/Partners.vue'
import CaptureForm from '~/components/captureForm/CaptureForm.vue'
import OurAdvantages from '~/components/ourAdvantages/OurAdvantages.vue'
import OurWorkflow from '~/components/ourWorkflow/OurWorkflow.vue'
import RequestForm from '~/components/requestForm/RequestForm.vue'
import Contacts from '~/components/contacts/Contacts.vue'
import HeadBanner from '~/components/headBanner/HeadBanner.vue'
</script>
