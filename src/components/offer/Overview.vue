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
      return store.getters.grandTotal
    },
    location(): locationModel {
      return store.getters.location
    }
  }
})
</script>
<style></style>
