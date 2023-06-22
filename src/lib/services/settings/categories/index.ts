import { ITableCategoryWithSubCategories } from '@/lib/types'
import { fetcher } from '@/lib/utils/fetcher'

export const fetchCategories = async ({ queryKey }) => {
  const [, { pageIndex, pageSize, search, filters }] = queryKey

  console.log({ fetchCategories: queryKey })

  const filterStatus = filters?.status && (filters?.status.length > 0) ? `&status=${filters?.status}` : ''
  const searchText = search ? `&search=${search}` : ''

  const data = await fetcher(`/api/categories?page=${pageIndex}&limit=${pageSize}${filterStatus}${searchText}`)
  return data
}

export const fetchSubCategories = async ({ queryKey }) => {
  const [, { pageIndex, pageSize, search, filters }] = queryKey

  const filterStatus = filters?.status && (filters?.status.length > 0) ? `&status=${filters?.status}` : ''
  const searchText = search ? `&search=${search}` : ''

  const data: ITableCategoryWithSubCategories = await fetcher(`/api/categories?page=${pageIndex}&limit=${pageSize}${filterStatus}${searchText}`)
  const subcategories = data.results.flatMap((category) => category.subcategories)

  return { info: data.info, results: [...subcategories] }
}
