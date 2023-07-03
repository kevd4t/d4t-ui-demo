import { IUser } from './users'

export interface IAuth extends IUser {
  token: string
}

export interface IReturnAuth {
  data: IAuth
}
