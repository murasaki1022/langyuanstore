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
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'order-confirmation',
        component: () => import('../views/front/OrderConfView.vue')
      },
      {
        path: 'q&a',
        component: () => import('../views/front/QnaView.vue')
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
      },
      {
        path: 'coupon',
        component: () => import('../views/dashboard/CouponView.vue')
      },
      {
        path: 'news',
        component: () => import('../views/dashboard/NewsView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
