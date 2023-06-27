export const handleFetchUrlCategories = ({ pageIndex, pageSize, search, filters }) => {
  const status = (filters?.status?.length) ? filters?.status : null

  const filterStatus = status ? `&status=${status}` : ''
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/categories?page=${pageIndex}&limit=${pageSize}${searchText}${filterStatus}`

  return url
}

export const handleFetchUrlSubCategoriesByCategoryId = ({ categoryId, pageIndex, pageSize, search, filters }) => {
  const status = (filters?.status?.length) ? filters?.status : null

  const filterStatus = status ? `&status=${status}` : ''
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/categories/${categoryId}/subcategories?page=${pageIndex}&limit=${pageSize}${searchText}${filterStatus}`

  return url
}
