<template>
  <div class="page-container">
    <div class="flex-container">
      <img
        class="printable-image"
        :src="companyData.previewImage"
        alt=""
        srcset=""
      />
      <h3 class="printable-h3">
        {{ this.companyData.leadin }}
      </h3>
    </div>
  </div>
  <corpo-footer />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'
import { companyModel } from '@/store/models'
import CorpoFooter from './CorpoFooter.vue'
export default defineComponent({
  name: 'FirstPage',
  components: { CorpoFooter },
  computed: {
    companyData(): companyModel {
      return store.getters.company
    }
  }
})
</script>
