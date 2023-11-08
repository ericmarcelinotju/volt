import { TableColumn } from '@/typings/table.type'

const defaultUserColumns: TableColumn[] = [
  {
    label: 'ID',
    key: 'id',
    isHidden: true
  },
  {
    label: 'Username',
    key: 'username',
    isSortable: true,
    isSearchable: true
  },
  {
    label: 'Email',
    key: 'email',
    isSortable: true,
    isSearchable: true
  },
  {
    label: 'Role',
    key: 'role'
  },
  {
    label: 'Role',
    key: 'role_id',
    isHidden: true,
    isSearchable: true,
    options: [],
    type: 'dropdown'
  },
  {
    label: 'Last Login',
    key: 'last_login'
  }
]

const state = () => ({
  userColumns: defaultUserColumns
})

const getters = {
  user (state) {
    return state.userColumns || []
  }
}

const mutations = {
  setUser (state, value) {
    state.userColumns = [...value]
  },
  setDefaultUser (state) {
    state.userColumns = defaultUserColumns
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
