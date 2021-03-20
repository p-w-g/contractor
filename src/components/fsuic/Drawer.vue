<template>
  <div>
    <input
      class="kebab"
      type="image"
      :src="KebabMenu"
      alt="Navigation Drawer"
      @click="toggleDrawer"
      :class="isOpen ? 'kebab--open' : 'kebab--close'"
    />

    <teleport to="body">
      <transition name="slide-fade">
        <ul v-if="isOpen" class="nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/offer">Offert</router-link></li>
          <li><router-link to="/settings">Inställningar</router-link></li>
        </ul>
      </transition>
    </teleport>
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
  data: () => ({ isOpen: true }),
  methods: {
    toggleDrawer() {
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
