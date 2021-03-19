<template>
  <div class="page-container">
    <div>
      <article>
        <h3 class="printable-h3">
          Projekt beskrivning
        </h3>
        <div class="flex-wrap">
          <div class="flex-row">
            <div class="col-left">
              <h4>Angaende</h4>
            </div>
            <div class="col-right">
              <p>{{ this.location.Angaende }}</p>
            </div>
          </div>
          <div class="flex-row">
            <div class="col-left">
              <h4>Fastighet</h4>
            </div>
            <div class="col-right">
              <p>{{ this.location.Fastighet }}</p>
            </div>
          </div>
          <div class="flex-row">
            <div class="col-left">
              <h4>Jobbstart</h4>
            </div>
            <div class="col-right">
              <p>{{ this.location.Jobbstart }}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
    <div>
      <article>
        <h3 class="printable-h3">
          Arbets beskrivning
        </h3>
        <simplified-tasks
          v-for="(label, i) in labels"
          :key="i"
          :etapp="label"
        />
      </article>
    </div>
    <div>
      <article>
        <h3 class="printable-h3">
          Kostnad sammanfattning
        </h3>
        <div class="flex-wrap">
          <simplified-costs />
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import { locationModel, taskModel } from '@/store/models'
import { defineComponent } from 'vue'
import SimplifiedCosts from './SimplifiedCosts.vue'
import SimplifiedTasks from './SimplifiedTasks.vue'

export default defineComponent({
  name: 'SecondPage',
  components: { SimplifiedTasks, SimplifiedCosts },
  computed: {
    location(): locationModel {
      return store.getters.location
    },

    filteredTasks(): taskModel[] {
      return store.state.job.filter((el) => el.Label === this.etapp)
    },
    filteredAmounts(): Array<number> {
      return this.filteredTasks.map((e) => e.Amount)
    },
    filteredSum(): number {
      return this.filteredAmounts.reduce(
        (acc: number, curr: number) => acc + Number(curr),
        0
      )
    },
    labels(): Array<string> {
      return store.getters.labels
    }
  }
})
</script>
