<template>
  <accordion>
    <template #header>
      <div class="fr__heading">
        <h3>Avdrag</h3>
      </div>
    </template>
    <template #content>
      <div>
        <form class="fr__form" @submit.prevent="saveAvdrag">
          <fieldset>
            <form-input
              labelFull="Ange procentsatts din kund får i avdrag (ROT eller RUT, tex 30 för 30%)"
              labelShort="percentage"
              v-model.number="percentage"
            />

            <form-input
              labelFull="Ange max belopp som dina kunder får i avdraget tex 150000 (per år i ROT)"
              labelShort="maxamount"
              v-model.number="maxamount"
              type="number"
            />
            <button class="fr__button--submit fr__button--funky">Spåra</button>
          </fieldset>
        </form>
      </div>
    </template>
  </accordion>

  <accordion>
    <template #header>
      <h3>Förhandsgranskning av Avdragsuppgifter</h3>
    </template>
    <template #content>
      <article>
        <p>Procentsatts: {{ this.avdrag.percentage }}</p>
        <p>Maximal belopp: {{ this.avdrag.maxamount }}</p>
      </article>
    </template>
  </accordion>
  <button class="fr__button--submit fr__button--funky" @click="clearAvdrag">
    Rensa avdragsuppgifter
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'
import FormInput from '../common/FormInput.vue'
import { avdragModel } from '@/store/models'
import Accordion from '../common/Accordion.vue'

export default defineComponent({
  name: 'Avdrag',
  components: {
    FormInput,
    Accordion
  },
  data: () => ({
    percentage: 0,
    maxamount: 0
  }),
  computed: {
    avdrag(): avdragModel {
      return store.getters.avdrag
    }
  },
  methods: {
    saveAvdrag() {
      store.dispatch({
        type: 'saveAvdragAction',
        percentage: this.percentage,
        maxamount: this.maxamount
      })
    },

    clearAvdrag() {
      store.dispatch('clearAvdragAction')
    }
  }
})
</script>
