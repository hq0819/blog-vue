import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: HomePage
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
})
