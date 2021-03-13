<template>
  <settings />
  <new-offer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NewOffer from './views/NewOffer.vue'
import Settings from './views/Settings.vue'

export default defineComponent({
  name: 'App',
  components: { NewOffer, Settings }
})
</script>

<style lang="scss">
@use './assets/fr-theme/common';
</style>
