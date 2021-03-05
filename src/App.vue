<template>
  <new-offer></new-offer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NewOffer from './views/NewOffer.vue'

export default defineComponent({
  name: 'App',
  components: { NewOffer }
})
</script>

<style lang="scss">
@use './assets/fr-theme/common';
</style>
