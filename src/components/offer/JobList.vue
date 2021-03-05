<template>
  <div className="fr__content-column">
    <table>
      <thead>
        <tr>
          <th>Total:</th>
          <th>{totalSum}</th>
        </tr>
      </thead>
      <tbody>
        <!-- for all labels push row wrapper  -->
        <!-- {Object.getOwnPropertyNames(expenses).length === 0 ? null : (
        <RowWrapper label="" />
        )} {labels.map((label, j) => { return
        <RowWrapper key="{j}" label="{label}" />; })} -->
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'JobList',
  data: () => ({}),
  methods: {
    assignLabel() {
      throw new Error('Unimplemented')
    }
  }
})
</script>
<style></style>
