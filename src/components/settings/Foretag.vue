<template>
  <div class="fr__heading">
    <h3>Företagsuppgifter</h3>
  </div>
  <div class="fr__column-wrap">
    <form class="fr__form" @submit.prevent="saveCompany">
      <fieldset>
        <div class="fr__label-wrapper">
          <label for="logo">Logga</label>
          <input id="logo" type="file" accept="image/*" @change="uploadImage" />
        </div>
        <article>
          <p>Förhandsgranskning av logga</p>
          <img :src="previewImage" class="uploading-image" />
        </article>

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
          labelShort="orgnumm"
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
    }
  }),
  methods: {
    uploadImage(e: any) {
      const image = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = (e: any) => {
        this.previewImage = e.target.result
      }
    },
    saveCompany() {
      // TODO: implement save to store and persist
    }
  }
})
</script>
