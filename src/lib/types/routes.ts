import { IGPSDevice } from './gps'
import { IFleet } from './fleets'
import { ITruck } from './trucks'

export interface IRoute {
  id: number
  guide: string
  originStation: string
  finalStation: string
  gpsDevice: IGPSDevice
  fleet: IFleet
  truck: ITruck
  status: string
}
