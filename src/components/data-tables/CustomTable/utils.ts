// @ts-nocheck

import { TablePagination } from './types'

export interface DataToFormat {
  __typename?: string
  count: number
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  page: number
  docs: any[]
}

export const formatPagination = (dataToFormat: DataToFormat): TablePagination => {
  const hasNextPage = dataToFormat?.hasNextPage ?? false
  const hasPrevPage = dataToFormat?.hasPrevPage ?? false
  const limit = dataToFormat?.limit ?? 10
  const page = dataToFormat?.page ?? 1
  const labels = { plural: 'Items', single: 'Item' }

  return { hasNextPage, hasPrevPage, limit, page, labels }
}

export const initialPagination: { limit: number, page: number } = { limit: 10, page: 1 }

export const generateUUID = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  )
