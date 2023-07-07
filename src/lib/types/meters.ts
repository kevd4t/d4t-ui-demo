import { ITruck } from './trucks'

export interface IMeterModel {
  id: number
  title: string
  isActive: boolean
  description: string
  image: string
  type: string
}

export interface IMeterMark {
  id: number
  title: string
  description: string
  image: string
  isActive: boolean
  models?: IMeterModel[]
}

export interface IMeterDevice {
  id: number
  serial: string
  image: string
  status: string
  meterMark: IMeterMark
  meterModel: IMeterModel
  truck: ITruck
}

export interface ICreateMeterMark {
  title: string
  description: string
  isActive: 'true' | 'false'
}

export interface ICreateMeterModel {
  title: string
  description: string
  isActive: 'true' | 'false'
  type: string
}

export interface IDataToEditMeterMark extends ICreateMeterMark {
  models: IMeterModel[]
  image: string
}
