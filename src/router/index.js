import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import button from '../pages/button.vue'
import list from '../pages/list.vue'
import nav from '../pages/nav.vue'
import nav_list from '../pages/nav_list.vue'
import nav_index from '../pages/nav_index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/btn',
      name: 'btn',
      component: button
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav,
      children:[
        {
          path: '/',
          name: 'nav_index',
          component: nav_index
        },
        {
          path: 'nav_list',
          name: 'nav_list',
          component: nav_list
        }

      ]
    }
  ]
})
