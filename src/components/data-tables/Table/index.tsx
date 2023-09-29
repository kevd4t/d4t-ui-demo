import type { ITablePagination, ITableColumn, ITableFilter, ITableSubmit, ITableSubmitParams } from './types'
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { TableContext } from './store'

import { TablePagination } from './Pagination'
import { TableContent } from './Content'
import { TableLoading } from './Loading'
import { TableSearch } from './Search'
import { TableError } from './Error'
import { TableEmpty } from './Empty'

interface CustomTableProps<DataSchema> {
  data: DataSchema[]
  pagination: ITablePagination
  columns: ITableColumn<DataSchema>[]
  loading: boolean
  error: boolean
  onSubmitTable: ITableSubmit
  setSelectItem: Dispatch<SetStateAction<any>>
}

const initialPagination: ITablePagination = {
  limit: 5,
  page: 1,
  labels: { plural: 'Items', single: 'Item' },
  hasPrevPage: false,
  hasNextPage: false
}

export function DataTable<DataSchema>(props: CustomTableProps<DataSchema>) {
  const [localData, setLocalData] = useState([])
  const [globalFilters, setFilters] = useState([])
  const [localQueries, setLocalQueries] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  const [localError, setLocalError] = useState(props?.error)
  const [localLoading, setLocalLoading] = useState(props?.loading)
  const [searchForm, setSearchForm] = useState<UseFormReturn<any, any, any>>()
  const [pagination, setPagination] = useState(props?.pagination ?? initialPagination)
  const [localColumns, setLocalColumns] = useState<ITableColumn<DataSchema>[]>(props?.columns || [])

  const handleSubmit = useCallback((params: ITableSubmitParams) => props.onSubmitTable({ ...params }), [props])

  const updatePagination = useCallback((newPagination) => {
    setPagination(newPagination)

    const formSearchQuery = searchForm.getValues()

    const queries = []

    Object.entries(formSearchQuery)?.forEach(query => {
      if (!query[1]) return

      queries.push({
        field: query[0],
        text: query[1]
      })
    })

    const filtersSelected: ITableFilter[] = globalFilters
      .map((filter) => ({
        id: filter.id,
        label: filter.label,
        options: filter.options.filter((option) => option.selected).map((option) => option.value)
      }))
      .filter((filter) => filter.options.length > 0)

    handleSubmit({ filters: filtersSelected, queries, limit: newPagination.limit, page: newPagination.page })
  }, [globalFilters, handleSubmit, searchForm])

  const nextPage = useCallback(() => {
    updatePagination({ ...pagination, page: pagination.page + 1 })
  }, [pagination, updatePagination])

  const prevPage = useCallback(() => {
    if (pagination.page > 1) {
      updatePagination({ ...pagination, page: pagination.page - 1 })
    }
  }, [pagination, updatePagination])

  const getFiltersWithOptionsSelected = () => {
    return globalFilters
      .map((filter) => ({
        id: filter.id,
        label: filter.label,
        options: filter.options.filter((option) => option.selected).map((option) => option.value)
      }))
      .filter((filter) => filter.options.length > 0)
  }

  const getFilterOptionsSelectedById = (filterId) => {
    const filterFinded = globalFilters.find((f) => f.id === filterId)

    if (filterFinded) {
      const selectedOptions = filterFinded.options.filter((option) => option.selected).map((option) => option.value)
      return selectedOptions
    }

    return []
  }

  const selectOptionFilter = (filterId, optionId, optionValue) => {
    const filterFinded = globalFilters.map((filter) => {
      if (filter.id === filterId) {
        return {
          ...filter,
          options: filter.options.map((option) => {
            if (option.id === optionId) {
              return { ...option, selected: optionValue }
            }
            return option
          })
        }
      }
      return filter
    })

    setFilters(filterFinded)
  }

  const getGlobalFilters = () => globalFilters

  const resetOptionsByFilter = (filterId) => {
    const filtersReseted = globalFilters.map(filter => {
      if (filter.id === filterId) {
        return {
          ...filter,
          options: filter.options.map(option => ({ ...option, selected: false }))
        }
      }

      return filter
    })

    setFilters(filtersReseted)
  }

  const updateLimit = (limit) => updatePagination({ ...pagination, limit })

  const resetFilters = () => {
    const filtersReseted = globalFilters.map((filter) => ({
      ...filter,
      options: filter.options.map((option) => ({ ...option, selected: false }))
    }))

    setFilters(filtersReseted)
  }

  useEffect(() => setLocalData(props?.data || []), [props?.data])
  useEffect(() => setLocalLoading(props?.loading), [props?.loading])
  useEffect(() => setLocalError(props?.error || false), [props?.error])
  useEffect(() => setPagination(props?.pagination), [props?.pagination])
  useEffect(() => setLocalColumns(props?.columns || []), [props?.columns])

  useEffect(() => {
    const queries = localColumns.filter(userColumn => userColumn.isQuery).map(column => ({
      id: column.id as string,
      label: column.label
    }))

    setLocalQueries(queries)
  }, [localColumns])

  useEffect(() => {
    if (!globalFilters?.length) {
      const filterFiltersExist = (columnToFilter) => columnToFilter?.filters && columnToFilter?.filters.length

      const filters: ITableFilter[] = localColumns.filter(filterFiltersExist).map((filter) => {
        const filterOptions = filter.filters.map((filterOption) => ({ ...filterOption, selected: false }))
        const toReturn: ITableFilter = { ...filter, id: filter.id as string, options: filterOptions }

        return toReturn
      })

      setFilters(filters)
    }
  }, [localColumns, globalFilters?.length])

  useEffect(() => {
    setPagination(prevState => ({
      ...prevState,
      hasNextPage: props?.pagination?.hasNextPage,
      hasPrevPage: props?.pagination?.hasPrevPage
    }))
  }, [props.pagination.hasNextPage, props.pagination.hasPrevPage])

  return (
    <TableContext.Provider value={{
      data: localData,
      columns: localColumns,
      pagination,
      showFilters,
      getFiltersWithOptionsSelected,
      onSubmitTable: handleSubmit,
      filters: globalFilters,
      queries: localQueries,
      getFilterOptionsSelectedById,
      getGlobalFilters,
      selectOptionFilter,
      resetOptionsByFilter,
      resetFilters,
      updateLimit,
      setSelectItem: props.setSelectItem,
      setShowFilters: (value) => setShowFilters(value),
      setSearchForm: (searchForm) => setSearchForm(searchForm),
      searchForm,
      nextPage,
      prevPage
    }}>
      <div className='w-full h-fit space-y-4'>
        {<TableSearch onSubmitTable={handleSubmit} loading={localLoading} />}

        <div className='rounded-md border'>
          {localLoading && <TableLoading />}
          {!localLoading && localError && <TableError />}
          {!localLoading && !localError && !localData && <TableEmpty />}
          {!localLoading && !localError && localData && <TableContent />}
        </div>

        {!localLoading && !localError && localData && <TablePagination />}
      </div>
    </TableContext.Provider>
  )
}
