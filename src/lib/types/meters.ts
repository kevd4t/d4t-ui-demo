import { IStation } from './stations'

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
  meterModel: IMeterModel
  status: string
  type: string
  meterUnit: string
  images: string[]
  station?: IStation
}

export interface ICreateMeterDevice {
  serial: string
  meterModel: string
  status: string
  type: string
  meterUnit: string
  images: File[]
  station: IStation
}

export interface IEditMeterDevice {
  serial: string
  status: string
  type: string
  meterUnit: string
  images: File[] | string[]
  station: IStation
  meterModel: IMeterModel
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
