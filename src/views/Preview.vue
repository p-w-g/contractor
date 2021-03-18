<template>
  <div>
    <first-page />
    <second-page />
    <third-page />
    <button class="unprintable" @click="print">Print</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'

import FirstPage from '../components/preview/FirstPage.vue'
import SecondPage from '@/components/preview/SecondPage.vue'
import ThirdPage from '@/components/preview/ThirdPage.vue'

export default defineComponent({
  name: 'Preview',
  components: {
    FirstPage,
    SecondPage,
    ThirdPage
  },
  methods: {
    print() {
      window.print()
    }
  }
})
</script>

<style lang="scss">
@media print {
  .kebab,
  .unprintable {
    display: none;
  }
}
</style>
