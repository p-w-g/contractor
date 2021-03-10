<template>
  <Foretag />
  <Kontakt />
  <Disclaimers />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Foretag from '../components/settings/Foretag.vue'
import Kontakt from '../components/settings/Kontakt.vue'
import Disclaimers from '../components/settings/Disclaimers.vue'

export default defineComponent({
  name: 'Settings',
  components: {
    Foretag,
    Kontakt,
    Disclaimers
  }
})
</script>

<style></style>
