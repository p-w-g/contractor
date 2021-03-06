<template>
  <div>
    <job-form />
    <overview />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import JobForm from '@/components/offer/JobForm.vue'
import Overview from '@/components/offer/Overview.vue'

export default defineComponent({
  name: 'NewOffer',
  components: {
    JobForm,
    Overview
  }
})
</script>

<style></style>
