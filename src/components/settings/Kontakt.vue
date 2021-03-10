<template>
  <div class="fr__heading">
    <h3>Kontaktuppgifter</h3>
  </div>
  <div class="fr__column-wrap">
    <form class="fr__form" @submit.prevent="saveCompany">
      <fieldset>
        <form-input
          labelFull="Namn och Efternamn"
          labelShort="person"
          v-model="person"
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'
import FormInput from '../FormInput.vue'

export default defineComponent({
  name: 'Kontakt',
  components: {
    FormInput
  },
  data: () => ({
    person: '',
    mail: '',
    mobile: ''
  }),
  methods: {
    saveRep() {
      // TODO: implement save to store and persist
    }
  }
})
</script>
