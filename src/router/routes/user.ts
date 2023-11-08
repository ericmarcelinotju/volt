export const userList = {
  path: '/user',
  name: 'user',
  component: () => import(/* webpackChunkName: 'p-user-list' */ '@/pages/user/List.vue'),
  meta: {
    auth: true,
    title: 'User'
  }
}

export const userDetail = {
  path: '/user/detail/:id',
  name: 'user-detail',
  component: () => import(/* webpackChunkName: 'p-user-detail' */ '@/pages/user/Detail.vue'),
  meta: {
    auth: true,
    title: 'User Detail'
  }
}

const UserCreateEdit = () => import(/* webpackChunkName: 'p-user-create-edit' */ '@/pages/user/CreateEdit.vue')

export const userCreate = {
  path: '/user/create',
  name: 'user-create',
  component: UserCreateEdit,
  meta: {
    auth: true,
    title: 'User Create'
  }
}

export const userEdit = {
  path: '/user/edit/:id',
  name: 'user-edit',
  component: UserCreateEdit,
  meta: {
    auth: true,
    title: 'User Edit'
  }
}
