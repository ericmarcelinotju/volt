export const permissionList = {
  path: '/permission',
  name: 'permission',
  component: () => import(/* webpackChunkName: 'p-permission-list' */ '@/pages/permission/List.vue'),
  meta: {
    auth: true,
    title: 'Permission'
  }
}

export const permissionDetail = {
  path: '/permission/detail/:id',
  name: 'permission-detail',
  component: () => import(/* webpackChunkName: 'p-permission-detail' */ '@/pages/permission/Detail.vue'),
  meta: {
    auth: true,
    title: 'Permission Detail'
  }
}

const PermissionCreateEdit = () => import(/* webpackChunkName: 'p-permission-create-edit' */ '@/pages/permission/CreateEdit.vue')

export const permissionCreate = {
  path: '/permission/create',
  name: 'permission-create',
  component: PermissionCreateEdit,
  meta: {
    auth: true,
    title: 'Permission Create'
  }
}

export const permissionEdit = {
  path: '/permission/edit/:id',
  name: 'permission-edit',
  component: PermissionCreateEdit,
  meta: {
    auth: true,
    title: 'Permission Edit'
  }
}
