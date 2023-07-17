
export interface ICity {
  id: number
  title: string
  isActive: boolean
}

export interface IState {
  id: number
  title: string
  isActive: boolean
  cities: ICity[]
}

export interface IFormCreateState {
  title: string
  isActive: 'true' | 'false'
}

export interface IFormCreateCity {
  title: string
  isActive: 'true' | 'false'
}

export interface IFormEditState {
  title: string
  isActive: 'true' | 'false'
}

export interface IFormEditCity {
  title: string
  isActive: 'true' | 'false'
}
