<template>
  <footer>
    <div class="fot-grid__container">
      <div class="fot-grid__col--1 fot-grid__col">
        <ul>
          <li v-if="companyData.hemsida">
            <b>{{ this.companyData.hemsida }}</b>
          </li>
          <li v-if="companyData.orgnummer">{{ this.companyData.orgnummer }}</li>
          <li v-if="companyData.address">{{ this.companyData.address.ett }}</li>
          <li v-if="companyData.address">{{ this.companyData.address.tva }}</li>
          <li v-if="companyData.fskatt">Godkänd för F-Skatt</li>
        </ul>
      </div>
      <div class="fot-grid__col--2 fot-grid__col">
        <ul>
          <li>
            <b>{{ this.date }}</b>
          </li>
        </ul>
      </div>
      <div class="fot-grid__col--3 fot-grid__col">
        <ul>
          <li><b>Kontaktuppgifter</b></li>
          <li v-if="repData.names">{{ this.repData.names }}</li>
          <li v-if="repData.mail">{{ this.repData.mail }}</li>
          <li v-if="repData.mobile">{{ this.repData.mobile }}</li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import store from '@/store'
import { companyModel, repModel } from '@/store/models'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CorpoFooter',
  computed: {
    companyData(): companyModel {
      const company = store.getters.company ?? 'Företagsuppgift saknas'

      return company
    },
    repData(): repModel {
      return store.getters.rep
    },
    date() {
      return new Date().toLocaleDateString()
    }
  }
})
</script>
<style lang="scss">
.fot-grid {
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  &__col {
    text-align: left;
    > ul {
      list-style: none;
      > li {
        padding: 0;
      }
    }

    &--1 {
      grid-column-start: 1;
    }

    &--2 {
      grid-column-start: 2;
      text-align: center;
    }

    &--3 {
      grid-column-start: 3;
      text-align: right;
    }
  }
}
</style>
