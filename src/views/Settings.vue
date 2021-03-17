<template>
  <div>
    <Foretag />
    <Kontakt />
    <Disclaimers />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Foretag from '../components/settings/Foretag.vue'
import Kontakt from '../components/settings/Kontakt.vue'
import Disclaimers from '../components/settings/Disclaimers.vue'
import store from '@/store/index'

export default defineComponent({
  name: 'Settings',
  components: {
    Foretag,
    Kontakt,
    Disclaimers
  },
  mounted() {
    store.dispatch('attemptLoadSettingsAction')
  }
})
</script>

<style></style>
