<template>
  <div class="fr__heading">
    <h3>Avdrag</h3>
  </div>
  <div class="">
    <form class="fr__form" @submit.prevent="saveAvdrag">
      <fieldset>
        <form-input
          labelFull="Ange procentsatts din kund får i avdrag (ROT eller RUT) i form av decimal tex 0.30"
          labelShort="percentage"
          v-model.number="percentage"
        />

        <form-input
          labelFull="Ange max belopp som dina kunder får i avdrage tex 150000 (per år i ROT)"
          labelShort="maxamount"
          v-model.number="maxamount"
        />
        <button class="fr__button--submit fr__button--funky">Spåra</button>
      </fieldset>
    </form>
  </div>
  <hr />

  <div>
    <article>
      <h3>Förhandsgranskning av Avdragsuppgifter</h3>
      <p>Procentsatts: {{ this.avdrag.percentage }}</p>
      <p>maxamount {{ this.companyData.maxamount }}</p>
    </article>
  </div>
  <button class="fr__button--submit fr__button--funky" @click="clearAvdrag">
    Rensa Företagsuppgifter
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'
import FormInput from '../fsuic/FormInput.vue'
// TODO: implement
// import { companyModel } from '@/store/models'

export default defineComponent({
  name: 'Avdrag',
  components: {
    FormInput
  },
  data: () => ({
    percentage: '',
    maxamount: ''
  }),
  computed: {
    // todo: implement
    // avdrag(): avdragModel {
    //   return store.getters.avdrag
    // }
  },
  methods: {
    saveAvdrag() {
      //  TODO: implement
      // store.dispatch({
      //   type: 'saveCompanyAction',
      //   previewImage: this.previewImage,
      //   leadin: this.leadin,
      //   orgnummer: this.orgnummer,
      //   hemsida: this.hemsida,
      //   address: this.address,
      //   fskatt: this.fskatt
      // })
    }
  },

  clearAvdrag() {
    // TODO: implement
    // store.dispatch('clearCompanyDataAction')
  }
})
</script>
