import Vue from 'vue'
import VueRouter from 'vue-router'
import RecordPage from '../views/RecordPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RecordPage',
    component: RecordPage
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
