import { LucideIcon } from 'lucide-react'

type TOptionItemToFilter = {
  label: string
  value: string
  icon?: LucideIcon
}

export interface IItemToFilter {
  columnID: string,
  label: string,
  options: TOptionItemToFilter[]
}
