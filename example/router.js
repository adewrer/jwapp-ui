import Vue from 'vue'
import Router from 'vue-router'
import example from './views/example.vue'
import cellExample from './views/cell_example.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'example',
      component: example
    },
    {
      path: '/cell_example',
      name: 'cellExample',
      component: cellExample
    }
  ]
})
