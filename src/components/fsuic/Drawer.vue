<template>
  <input type="image" :src="KebabMenu" alt="Navigation Drawer" />

  <!-- TODO: implement portal
    https://v3.vuejs.org/guide/teleport.html -->
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/offer">Offert</router-link> |
    <router-link to="/settings">Inställningar</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import KebabMenu from '../../assets/more_vert.svg'

export default defineComponent({
  name: 'Drawer',
  setup() {
    return {
      KebabMenu
    }
  },
  data: () => ({ isOpen: false }),
  methods: {
    toggleDrawer() {
      // TODO: implement teleport on drawer open
      if (this.isOpen) {
        this.isOpen = false
        return
      }
      if (!this.isOpen) {
        this.isOpen = true
        return
      }
    }
  }
})
</script>
