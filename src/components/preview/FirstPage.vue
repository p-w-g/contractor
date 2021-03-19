<template>
  <div class="page-container">
    <div class="flex-container">
      <img class="printable-image" :src="companyData.previewImage" />
      <h3 class="printable-h3--leadin">
        {{ this.companyData.leadin }}
      </h3>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'
import { companyModel } from '@/store/models'
export default defineComponent({
  name: 'FirstPage',
  computed: {
    companyData(): companyModel {
      return store.getters.company
    }
  }
})
</script>
