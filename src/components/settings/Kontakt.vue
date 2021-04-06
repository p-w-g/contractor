<template>
  <accordion>
    <template #header>
      <div class="fr__heading">
        <h3>Kontaktuppgifter</h3>
      </div>
    </template>
    <template #content>
      <div>
        <form class="fr__form" @submit.prevent="saveRep">
          <fieldset>
            <form-input
              labelFull="Namn och Efternamn"
              labelShort="names"
              v-model="names"
            />

            <form-input
              labelFull="Email address"
              labelShort="mail"
              v-model="mail"
            />

            <form-input
              labelFull="Telefon eller mobil"
              labelShort="mobile"
              v-model="mobile"
            />

            <button class="fr__button--submit fr__button--funky">Spåra</button>
          </fieldset>
        </form>
      </div>
    </template>
  </accordion>
  <accordion>
    <template #header>
      <h3>Förhandsgranskning av Kontaktperson uppgifter</h3>
    </template>
    <template #content>
      <p>Kontaktperson: {{ this.repData.names }}</p>
      <p>Email: {{ this.repData.mail }}</p>
      <p>Telefon: {{ this.repData.mobile }}</p>
    </template>
  </accordion>
  <button class="fr__button--submit fr__button--funky" @click="clearRep">
    Rensa kontaktuppgifter
  </button>
  <hr />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'
import FormInput from '../common/FormInput.vue'
import { repModel } from '@/store/models'
import Accordion from '../common/Accordion.vue'

export default defineComponent({
  name: 'Kontakt',
  components: {
    FormInput,
    Accordion
  },
  data: () => ({
    names: '',
    mail: '',
    mobile: ''
  }),
  computed: {
    repData(): repModel {
      return store.getters.rep
    }
  },
  methods: {
    saveRep() {
      store.dispatch({
        type: 'saveRepAction',
        names: this.names,
        mail: this.mail,
        mobile: this.mobile
      })
    },
    clearRep() {
      store.dispatch('clearRepAction')
    }
  }
})
</script>
