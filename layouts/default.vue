<template>
  <div class="layout">
    <app-header />
    <slot />
    <our-workflow class="mb-5" />
    <partners class="mb-5" />
    <request-form />
    <contacts />
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/appHeader/AppHeader.vue'
import AppFooter from '~/components/appFooter/AppFooter.vue'
import Contacts from '~/components/contacts/Contacts.vue'
import OurWorkflow from '~/components/ourWorkflow/OurWorkflow.vue'
import Partners from '~/components/partners/Partners.vue'
import RequestForm from '~/components/requestForm/RequestForm.vue'
</script>

<style lang="scss" scoped></style>
