export interface IStatus {
  id: number
  title: string
  description: string
  color: string
}

export interface IStatusType {
  id: number
  title: string
  description: string
  status: IStatus[]
}
