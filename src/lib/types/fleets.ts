import { ITruck } from './trucks'

export interface IFleet {
  id: number
  title: string
  description: string
  status: string
  trucks: ITruck[]
}
