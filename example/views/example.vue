<template>
  <div id="app">
    组件预览
    <div id="nav">
      <router-link to="/cell_example">单元格 cell</router-link>
      <router-link to="/dialog">对话框 dialog</router-link>
      <router-link to="/toast">提示 toast</router-link>
      <router-link to="">待定</router-link>
      <router-link to="">待定</router-link>
      <router-link to="">待定</router-link>
      <router-link to="">待定</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
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
