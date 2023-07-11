import { ITruck } from './trucks'

export interface IFleet {
  id: number
  title: string
  description: string
  status: string
  trucks: ITruck[]
}

export interface IFormCreateFleet {
  title: string
  description: string
  status: string
}

export interface IFormEditFleet {
  title: string
  description: string
  status: string
}
