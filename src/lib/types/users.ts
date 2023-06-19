import { TRole } from './roles'

export interface IUser {
  id: string
  name: string
  lastname: string
  email: string
  ci: string
  photo: string
  phone: string
  role: TRole
  isActive: boolean
  createdAt: string
  updatedAt: string
}
