<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/offer">Offert</router-link> |
    <router-link to="/settings">Inställningar</router-link>
  </div>
  <router-view />
</template>

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
