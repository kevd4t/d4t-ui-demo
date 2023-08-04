/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import type { IMeterDevice } from './meters'
import type { ReactNode } from './next-react'
import type { ITruck } from './trucks'

export enum EStationType {
  STOCKAGE = 'STOCKAGE',
  PUMP = 'PUMP'
}

export enum EStationState {
  OPERATIVE = 'OPERATIVE',
  SUSPENDED = 'SUSPENDED',
  INOPERATIVE = 'INOPERATIVE',
  CLOSED = 'CLOSED',
  UNDER_MAINTENANCE = 'UNDER_MAINTENANCE'
}

export enum EStationModality {
  INTEGRAL = 'INTEGRAL', // integral
  INTERNATIONAL = 'INTERNATIONAL', // internacional
  SUBSIDIZED = 'SUBSIDIZED', // subsidiada
  PUBLIC_TRANSPORT = 'PUBLIC_TRANSPORT' // tranporte_publico
}

export interface IStationAttributes {
  id: string
  tanks: IStationTanks[]
  pump_islands: IPumpIsland[]
  dispensers: any[]
}

export interface IPumpIsland {
  id: string
  identifier: string
  maxDispensersAllowed: number
  status: string
  dispensers: IPumpIslandDispenser[]
  gas_station_attributes: IStationAttributes
}

export interface IPumpIslandDispenser {
  id: string
  serial: string
  combustibleType: EHydrocarbon.GASOLINE | EHydrocarbon.DIESEL
  identifier: string
  model: IPumpIslandDispenserModel
  damaged_beak: number
  status: string
  pump_island: IPumpIsland
  brand: IPumpIslandDispenserBrand
}

export interface IPumpIslandDispenserBrand {
  id: string
  name: string
  description: string
  image: string
  pump_island_dispenser: IPumpIslandDispenser
}

export interface IPumpIslandDispenserModel {
  id: string
  name: string
  description: string
  beaks_count: number
  image: string
  pump_island_dispenser: IPumpIslandDispenser
}

export enum EStationTanksStatus {
  DAMAGED = 'DAMAGED', // dañado
  UNDER_CONSTRUCTION = 'UNDER_CONSTRUCTION', // en_construcción
  OPERATIVE = 'OPERATIVE', // operativo
  INOPERATIVE = 'INOPERATIVE', // inoperative
  UNDER_MAINTENANCE = 'UNDER_MAINTENANCE', // en_mantenimiento
}

export interface IStationTanks {
  id: string
  capacity: number
  identifier: string
  type: string
  measurement_unit: EMesurementUnit
  hydrocarbon: EHydrocarbon
  gas_station_attributes: IStationAttributes
  status: EStationTanksStatus
}

export enum EMesurementUnit {
  VOLUME = 'VOLUME', // volumen
  LITER = 'LITER', // litro
  WEIGHT = 'WEIGHT' // peso
}

export enum EHydrocarbon {
  GASOLINE = 'GASOLINE', // gasolina
  DIESEL = 'DIESEL', // diesel
  GAS = 'GAS' // gas
}

export interface IStationContactV2 {
  id: string
  name: string
  identity_card_number: string
  email: string
  phone: string
  photo: null
}

export interface IStationLocation {
  id: string
  address: string
  coords: IStationCoords
  city: string
  state: string
  gas_station: IStation
}

export interface City {
  id: string
  name: string
}

export interface IStationCoords {
  id: string
  lat: string
  lng: string
  gas_station_location: IStationLocation
}

export enum EStationImageType {
  MAIN = 'MAIN',
  ISLANDS = 'ISLANDS',
  TANKS = 'TANKS'
}

export interface IStationImages {
  id: string
  url: string
  type: EStationImageType
}

export interface IStation {
  id: string
  rif: string
  logo: string
  name: string
  verified: boolean
  chain_supply: string
  social_reason: string
  type: EStationType
  state: EStationState
  images: IStationImages[]
  location: IStationLocation
  modality: EStationModality
  contacts: IStationContactV2[]
  attributes: IStationAttributes
  provider_services: EHydrocarbon[]
}

// OLD
// export interface IStation {
//   id: string
//   rif: string
//   type: string
//   title: string
//   modality: string
//   isActive: boolean
//   nbBandera: string
//   cadenaSum: string
//   socialReason: string
//   isDiselDispatch: boolean
//   isGasolineDispatch: boolean
//   metersCount: number
//   status: string
//   images: string[]
//   tanks: ITank[]
//   trucks: ITruck[]
//   islands: IIsland[]
//   direction: IDirection
//   infoTanks: IInfoTanks
//   meters: IMeterDevice[]
//   infoIslands: IInfoIslands
//   coordinates: ICoordinates
//   contacts: IStationContact[]
//   infoSupplies: IInfoSupplies
//   infoDispensers: IInfoDispensers
// }

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

export type TPumpStationFlowTabKey = 'BASIC_INFO' | 'ISLANDS' | 'TANKS' | 'DISPENSERS' | 'METERS'
export type TStockageStationFlowTabKey = 'BASIC_INFO' | 'ANOTHER'

export interface IPumpStationContentTab {
  label: string
  tabKey: TPumpStationFlowTabKey
  // content: ReactNode
  icon: ReactNode
  isDisabled: boolean
  isCompleted: boolean
  isActive: boolean
  route: '/islas' | '/tanques' | '/info' | '/dispensadores' | '/another'
}

export interface IStockageStationContentTab {
  label: string
  tabKey: TStockageStationFlowTabKey
  // content: ReactNode
  icon: ReactNode
  isDisabled: boolean
  isCompleted: boolean
  isActive: boolean
  route: '/another'
}
