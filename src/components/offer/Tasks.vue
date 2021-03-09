<template>
  <tbody>
    <tr>
      <th>Etapp: {{ etapp }}</th>
      <th>{{ filteredSum }}</th>
    </tr>
    <tr v-for="(task, i) in filteredTasks" :key="i">
      <task :task="task" />
    </tr>
  </tbody>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'
import { taskModel } from '@/store/models'
import Task from './Task.vue'

export default defineComponent({
  name: 'Tasks',
  components: {
    Task
  },
  data: () => ({
    isEditable: false
  }),
  props: {
    etapp: String
  },

  computed: {
    filteredTasks(): taskModel[] {
      return store.state.job.filter((el) => el.Label === this.etapp)
    },
    filteredAmounts(): Array<number> {
      return this.filteredTasks.map((e) => e.Amount)
    },
    filteredSum(): number {
      return this.filteredAmounts.reduce(
        (acc: number, curr: number) => acc + curr,
        0
      )
    }
  }
})
</script>
