import type { ReactNode } from '@/lib/types'
import { LucideIcon } from 'lucide-react'

type TOptionItemToFilter = {
  label: string
  value: string | boolean
  icon?: LucideIcon
}

export interface IItemToFilter {
  queryFilterColumnID?: string
  columnID: string,
  label: string,
  icon?: ReactNode
  options: TOptionItemToFilter[]
}

export interface ITablePaginationlabel {
  pluralItem: string
  singularItem: string
}

export interface IUrlUsersSWR {
  page?: number
  initFetch?: boolean
  search?: string
}

export interface ITableSearchInput {
  placeholder: string,
}

export interface ITableQuery {
  queryKey: string
  queryFn: any
  queryParams: any
}

export interface ITableQueryData {
  info: {
    pageCount: number
    totalItems: number
    totalPages: number
    currentPage: number
    nextPage: number | null
    prevPage: number | null
  }
  results: any[]
}
