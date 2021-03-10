<template>
  <Foretag />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'
import Foretag from '../components/settings/Foretag.vue'

export default defineComponent({
  name: 'Settings',
  components: {
    Foretag
  }
})
</script>

<style></style>
