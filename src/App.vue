<template>
  <nav>
    <router-link to="/">Puresol Canvas</router-link> |
    <router-link to="/puresol-form">Puresol Form</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import url("./assets/css/reboot/bootstrap-reboot.css");
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Devanagari:wght@400&display=swap');
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
