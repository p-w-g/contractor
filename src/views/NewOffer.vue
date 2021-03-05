<template>
  <div>
    <job-form />
    <job-list />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import JobForm from '@/components/offer/JobForm.vue'
import JobList from '@/components/offer/JobList.vue'

export default defineComponent({
  name: 'NewOffer',
  components: {
    JobForm,
    JobList
  }
})
</script>

<style></style>
