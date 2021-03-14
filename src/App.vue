<template>
  <drawer />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Drawer from './components/fsuic/Drawer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Drawer
  }
})
</script>
<style lang="scss">
@use './assets/fr-theme/common';

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
