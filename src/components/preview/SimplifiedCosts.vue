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
      const total = store.getters.grandTotal
      if (total === undefined || total === null || Number.isNaN(total)) {
        return 0
      }
      return total
    },

    percentage(): number {
      const percentage = store.getters.avdrag.percentage
      if (
        percentage === undefined ||
        percentage === null ||
        Number.isNaN(percentage)
      ) {
        return 0
      }
      return percentage
    },

    deducted(): number {
      const deductedAmount = store.getters.deductedAmount
      if (
        deductedAmount === undefined ||
        deductedAmount === null ||
        Number.isNaN(deductedAmount)
      ) {
        return 0
      }
      return (deductedAmount / 100) * this.percentage
    },
    payable(): number {
      if (this.grandTotal === 0) {
        return 0
      }
      return this.grandTotal - this.deducted
    }
  }
})
</script>
