import { ICI } from './users'

export interface IDriverToCreate {
  names: string
  surnames: string
  phoneCode: string
  phoneNumber: string
  ci: string
  ciNumber: string
  status: string
  licenseType: string
  ciType: string
}

export interface IDriver {
  id: string
  names: string
  surnames: string
  phone: string
  photo: string
  ci: ICI
  status: string
  licenseImage: string
  licenseType: string
  securityCertificateImage: string
}
