<template>
  <drawer />
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Drawer from './components/fsuic/Drawer.vue'
import store from './store'

export default defineComponent({
  name: 'App',
  components: {
    Drawer
  },
  mounted() {
    store.dispatch('attemptLoadJsonAction')

    store.dispatch('attemptLoadSettingsAction')
  }
})
</script>
<style lang="scss">
@use './assets/fr-theme/common';
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
