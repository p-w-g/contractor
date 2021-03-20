<template>
  <div>
    <first-page />
    <div class="pagebreak"></div>
    <second-page />
    <div class="pagebreak"></div>
    <third-page />
    <div class="pagebreak"></div>
    <offer-footer />
    <button class="unprintable" @click="print">Print</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import FirstPage from '../components/preview/FirstPage.vue'
import SecondPage from '@/components/preview/SecondPage.vue'
import ThirdPage from '@/components/preview/ThirdPage.vue'
import OfferFooter from '@/components/preview/OfferFooter.vue'

export default defineComponent({
  name: 'Preview',
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    OfferFooter
  },
  methods: {
    print() {
      window.print()
    }
  }
})
</script>

<style lang="scss">
footer {
  width: 60vw;
  margin: auto;
}
@media print {
  .pagebreak {
    clear: both;
    page-break-after: always;
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(95vw - 100px);
    margin: 0 70px;
  }
  h4 {
    margin: 0;
  }

  html {
    background: none;
  }
  .kebab,
  .unprintable {
    display: none;
  }

  .page-container {
    width: calc(95vw - 140px);
    max-width: calc(95vw - 140px);
    margin: 100px 70px auto;

    height: calc(85vh - 200px);
    max-height: 85vh;
  }

  .flex-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .flex-wrap {
    display: flex;
    flex-direction: column;
    .flex-row {
      display: flex;
      flex-direction: row;
      > p {
        margin: 0;
        padding: 0;
      }
    }
  }

  .col-left {
    min-width: 150px;
  }
  .col-right {
    max-width: 60vw;
    text-align: left;
    padding-left: 18px;
    > ul > li {
      padding: 0;
      margin: 0;
    }
    > p {
      padding: 0;
      margin: 0;
    }
  }

  .printable {
    &-image {
      margin: auto auto 0;
    }
    &-h3 {
      margin: 18px auto 18px;
      vertical-align: text-top;
      text-align: left;
      &--leadin {
        margin: 18px auto auto;
      }
    }
  }
}
</style>
