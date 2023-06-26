import { ICity } from './cities'

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
}
