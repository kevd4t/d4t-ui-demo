import { ICity } from './cities'
import { ITruck } from './trucks'

export interface IStation {
  id: number
  title: string
  lat: string
  lng: string
  city: ICity
  metersCount: number
  reference: string
  status: string
  type: string
  trucks: ITruck[]
}

export interface IDataToCreateStation {
  title: string
  lat: string
  lng: string
  city: ICity
  metersCount: string
  reference: string
  status: string
  type: string
  truck: ITruck
}

export interface IUserDetail extends IStation {}
export interface IDataToEditUser extends IDataToCreateStation {
  trucks: ITruck[]
}
