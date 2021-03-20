<template>
  <div class="fr__heading">
    <h3>Företagsuppgifter</h3>
  </div>
  <div>
    <form class="fr__form" @submit.prevent="saveCompany">
      <fieldset>
        <div class="fr__label-wrapper--image">
          <label for="logo">Logga</label>
          <br />
          <input id="logo" type="file" accept="image/*" @change="uploadImage" />
        </div>

        <form-input
          labelFull="Inleddning text i offert"
          labelShort="leadin"
          v-model="leadin"
        />

        <form-input
          labelFull="Hemsida"
          labelShort="hemsida"
          v-model="hemsida"
        />

        <form-input
          labelFull="Organisation eller Personnummer"
          labelShort="orgnummer"
          v-model="orgnummer"
        />

        <form-input
          labelFull="Addres: råd 1"
          labelShort="address1"
          v-model="address.ett"
        />

        <form-input
          labelFull="Addres: råd 2"
          labelShort="address2"
          v-model="address.tva"
        />

        <input type="checkbox" id="fskatt" v-model="fskatt" />
        <label for="fskatt">Godkänd för F-skatt?</label>
        <br />
        <button class="fr__button--submit fr__button--funky">Spåra</button>
      </fieldset>
    </form>
  </div>
  <hr />

  <div>
    <article>
      <h3>Förhandsgranskning av Företagsuppgifter</h3>
      <p>Logga</p>
      <img :src="companyData.previewImage" class="uploading-image" />
      <p>Lead in: {{ this.companyData.leadin }}</p>
      <p>Organisation nummer: {{ this.companyData.orgnummer }}</p>
      <p>Hemsida {{ this.companyData.hemsida }}</p>
      <p>
        Address:
        {{
          `${this.companyData.address?.ett}, ${this.companyData.address?.tva} `
        }}
      </p>
      <p>F-Skatt gödkänd: {{ this.companyData.fskatt ? 'Ja' : 'Nej' }}</p>
    </article>
  </div>
  <button class="fr__button--submit fr__button--funky" @click="clearCompany">
    Rensa Företagsuppgifter
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'
import FormInput from '../fsuic/FormInput.vue'
import { companyModel } from '@/store/models'

export default defineComponent({
  name: 'Foretag',
  components: {
    FormInput
  },
  data: () => ({
    previewImage: '',
    leadin: '',
    orgnummer: '',
    hemsida: '',
    address: {
      ett: '',
      tva: ''
    },
    fskatt: false
  }),
  computed: {
    companyData(): companyModel {
      return store.getters.company
    }
  },
  methods: {
    uploadImage(e: KeyboardEvent) {
      const image = (e.target as HTMLInputElement).files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e: any) => {
        this.previewImage = e.target.result
      }
    },

    saveCompany() {
      store.dispatch({
        type: 'saveCompanyAction',
        previewImage: this.previewImage,
        leadin: this.leadin,
        orgnummer: this.orgnummer,
        hemsida: this.hemsida,
        address: this.address,
        fskatt: this.fskatt
      })
    },

    clearCompany() {
      store.dispatch('clearCompanyDataAction')
    }
  }
})
</script>
