import { RouteRecordRaw } from 'vue-router'
import { userCreate, userDetail, userEdit, userList } from './user'
import { roleCreate, roleDetail, roleEdit, roleList } from './role'
import { forgotPassword, login, logout, resetPassword } from './auth'
import { permissionCreate, permissionDetail, permissionEdit, permissionList } from './permission'
import { logList } from './log'

export const dashboard: RouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import(/* webpackChunkName: 'p-dashboard */ '@/pages/Dashboard.vue'),
  meta: {
    auth: true,
    title: 'Dashboard'
  }
}

export const setting: RouteRecordRaw = {
  path: '/setting',
  name: 'setting',
  component: () => import(/* webpackChunkName: 'p-setting' */ '@/pages/Setting.vue'),
  meta: {
    auth: true,
    title: 'Setting'
  }
}

export const maintenance: RouteRecordRaw = {
  path: '/maintenance',
  name: 'maintenance',
  component: () => import(/* webpackChunkName: 'p-maintenance' */ '@/pages/Maintenance.vue'),
  meta: {
    auth: true,
    title: 'Maintenance'
  }
}

export const forbidden: RouteRecordRaw = {
  path: '/forbidden',
  name: 'forbidden',
  component: () => import(/* webpackChunkName: 'c-forbidden */ '@/pages/error/Forbidden.vue'),
  meta: { title: 'Forbidden' }
}

export const notFound: RouteRecordRaw = {
  path: '/404',
  name: 'not-found',
  component: () => import(/* webpackChunkName: 'c-not-found */ '@/pages/error/NotFound.vue'),
  meta: { title: 'Not Found' }
}

export const authRoutes: RouteRecordRaw[] = [
  login,
  logout,
  forgotPassword,
  resetPassword
]

export const userRoutes: Record<string, RouteRecordRaw> = {
  list: userList,
  detail: userDetail,
  create: userCreate,
  edit: userEdit
}

export const roleRoutes: Record<string, RouteRecordRaw> = {
  list: roleList,
  detail: roleDetail,
  create: roleCreate,
  edit: roleEdit
}

export const permissionRoutes: Record<string, RouteRecordRaw> = {
  list: permissionList,
  detail: permissionDetail,
  create: permissionCreate,
  edit: permissionEdit
}

export const logRoutes: Record<string, RouteRecordRaw> = {
  list: logList
}
