<template>
  <p>first page</p>
  <corpo-footer />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CorpoFooter from './CorpoFooter.vue'
export default defineComponent({
  name: 'FirstPage',  components: { CorpoFooter }
})
</script>
