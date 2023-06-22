import { IFetchDataTable } from './http'

export interface ISubCategory {
  id: number
  title: string
  description: string;
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
  createdAt: string
  updatedAt: string
}

export interface ICategoryToCreate {
  title: string
  description: string
  isActive: boolean
}

export interface ITableCategoryWithSubCategories extends IFetchDataTable<ICategoryWithSubCategories> {}
