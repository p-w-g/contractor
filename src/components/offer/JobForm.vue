<template>
  <div class="fr__heading">
    <header>
      <h3>Nytt projekt</h3>

      <div class="fr__column-wrap">
        <form class="fr__form" @submit.prevent="addLocation">
          <fieldset>
            <form-input
              labelFull="Angående"
              labelShort="angaende"
              v-model="angaende"
            />

            <form-input
              labelFull="Fastighet"
              labelShort="fastighet"
              v-model="fastighet"
            />

            <form-input
              labelFull="Jobbstart"
              labelShort="jobbstart"
              v-model="jobbstart"
            />

            <button class="fr__button--submit fr__button--funky">Spåra</button>
          </fieldset>
        </form>

        <form class="fr__form" @submit.prevent="addNewLabel">
          <fieldset>
            <form-input labelFull="Etapp" labelShort="labels" v-model="label" />

            <button class="fr__button--submit fr__button--funky">Lägg till</button>
          </fieldset>
        </form>

        <form id="expenses-form" class="fr__form" @submit.prevent="addNewTask">
          <fieldset>
            <div class="fr__label-wrapper">
              <label for="description">Beskrivning</label>
              <input
                ref="desc"
                id="description"
                type="text"
                v-model="task"
                class="fr__input-box"
              />
            </div>
            <div class="fr__label-wrapper">
              <label for="amount">Summan</label>
              <input
                id="amount"
                type="number"
                v-model.number="amount"
                class="fr__input-box"
              />
            </div>
            <button class="fr__button--submit fr__button--funky">Lägg till</button>
          </fieldset>
        </form>
      </div>
      <hr />
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'
import FormInput from '../fsuic/FormInput.vue'

export default defineComponent({
  name: 'JobForm',

  data: () => ({
    task: '',
    amount: '',
    label: '',
    angaende: '',
    fastighet: '',
    jobbstart: ''
  }),
  components: {
    FormInput
  },
  methods: {
    addNewLabel() {
      store.dispatch('addNewLabelAction', this.label)
      this.label = ''
    },
    addNewTask() {
      store.dispatch({
        type: 'addNewTaskAction',
        task: this.task,
        amount: this.amount
      })
      this.task = ''
      this.amount = ''
      ;(this.$refs.desc as HTMLElement).focus()
    },
    addLocation() {
      store.dispatch({
        type: 'addLocationDescriptionAction',
        ang: this.angaende,
        fastighet: this.fastighet,
        start: this.jobbstart
      })
    }
  }
})
</script>

<style></style>
