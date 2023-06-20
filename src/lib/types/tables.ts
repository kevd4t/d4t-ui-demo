import { LucideIcon } from 'lucide-react'

type TOptionItemToFilter = {
  label: string
  value: string | boolean
  icon?: LucideIcon
}

export interface IItemToFilter {
  columnID: string,
  label: string,
  options: TOptionItemToFilter[]
}
