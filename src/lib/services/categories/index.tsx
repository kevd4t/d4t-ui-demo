export const handleFetchUrlCategories = ({ pageIndex, pageSize, search, filters }) => {
  const status = (filters?.status?.length) ? filters?.status : null

  const filterStatus = status ? `&status=${status}` : ''
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/categories?page=${pageIndex}&limit=${pageSize}${filterStatus}${searchText}`

  return url
}

export const handleFetchUrlSubCategories = ({ pageIndex, pageSize, search, filters }) => {
  const status = (filters?.status?.length) ? filters?.status : null

  const filterStatus = status ? `&status=${status}` : ''
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/subcategories?page=${pageIndex}&limit=${pageSize}${filterStatus}${searchText}`

  return url
}
