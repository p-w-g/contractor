<template>
  <div class="page-container">
    <div>
      <article>
        <h3 class="printable-h3">
          Vilkor
        </h3>

        <div class="flex-wrap">
          <div v-if="disclaimerData.fakturering" class="flex-row">
            <div class="col-left">
              <h4>Fakturering</h4>
            </div>
            <div class="col-right">
              <p>{{ this.disclaimerData.fakturering }}</p>
            </div>
          </div>

          <div v-if="disclaimerData.giltig" class="flex-row">
            <div class="col-left">
              <h4>Giltighetstid</h4>
            </div>
            <div class="col-right">
              <p>{{ this.disclaimerData.giltig }}</p>
            </div>
          </div>

          <div v-if="disclaimerData.garanti" class="flex-row">
            <div class="col-left">
              <h4>Garanti</h4>
            </div>
            <div class="col-right">
              <p>{{ this.disclaimerData.garanti }}</p>
            </div>
          </div>

          <div v-if="disclaimerData.arbetstid" class="flex-row">
            <div class="col-left">
              <h4>Arbetstid</h4>
            </div>
            <div class="col-right">
              <p>{{ this.disclaimerData.arbetstid }}</p>
            </div>
          </div>

          <div v-if="disclaimerData.forsakring" class="flex-row">
            <div class="col-left">
              <h4>Försäkring</h4>
            </div>
            <div class="col-right">
              <p>{{ this.disclaimerData.forsakring }}</p>
            </div>
          </div>

          <div v-if="disclaimerData.avvikelse" class="flex-row">
            <div class="col-left">
              <h4>Avvikelse</h4>
            </div>
            <div class="col-right">
              <p>{{ this.disclaimerData.avvikelse }}</p>
            </div>
          </div>

          <div v-if="disclaimerData.extra" class="flex-row">
            <div class="col-left">
              <h4>Tillägtjänster</h4>
            </div>
            <div class="col-right">
              <p>{{ this.disclaimerData.extra }}</p>
            </div>
          </div>

          <div v-if="disclaimerData.rot" class="flex-row">
            <div class="col-left">
              <h4>ROT / RUT</h4>
            </div>
            <div class="col-right">
              <p>{{ this.disclaimerData.rot }}</p>
            </div>
          </div>

          <div v-if="disclaimerData.ovrigt" class="flex-row">
            <div class="col-left">
              <h4>Övrigt</h4>
            </div>
            <div class="col-right">
              <p>{{ this.disclaimerData.ovrigt }}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script lang="ts">
import store from '@/store'
import { disclaimerModel } from '@/store/models'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ThirdPage',
  components: {},
  computed: {
    disclaimerData(): disclaimerModel {
      return store.getters.disclaimers
    }
  }
})
</script>
