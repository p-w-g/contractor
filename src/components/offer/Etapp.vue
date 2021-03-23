<template>
  <tr v-if="unassignedTasks">
    <th>Obestämd</th>
    <th>{{ unassignedSum }}</th>
  </tr>
  <tr v-for="(task, i) in unassignedTasks" :key="i">
    <task :task="task" />
  </tr>
  <tasks v-for="(label, i) in labels" :key="i" :etapp="label" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tasks from './Tasks.vue'
import Task from './Task.vue'
import store from '@/store/index'
import { taskModel } from '@/store/models'

export default defineComponent({
  name: 'Etapp',
  components: {
    Tasks,
    Task
  },
  methods: {},
  computed: {
    unassignedTasks(): taskModel[] {
      if (store.state && store.state.job.length > 0) {
        return store.state.job.filter((el) => !el.Label)
      }
    },
    unassignedAmounts(): Array<number> {
      if (this.unassignedTasks && this.unassignedTasks.length > 0) {
        return this.unassignedTasks.map((e) => e.Amount)
      }
    },
    unassignedSum(): number {
      if (this.unassignedAmounts && this.unassignedAmounts.length > 0) {
        return this.unassignedAmounts.reduce(
          (acc: number, curr: number) => acc + Number(curr),
          0
        )
      }
    },
    labels(): Array<string> {
      return store.getters.labels
    }
  }
})
</script>
<style></style>
