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
  images: string[]
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

export interface IStationDetail extends IStation {}
export interface IDataToEditStation extends IDataToCreateStation {
  trucks: ITruck[]
}
