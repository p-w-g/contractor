<template>
  <div className="fr__heading">
    <header>
      <h2>Nytt projekt</h2>
      <form
        id="expenses-form"
        className="fr__form"
        @submit.prevent="addNewTask"
      >
        <fieldset>
          <div className="fr__label-wrapper">
            <label htmlFor="expense">Beskrivning</label>
            <input
              id="expense"
              type="text"
              v-model="task"
              className="fr__input-box"
            />
          </div>
          <div className="fr__label-wrapper">
            <label htmlFor="amount">Summan</label>
            <input
              id="amount"
              type="number"
              v-model.number="amount"
              className="fr__input-box"
            />
          </div>
          <button />
        </fieldset>
      </form>

      <form className="fr__form" @submit.prevent="addNewLabel">
        <fieldset>
          <div className="fr__label-wrapper">
            <label htmlFor="labels">Etapp</label>
            <input
              id="labels"
              type="text"
              v-model="label"
              className="fr__input-box"
            />
          </div>

          <button />
        </fieldset>
      </form>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'

export default defineComponent({
  name: 'JobForm',
  data: () => ({
    task: '',
    amount: '',
    label: ''
  }),
  methods: {
    addNewLabel() {
      store.dispatch('addNewLabelAction', this.label)
    },
    addNewTask() {
      store.dispatch({
        type: 'addNewTaskAction',
        task: this.task,
        amount: this.amount
      })
    }
  }
})
</script>

<style></style>
