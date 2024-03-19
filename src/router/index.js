import Vue from 'vue'
import VueRouter from 'vue-router'
import signupPage from '../views/loginPage/signupPage/index.vue';

Vue.use(VueRouter)

const routes = [
 {
   path: '/',
   name: 'SignUp',
   component: signupPage,
 },
 {
   path: '/signin',
   name: 'SignIn',
   component: () => import('../views/loginPage/signinPage/index.vue'),
 },
 {
  path: '/setup',
  name: 'Setuppage',
  component: () => import('../views/loginPage/signupPage/setupPage.vue'),
 },
 {
  path: '/companies',
  name: 'Companies',
  component: () => import('../views/homePage/companiesPage/index.vue'),
 },
 {
  path: '/bills',
  name: 'Bills',
  component: () => import('../views/homePage/billsPage/index.vue'),
 },
 {
  path: '/contracts',
  name: 'Contracts',
  component: () => import('../views/homePage/contractsPage/index.vue'),
 },
 {
  path: '/users',
  name: 'Users',
  component: () => import('../views/homePage/usersPage/index.vue'),
 },
 {
  path: '/settings',
  name: 'Settings',
  component: () => import('../views/homePage/settingsPage/index.vue'),
 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
