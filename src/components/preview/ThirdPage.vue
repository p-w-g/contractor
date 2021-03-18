<template>
  <p>Third page</p>
  <corpo-footer />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CorpoFooter from './CorpoFooter.vue'
export default defineComponent({
  name: 'ThirdPage',
  components: { CorpoFooter }
})
</script>
