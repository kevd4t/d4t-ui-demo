import { ICity } from './states-cities'
import { ITruck } from './trucks'

/* eslint-disable no-use-before-define */
export interface IStationDataOriginal {
  id: string
  title: string
  type: string
  modality: string
  isActive: boolean
  socialReason: string
  rif: string
  direction: IDirection
  coordinates: ICoordinates
  contacts: IStationContact[]
  tanks: ITank[]
  islands: IIsland[]
  infoTanks: IInfoTanks
  infoIslands: IInfoIslands
  infoSupplies: IInfoSupplies
  infoDispensers: IInfoDispensers
  isGasolineDispatch: boolean
  isDiselDispatch: boolean
  nbBandera: string
  cadenaSum: string
}

export interface IStation extends IStationDataOriginal {
  metersCount: number
  status: string
  trucks: ITruck[]
  images: string[]
}

export interface IStationContact {
  id: string
  name: string
  email: null | string
  ci: null | string
  phone: null | string
}

export interface ICoordinates {
  lat: number
  lng: number
  mapUrl: string
}

export interface IDirection {
  state: string
  city: string
  reference: string
}

export interface IInfoDispensers {
  operativeTotalPeaks: number
  inoperativeTotalPeaks: number
}

export interface IInfoIslands {
  total: number
  operativeTotal: number
  inoperativeTotal: number
}

export interface IInfoSupplies {
  total: number
}

export interface IInfoTanks {
  total: number
  diselTotal: number
  gasolineTotal: number
  operativeTotal: number
  inoperativeTotal: number
  capacityTotal: number
}

export interface IIsland {
  id: string
  status: string
  surtidores: ISurtidore[]
}

export interface ISurtidore {
  id: string
  status: string
  serial: string
  mark: IMark
  model: IMark
  dispensers: IDispenser[]
}

export interface IDispenser {
  id: string
  status: string
  serial: string
  mark: IMark
  model: IMark
}

export interface IMark {
  id: string
  title: string
  description: string
  image: string
  isActive: boolean
  peaksCount?: number
  type?: string
}

export interface ITank {
  id: string
  total: number
  combustibleType: string
  status: string
  capacity?: number
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
