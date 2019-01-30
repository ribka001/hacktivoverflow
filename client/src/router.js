import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'questions',
          name: 'readAll',
          component: () => import('./components/ReadAll.vue'),
          children: [],
        },
        {
          path: 'question/:id',
          name: 'question',
          component: () => import('./components/QuestionDetail.vue'),
        },
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './components/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './components/Login.vue')
    }
  ]
})
