export const roleList = {
  path: '/role',
  name: 'role',
  component: () => import(/* webpackChunkName: 'p-role-list' */ '@/pages/role/List.vue'),
  meta: {
    auth: true,
    title: 'Role'
  }
}

export const roleDetail = {
  path: '/role/detail/:id',
  name: 'role-detail',
  component: () => import(/* webpackChunkName: 'p-role-detail' */ '@/pages/role/Detail.vue'),
  meta: {
    auth: true,
    title: 'Role Detail'
  }
}

const RoleCreateEdit = () => import(/* webpackChunkName: 'p-role-create-edit' */ '@/pages/role/CreateEdit.vue')

export const roleCreate = {
  path: '/role/create',
  name: 'role-create',
  component: RoleCreateEdit,
  meta: {
    auth: true,
    title: 'Role Create'
  }
}

export const roleEdit = {
  path: '/role/edit/:id',
  name: 'role-edit',
  component: RoleCreateEdit,
  meta: {
    auth: true,
    title: 'Role Edit'
  }
}
