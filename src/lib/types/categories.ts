import { IFetchDataTable } from './http'

export interface ISubCategory {
  id: number
  title: string
  description: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface ICategory {
  id: number
  title: string
  description: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface ICategoryWithSubCategories {
  id: number
  title: string
  description: string
  isActive: boolean
  subcategories: ISubCategory[]
}

export interface IFormCreateCategory {
  title: string
  description: string
  isActive: 'true' | 'false'
}

export interface IFormCreateSubcategory {
  title: string
  description: string
  isActive: boolean
}

export interface IFormEditSubcategory {
  title: string
  description: string
  isActive: boolean
}

export interface IFormEditCategory {
  title: string
  description: string
  isActive: 'true' | 'false'
}

export interface ITableCategoryWithSubCategories extends IFetchDataTable<ICategoryWithSubCategories> {}

// Columns

export type TColumnActions = {
  edit?: boolean
  detail?: boolean
  create?: boolean
  delete?: boolean
  removeLocalItem?: (id: string|number) => void
}

export interface IGetSubcategoryColumnsParams {
  selection?: boolean
  id?: boolean
  actions?: TColumnActions
}
