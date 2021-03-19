<template>
  <div v-if="filteredTasks.length > 0" class="flex-wrap">
    <div class="flex-row">
      <div class="col-left">
        <h4>{{ etapp }}</h4>
      </div>
      <div class="col-right">
        <p v-for="(task, i) in filteredTasks" :key="i">
          <span>{{ task.Description }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'
import { taskModel } from '@/store/models'

export default defineComponent({
  name: 'SimplifiedTask',

  data: () => ({}),
  computed: {
    filteredTasks(): taskModel[] {
      return store.state.job.filter((el) => el.Label === this.etapp)
    }
  },
  props: {
    etapp: String
  }
})
</script>
