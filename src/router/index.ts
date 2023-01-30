import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '../modules/auth/layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../modules/auth/views/LoginView.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '../modules/auth/views/RegisterView.vue')
      }
    ]
  },

  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/ProductDetailView.vue'),
    props: (route) => {
      const id = Number(route.params.id);
      const userRole = localStorage.getItem('userRole');
      return isNaN(id) ? { id: null, userRole } : { id, userRole }
    }
  },

  {
    path: '/list',
    name: 'products-list',
    component: () => import(/* webpackChunkName: "products-list" */ '../views/ProductsListView.vue')
  },
  

  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
