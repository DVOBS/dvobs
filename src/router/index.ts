import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "project-editor-page" */ '@/views/ProjectEditorPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
