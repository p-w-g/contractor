<template>
  <div className="fr__heading">
    <header>
      <h3>Nytt projekt</h3>

      <div class="fr__column-wrap">
        <form className="fr__form" @submit.prevent="addLocation">
          <fieldset>
            <div className="fr__label-wrapper">
              <label for="angaende">Angående</label>
              <input
                id="angaende"
                type="text"
                v-model="angaende"
                className="fr__input-box"
              />
            </div>
            <div className="fr__label-wrapper">
              <label for="fastighet">Fastighet</label>
              <input
                id="fastighet"
                type="text"
                v-model="fastighet"
                className="fr__input-box"
              />
            </div>
            <div className="fr__label-wrapper">
              <label for="jobbstart">Jobbstart</label>
              <input
                id="jobbstart"
                type="text"
                v-model="jobbstart"
                className="fr__input-box"
              />
            </div>

            <button class="fr__button--submit">Spåra</button>
          </fieldset>
        </form>

        <form className="fr__form" @submit.prevent="addNewLabel">
          <fieldset>
            <div className="fr__label-wrapper">
              <label for="labels">Etapp</label>
              <input
                id="labels"
                type="text"
                v-model="label"
                className="fr__input-box"
              />
            </div>

            <button class="fr__button--submit">Lägg till</button>
          </fieldset>
        </form>

        <form
          id="expenses-form"
          className="fr__form"
          @submit.prevent="addNewTask"
        >
          <fieldset>
            <div className="fr__label-wrapper">
              <label for="description">Beskrivning</label>
              <input
                ref="desc"
                id="description"
                type="text"
                v-model="task"
                className="fr__input-box"
              />
            </div>
            <div className="fr__label-wrapper">
              <label for="amount">Summan</label>
              <input
                id="amount"
                type="number"
                v-model.number="amount"
                className="fr__input-box"
              />
            </div>
            <button class="fr__button--submit">Lägg till</button>
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
