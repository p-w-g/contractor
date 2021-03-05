<template>
  <!-- v-id this task has matching label, ie this label has tasks assigned -->
  <tr>
    <th>{label === '' ? 'unassigned' : label}</th>
    <th>{filteredSum}</th>
  </tr>

  <!-- {filteredExpenses.map((filteredExpense, i) => { return

  <Row expense="{filteredExpense}" />; })} 
  
  -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Etapp',
  data: () => ({}),
  methods: {
    assignLabel() {
      throw new Error('Unimplemented')
    }
  }
})

// const filteredExpenses = Object.values(expenses).filter(
//   (expense) => expense.label === label
// );

// const filteredSum = filteredExpenses.reduce(
//   (accumulator, currentObject) =>
//     accumulator + parseFloat(currentObject.amount, 10),
//   0
// );
</script>
<style></style>
