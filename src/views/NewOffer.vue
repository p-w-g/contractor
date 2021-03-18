<template>
  <div>
    <job-form />
    <overview />
    <button class="fr__button--submit fr__button--funky" @click="resetState">
      Reset
    </button>
    <button class="fr__button--submit fr__button--funky">
      <router-link to="/preview" target="_blank">Preview</router-link>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'

import JobForm from '@/components/offer/JobForm.vue'
import Overview from '@/components/offer/Overview.vue'

export default defineComponent({
  name: 'NewOffer',
  components: {
    JobForm,
    Overview
  },
  mounted() {
    this.loadDataFromJson()
  },
  methods: {
    loadDataFromJson() {
      store.dispatch('attemptLoadJsonAction')
    },
    resetState() {
      store.dispatch('resetStateAction')
    }
  }
})
</script>

<style></style>
