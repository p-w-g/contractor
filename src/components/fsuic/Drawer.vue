<template>
  <div z-index="2">
    <input
      class="kebab"
      type="image"
      :src="KebabMenu"
      alt="Navigation Drawer"
      @click="toggleDrawer"
      :class="isOpen ? 'kebab--open' : ''"
    />

    <teleport to="body">
      <transition name="slide-fade">
        <ul v-if="isOpen" id="nav">
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
  data: () => ({ isOpen: false }),
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

<style lang="scss">
.kebab {
  position: absolute;
  top: 0;
  left: 0px;
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  border-bottom-right-radius: 5px;
  &--open {
    transform: translateX(147px);

    background: #fefefe;
  }
}
#nav {
  padding: 18px;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0;
  background: #fefefe;
  border-bottom-right-radius: 5px;

  list-style: none;
  a {
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #97ead2;
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-147px);
  opacity: 0;
}
</style>
