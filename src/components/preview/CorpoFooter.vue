<template>
  <footer>
    <div class="grid__container">
      <div class="grid__col--1 grid__col">
        <ul>
          <li>
            <b>{{ this.companyData.hemsida }}</b>
          </li>
          <li>{{ this.companyData.orgnummer }}</li>
          <li>{{ this.companyData.address.ett }}</li>
          <li>{{ this.companyData.address.tva }}</li>
          <li>{{ this.companyData.fskatt ? 'Godkänd för F-Skatt' : '' }}</li>
        </ul>
      </div>
      <div class="grid__col--2 grid__col">
        <ul>
          <li>
            <b>{{ this.date }}</b>
          </li>
        </ul>
      </div>
      <div class="grid__col--3 grid__col">
        <ul>
          <li><b>Kontaktuppgifter</b></li>
          <li>{{ this.repData.names }}</li>
          <li>{{ this.repData.mail }}</li>
          <li>{{ this.repData.mobile }}</li>
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
      return store.getters.company
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
.grid {
  &__container {
    display: grid;
    grid-template-columns: 30px repeat(3, 1fr) 20px;
    page-break-after: always;
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
      grid-column-start: 2;
    }

    &--2 {
      grid-column-start: 3;
      text-align: center;
    }

    &--3 {
      grid-column-start: 4;
      text-align: right;
    }
  }
}
</style>
