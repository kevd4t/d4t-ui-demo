import { TModules } from './modules'
import { TRole } from './roles'

export interface IUserGroup {
  id: number;
  title: string;
  description: string;
  moduleAccess: TModules[];
}

export interface IUser {
  group: IUserGroup
  id: string
  name: string
  lastname: string
  token: string;
  email: string
  ci: string
  photo: string
  phone: string
  role: TRole
  isActive: boolean
  createdAt: string
  updatedAt: string
}
