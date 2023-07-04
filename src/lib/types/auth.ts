import { IUser } from './users'

export interface IAuth extends IUser {
  token: string
}

export interface IReturnAuth {
  data: IAuth
}

export type TRecoverAccountViewType = 'SEND_EMAIL' | 'CODE_PIN' | 'SET_NEW_PASSWORD'

export interface IRecoverAccountView {
  type: TRecoverAccountViewType
}

export type TSetRecoverAccountViewType = (type: TRecoverAccountViewType) => void
