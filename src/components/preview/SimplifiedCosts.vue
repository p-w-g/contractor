<template>
  <div class="flex-row">
    <div class="col-left"><h4>Belopp:</h4></div>
    <div class="col-right">{{ this.grandTotal }}</div>
  </div>
  <div class="flex-row">
    <div class="col-left"><h4>Varav avdrag:</h4></div>
    <div class="col-right">
      <p>
        {{ this.deducted }}
      </p>
    </div>
  </div>
  <div class="flex-row">
    <div class="col-left"><h4>Att betala:</h4></div>
    <div class="col-right">{{ this.payable }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'

export default defineComponent({
  name: 'SimplifiedCosts',

  data: () => ({}),
  computed: {
    grandTotal(): number {
      return store.getters.grandTotal
    },

    percentage(): number {
      return store.getters.avdrag.percentage
    },

    deducted(): number {
      return (store.getters.deductedAmount / 100) * this.percentage
    },
    payable(): number {
      return this.grandTotal - this.deducted
    }
  }
})
</script>
