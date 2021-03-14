<template>
  <div class="fr__heading">
    <h3>Kontaktuppgifter</h3>
  </div>
  <div class="">
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

        <button class="fr__button--submit">Spåra</button>
      </fieldset>
    </form>
  </div>
  <hr />
  <div>
    <article>
      <h3>Förhandsgranskning av Kontaktperson uppgifter</h3>
      <p>Kontaktperson: {{ this.repData.names }}</p>
      <p>Email: {{ this.repData.mail }}</p>
      <p>Telefon: {{ this.repData.mobile }}</p>
    </article>
  </div>
  <button @click="clearDisclaimers">Rensa vilkor</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'
import FormInput from '../fsuic/FormInput.vue'
import { repModel } from '@/store/models'

export default defineComponent({
  name: 'Kontakt',
  components: {
    FormInput
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
    }
  }
})
</script>
