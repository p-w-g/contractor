<template>
  <div>
    <foretag />
    <kontakt />
    <avdrag />
    <disclaimers />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Foretag from '../components/settings/Foretag.vue'
import Kontakt from '../components/settings/Kontakt.vue'
import Disclaimers from '../components/settings/Disclaimers.vue'
import Avdrag from '@/components/settings/Avdrag.vue'

export default defineComponent({
  name: 'Settings',
  components: {
    Foretag,
    Kontakt,
    Disclaimers,
    Avdrag
  }
})
</script>

<style></style>
