<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
    margin: 0!important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  a {
    font-weight: bold;
    padding: 10px;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
