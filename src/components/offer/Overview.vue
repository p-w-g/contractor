<template>
  <div class="fr__content-column">
    <h3>Sammanfattning</h3>
    <div>
      <article>
        <p>Angaende: {{ this.location.Angaende }}</p>
        <p>Fastighet: {{ this.location.Fastighet }}</p>
        <p>Jobbstart: {{ this.location.Jobbstart }}</p>
      </article>
    </div>
    <table>
      <tr>
        <th>Total:</th>
        <th>{{ grandTotal }}</th>
      </tr>
      <tr>
        <th>Att betala:</th>
        <th>{{ this.payable }}</th>
      </tr>
      <tbody>
        <etapp />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Etapp from './Etapp.vue'
import store from '@/store/index'
import { locationModel } from '@/store/models'

export default defineComponent({
  name: 'JobList',
  components: {
    Etapp
  },
  data: () => ({}),
  computed: {
    grandTotal(): number {
      const total = store.getters.grandTotal
      if (total === undefined || total === null || Number.isNaN(total)) {
        return 0
      }
      return total
    },

    location(): locationModel {
      return store.getters.location
    },

    percentage(): number {
      return store.getters.avdrag.percentage
    },

    payable(): number {
      const deductable = store.getters.deductedAmount
      if (
        deductable === undefined ||
        deductable === null ||
        Number.isNaN(deductable)
      ) {
        return 0
      }
      const deducted = (deductable / 100) * this.percentage
      return this.grandTotal - deducted
    }
  }
})
</script>
<style></style>
