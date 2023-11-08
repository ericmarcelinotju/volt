import { BaseModel } from './model.type'

export class Setting extends BaseModel {
  key: string
  value: string
}

export class SettingList {
  total: number
  settings: Setting[]
}
