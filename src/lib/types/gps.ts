import { IFleet } from './fleets'
import { ITruck } from './trucks'

export interface IGPSModel {
  id: number
  title: string
  isActive: boolean
  description: string
  image: string
  type: string
}

export interface IGPSMark {
  id: number
  title: string
  description: string
  image: string
  isActive: boolean
  gpsModels: IGPSModel[]
}

export interface ICreateGPSMark {
  title: string
  description: string
  image: string
  isActive: boolean | 'true' | 'false'
  gpsModels: IGPSModel[]
}

export interface IGPSDevice {
  id: number
  serial: string
  status: string
  gpsMark: IGPSMark
  gpsModel: IGPSModel
  fleet?: IFleet
  truck?: ITruck
  images: string[]
}

export interface IFormCreateGPSDevice {
  serial: string
  status: string
}
