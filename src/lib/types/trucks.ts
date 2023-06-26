import { IFleet } from './fleets'
import { IStation } from './stations'

export interface ITruck {
  id: number
  title: string
  numberPlate: string
  image: string
  typeTruck: string
  status: string
  fleet: IFleet
  station: IStation
}
