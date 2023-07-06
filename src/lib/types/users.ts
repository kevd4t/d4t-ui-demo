import { TModules } from './modules'
import { TRole } from './roles'

export type TCIType = 'V' | 'E' | 'P' | 'J' | 'G'

export interface ICI {
  type: TCIType
  number: string
  image: string
}

export interface IUserGroup {
  id: number
  title: string
  description: string
  // TO FIX TYPE
  moduleAccess: TModules[] | string[]
  isActive: boolean
}

export interface IUser {
  id: number
  names: string
  username: string
  surnames: string
  email: string
  photo: string
  phone: string
  ci: ICI
  role: TRole
  group: IUserGroup
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface IDataToCreateUser {
  names: string
  surnames: string
  username: string
  ciType: string
  ciNumber: string
  phoneCode: string
  phoneNumber: string
  email: string
  isActive: 'true' | 'false'
  role: TRole
}

export interface IUserDetail extends IUser {}
export interface IDataToEditUser extends IDataToCreateUser {
  group: IUserGroup
}

// User Group
export interface IDataToCreateUserGroup {
  title: string
  description: string
  isActive: boolean
  users?: IUser[]
}

export interface IDataToEditUserGroup extends IDataToCreateUserGroup {}
