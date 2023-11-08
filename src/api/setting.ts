import axios from './index'
import { BaseResponse } from '@/typings/response.type'
import { Setting } from '@/typings/models/setting.type'

const get = (): Promise<BaseResponse<Setting[]>> => {
  return axios.get('/setting')
}

const save = (data: Setting): Promise<BaseResponse<null>> => {
  return axios.post('/setting', data)
}

const testEmail = (email: string): Promise<BaseResponse<null>> => {
  return axios.post('/setting/test-email', { email }, { timeout: 0 })
}

export {
  get,
  save,
  testEmail
}
