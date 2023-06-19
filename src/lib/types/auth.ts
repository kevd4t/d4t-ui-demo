import { IGenericFetchReturn } from './http'
import { TRole } from './roles'

export interface IAuth {
  id: string
  name: string
  lastname: string
  email: string
  ci: string
  photo: string | null
  phone: string
  role: TRole
  isActive: boolean
  refreshToken: string
  accessToken: string
  createdAt: string
  updatedAt: string
}

export interface IReturnAuth extends IGenericFetchReturn {
  data: IAuth
}
