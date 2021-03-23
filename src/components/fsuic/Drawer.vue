<template>
  <div class="unprintable">
    <input
      class="drawer"
      type="image"
      :src="Chevron"
      alt="Navigation Drawer"
      @click="toggleDrawer"
      :class="isOpen ? 'drawer--open' : 'drawer--close'"
    />

    <teleport to="body">
      <transition name="slide-fade">
        <ul v-if="isOpen" class="nav unprintable">
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
import Chevron from '../../assets/chevron_right.svg'

export default defineComponent({
  name: 'Drawer',
  setup() {
    return {
      Chevron
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
