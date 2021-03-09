<template>
  <div className="fr__content-column">
    <h3>Sammanfattning</h3>
    <table>
      <tr>
        <th>Total:</th>
        <th>{{ grandTotal }}</th>
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

export default defineComponent({
  name: 'JobList',
  components: {
    Etapp
  },
  data: () => ({}),
  computed: {
    grandTotal(): number {
      return store.getters.grandTotal
    }
  }
})
</script>
<style></style>
