import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/front/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'order',
        component: () => import('../views/dashboard/OrderView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/dashboard/ProductsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
