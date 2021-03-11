<template>
  <div class="fr__heading">
    <h3>Vilkor</h3>
  </div>
  <div class="fr__column-wrap">
    <form class="fr__form" @submit.prevent="saveCompany">
      <fieldset>
        <!-- Faktura skickas med 7 dagar betalningstid efter uppfört arbete -->
        <form-input
          labelFull="Fakturering"
          labelShort="fakturering"
          v-model="fakturering"
        />

        <form-input
          labelFull="Offert giltighetstid"
          labelShort="giltig"
          v-model="giltig"
        />

        <form-input
          labelFull="Garanti"
          labelShort="garanti"
          v-model="garanti"
        />

        <form-input
          labelFull="Arbetstid"
          labelShort="arbetstid"
          v-model="arbetstid"
        />

        <form-input
          labelFull="Försäkring"
          labelShort="försäkring"
          v-model="försäkring"
        />

        <form-input
          labelFull="Mindre avvikelse"
          labelShort="avvikelse"
          v-model="avvikelse"
        />

        <form-input
          labelFull="Tillägtjänster"
          labelShort="extra"
          v-model="extra"
        />

        <form-input
          labelFull="ROT / ROT vilkor"
          labelShort="rot"
          v-model="rot"
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
  name: 'Disclaimers',
  components: {
    FormInput
  },
  data: () => ({
    fakturering: '',
    giltig: '',
    garanti: '',
    arbetstid: '',
    försäkring: '',
    avvikelse: '',
    extra: '',
    rot: ''
  }),
  methods: {
    saveDisclaimers() {
      store.dispatch({
        type: 'saveDisclaimersAction',
        fakturering: this.fakturering,
        giltig: this.giltig,
        garanti: this.garanti,
        arbetstid: this.arbetstid,
        försäkring: this.försäkring,
        avvikelse: this.avvikelse,
        extra: this.extra,
        rot: this.rot
      })
    }
  }
})
</script>
