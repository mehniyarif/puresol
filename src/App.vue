<template>
  <nav>
    <router-link to="/">Puresol-canvas</router-link> |
    <router-link to="/puresol-form">Puresol-form</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import url("./assets/css/reboot/bootstrap-reboot.css");
body{
  background-color: #F2F2F2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
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
