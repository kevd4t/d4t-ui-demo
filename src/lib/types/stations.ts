/* eslint-disable no-use-before-define */
import type { IMeterDevice } from './meters'
import type { ReactNode } from './next-react'
import type { ITruck } from './trucks'
export interface IStation {
  id: string
  rif: string
  type: string
  title: string
  modality: string
  isActive: boolean
  nbBandera: string
  cadenaSum: string
  socialReason: string
  isDiselDispatch: boolean
  isGasolineDispatch: boolean
  metersCount: number
  status: string
  images: string[]
  tanks: ITank[]
  trucks: ITruck[]
  islands: IIsland[]
  direction: IDirection
  infoTanks: IInfoTanks
  meters: IMeterDevice[]
  infoIslands: IInfoIslands
  coordinates: ICoordinates
  contacts: IStationContact[]
  infoSupplies: IInfoSupplies
  infoDispensers: IInfoDispensers
}

export interface IStationContact {
  id: string
  name: string
  email: null | string
  ci: null | string
  phone: null | string
  photo?: null | string
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

export interface IFormCreateStation {
  title: string
  rifType: string
  rifNumber: string

  modality: string
  type: string

  nbBandera: string
  cadenaSum: string

  socialReason: string

  isDiselDispatch: boolean
  isGasolineDispatch: boolean

  metersCount: number

  status: string
  isActive: 'true' | 'false'

  directionState: string
  directionCity: string
  directionReference: string

  // images: string[]
  // tanks: ITank[]
  // islands: IIsland[]
  // direction: IDirection
  // infoTanks: IInfoTanks
  // infoIslands: IInfoIslands
  // coordinates: ICoordinates
  // contacts: IStationContact[]
  // infoSupplies: IInfoSupplies
  // infoDispensers: IInfoDispensers
}

export interface IStationDetail extends IStation {}
export interface IDataToEditStation extends IFormCreateStation {
  trucks: ITruck[]
}

export interface IFormCreateStationContact {
  name: string
  email: null | string
  ciType: null | string
  ciNumber: null | string
  phone: null | string
  phoneNumber: string
  phoneCode: string
  photo?: null | string
}

export type TAccountTabKey = 'BASIC_INFO' | 'ISLANDS' | 'TANKS' | 'DISPENSERS' | 'METERS'

export interface IContentTabs {
  label: string
  tabKey: TAccountTabKey
  content: ReactNode
  icon: ReactNode
  isDisabled: boolean
  isCompleted: boolean
  isActive: boolean
  route: '/islas' | '/tanques' | '/info' | '/dispensadores' | '/medidores'
}
