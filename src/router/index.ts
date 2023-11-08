import { createRouter, createWebHashHistory } from 'vue-router'
import { config } from '@/config'
import {
  dashboard, maintenance, setting,
  authRoutes,
  userRoutes,
  roleRoutes,
  permissionRoutes,
  logRoutes
} from './routes'

import DefaultContainer from '@/components/layout/Container.vue'
import { guardAuth } from './guard'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // Pages
    {
      path: '/',
      component: DefaultContainer,
      redirect: '/dashboard',
      children: [
        dashboard,
        setting,
        maintenance,

        ...Object.values(userRoutes),
        ...Object.values(roleRoutes),
        ...Object.values(permissionRoutes),

        ...Object.values(logRoutes)
      ],
      beforeEnter: guardAuth
    },
    ...authRoutes
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | ${config.appName}`
  next()
})

export default router
