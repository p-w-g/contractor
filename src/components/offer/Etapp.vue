<template>
  <tr>
    <th>Etapp: Okänd</th>
    <th>{{ unassignedSum }}</th>
  </tr>

  <tr v-for="(task, i) in unassignedTasks" :key="i">
    <td>{{ task.Description }}</td>
    <td>{{ task.Amount }}</td>
  </tr>

  <task v-for="(label, i) in labels" :key="i" :etapp="label" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Task from './Task.vue'
import store from '@/store/index'
import { taskModel } from '@/store/models'

export default defineComponent({
  name: 'Etapp',
  data: () => ({}),
  components: {
    Task
  },
  methods: {},
  computed: {
    unassignedTasks(): taskModel[] {
      return store.state.job.filter((el) => el.Label === '')
    },
    unassignedAmounts(): Array<number> {
      return this.unassignedTasks.map((e) => e.Amount)
    },
    unassignedSum(): number {
      return this.unassignedAmounts.reduce(
        (acc: number, curr: number) => acc + curr,
        0
      )
    },
    labels(): Array<string> {
      return store.getters.labels
    }
  }
})
</script>
<style></style>
