import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import ProjectView from './views/ProjectView.vue'
import NotFound from './views/404.vue'
import Donate from './views/Donate.vue'
import Portfolio from './views/Portfolio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'about',
      component: Projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      // 404, Matches everything that is not specified above
      path: '*',
      component: NotFound
    }
  ]
})
