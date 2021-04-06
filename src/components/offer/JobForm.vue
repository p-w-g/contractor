<template>
  <div class="fr__heading">
    <h3>Nytt projekt</h3>
    <header class="fr__header-form">
      <div class="fr__column fr__column--left">
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
      </div>
      <div class="fr__column fr__column--right">
        <form class="fr__form" @submit.prevent="addNewLabel">
          <fieldset>
            <form-input
              labelFull="Etapp"
              labelShort="labels"
              v-model="label"
              required
            />

            <button class="fr__button--submit fr__button--funky">
              Lägg till
            </button>
          </fieldset>
        </form>

        <form id="expenses-form" class="fr__form" @submit.prevent="addNewTask">
          <fieldset>
            <text-area
              labelFull="Beskrivning"
              labelShort="description"
              v-model="task"
              ref="desc"
              required
            />

            <form-input
              labelFull="Summan"
              labelShort="amount"
              v-model.number="amount"
            />

            <button class="fr__button--submit fr__button--funky">
              Lägg till
            </button>
          </fieldset>
        </form>
      </div>
    </header>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'
import FormInput from '../common/FormInput.vue'
import TextArea from '../common/TextArea.vue'

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
    FormInput,
    TextArea
  },
  methods: {
    addNewLabel() {
      store.dispatch('addNewLabelAction', this.label)
      this.label = ''
    },
    addNewTask() {
      if (this.task && this.task !== '') {
        store.dispatch({
          type: 'addNewTaskAction',
          task: this.task,
          amount: this.amount
        })
      }
      this.task = ''
      this.amount = ''
      this.$refs.desc.$el.children[1].focus()
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
