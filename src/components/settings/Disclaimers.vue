<template>
  <accordion>
    <template #header>
      <div class="fr__heading">
        <h3>Vilkor</h3>
      </div>
    </template>

    <template #content>
      <form class="fr__form" @submit.prevent="saveDisclaimers">
        <fieldset>
          <text-area
            labelFull="Vilkor om betalning, fakturering, förfallodag"
            labelShort="fakturering"
            v-model="fakturering"
          />

          <text-area
            labelFull="Vilkor om giltighetstid"
            labelShort="giltig"
            v-model="giltig"
          />

          <text-area
            labelFull="Vilkor om garanti och eventuelt materialkostnader"
            labelShort="garanti"
            v-model="garanti"
          />

          <text-area
            labelFull="Vilkor om arbetstid och eventuelt överenskommelse"
            labelShort="arbetstid"
            v-model="arbetstid"
          />

          <text-area
            labelFull="Vilkor om företagsförsäkring och skådeförsäkring"
            labelShort="försäkring"
            v-model="forsakring"
          />

          <text-area
            labelFull="Vilkor om eventuelt mindre avvikelse"
            labelShort="avvikelse"
            v-model="avvikelse"
          />

          <text-area
            labelFull="Vilkor om eventuelt tillägtjänster eller extrauppgifter pga
              omständigheter"
            labelShort="extra"
            v-model="extra"
          />

          <text-area
            labelFull="Vilkor om ROT / RUT och kräv"
            labelShort="rot"
            v-model="rot"
          />

          <text-area labelFull="Övrigt" labelShort="ovrigt" v-model="ovrigt" />
        </fieldset>

        <button
          class="fr__button--submit fr__button--funky"
          @click="saveDisclaimers"
        >
          Spåra
        </button>
      </form>
    </template>
  </accordion>

  <accordion>
    <template #header>
      <h3>Förhandsgranskning av Vilkor</h3>
    </template>
    <template #content>
      <article>
        <p>fakturering: {{ this.disclaimerData.fakturering }}</p>
        <p>giltig: {{ this.disclaimerData.giltig }}</p>
        <p>garanti: {{ this.disclaimerData.garanti }}</p>
        <p>arbetstid: {{ this.disclaimerData.arbetstid }}</p>
        <p>försäkring: {{ this.disclaimerData.forsakring }}</p>
        <p>avvikelse: {{ this.disclaimerData.avvikelse }}</p>
        <p>extra: {{ this.disclaimerData.extra }}</p>
        <p>rot: {{ this.disclaimerData.rot }}</p>
        <p>ovrigt: {{ this.disclaimerData.ovrigt }}</p>
      </article>
    </template>
  </accordion>
  <button
    class="fr__button--submit fr__button--funky"
    @click="clearDisclaimers"
  >
    Rensa vilkor
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store/index'
import TextArea from '../common/TextArea.vue'
import { disclaimerModel } from '@/store/models'
import Accordion from '../common/Accordion.vue'

export default defineComponent({
  name: 'Disclaimers',
  components: {
    TextArea,
    Accordion
  },
  computed: {
    disclaimerData(): disclaimerModel {
      return store.getters.disclaimers
    }
  },
  data: () => ({
    fakturering: '',
    giltig: '',
    garanti: '',
    arbetstid: '',
    forsakring: '',
    avvikelse: '',
    extra: '',
    rot: '',
    ovrigt: ''
  }),
  methods: {
    saveDisclaimers() {
      store.dispatch({
        type: 'saveDisclaimersAction',
        fakturering: this.fakturering,
        giltig: this.giltig,
        garanti: this.garanti,
        arbetstid: this.arbetstid,
        forsakring: this.forsakring,
        avvikelse: this.avvikelse,
        extra: this.extra,
        rot: this.rot,
        ovrigt: this.ovrigt
      })
    },

    clearDisclaimers() {
      store.dispatch('clearDisclaimersAction')
    }
  }
})
</script>
