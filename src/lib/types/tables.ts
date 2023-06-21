import type { ReactNode } from '@/lib/types'
import { LucideIcon } from 'lucide-react'

type TOptionItemToFilter = {
  label: string
  value: string | boolean
  icon?: LucideIcon
}

export interface IItemToFilter {
  columnID: string,
  label: string,
  icon?: ReactNode
  options: TOptionItemToFilter[]
}

export interface IDataPaginationlabel {
  pluralItem: string
  singularItem: string
}
