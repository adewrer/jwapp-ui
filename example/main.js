import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jwcell from './../packages/index'
import './assets/iconfont.css'
Vue.config.productionTip = false

Vue.use(jwcell)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
