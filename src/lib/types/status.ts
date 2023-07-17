export interface IStatus {
  id: number
  title: string
  description: string
  color: string
  isActive: boolean
}

export interface IStatusType {
  id: number
  title: string
  description: string
  status: IStatus[]
  isActive: boolean
}

export interface IFormCreateStatusType {
  title: string
  description: string
  status: IStatus[]
  isActive: 'true' | 'false'
}

export interface IFormEditStatusType {
  title: string
  description: string
  isActive: 'true' | 'false'
}

export interface IFormCreateStatus {
  title: string
  description: string
  color: string
  isActive: 'true' | 'false'
}

export interface IFormEditStatus {
  title: string
  description: string
  color: string
  isActive: 'true' | 'false'
}
