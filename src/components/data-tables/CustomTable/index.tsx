import type { ITablePagination, IInitialTable, ITableColumn, ITableFilter, ITableSubmit, ITableSubmitParams } from './types'
import { useCallback, useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { TableContext } from './store'

import { TablePagination } from './Pagination'
import { TableContent } from './Content'
import { TableLoading } from './Loading'
import { TableSearch } from './Search'
import { TableError } from './Error'
import { TableEmpty } from './Empty'

interface CustomTableProps<DataSchema> {
  data: DataSchema[];
  pagination: ITablePagination;
  columns: ITableColumn<DataSchema>[];
  loading: boolean;
  error: boolean;
  onSubmitTable: ITableSubmit;
}

const initialPagination: ITablePagination = {
  limit: 5,
  page: 1,
  labels: { plural: 'Items', single: 'Item' },
  hasPrevPage: false,
  hasNextPage: false
}

export function CustomTable<DataSchema>(props: CustomTableProps<DataSchema>) {
  const { data, columns, loading, error } = props
  const [showFilters, setShowFilters] = useState(false)
  const [globalFilters, setFilters] = useState([])
  const [searchForm, setSearchForm] = useState<UseFormReturn<any, any, any>>()
  const [pagination, setPagination] = useState(props?.pagination ?? initialPagination)

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

  useEffect(() => {
    if (!globalFilters?.length) {
      const filterFiltersExist = (columnToFilter) => columnToFilter?.filters && columnToFilter?.filters.length

      const filters: ITableFilter[] = columns.filter(filterFiltersExist).map((filter) => {
        const filterOptions = filter.filters.map((filterOption) => ({ ...filterOption, selected: false }))
        const toReturn: ITableFilter = { ...filter, id: filter.id as string, options: filterOptions }

        return toReturn
      })

      setFilters(filters)
    }
  }, [columns, globalFilters?.length])

  const initialValues: IInitialTable = {
    data,
    columns,
    pagination,
    showFilters,
    filters: globalFilters,
    queries: columns.filter(userColumn => userColumn.isQuery).map(column => ({
      id: column.id as string,
      label: column.label
    })),
    onSubmitTable: handleSubmit,
    getFilterOptionsSelectedById: (filterId) => {
      const filterFinded = globalFilters.find((f) => f.id === filterId)

      if (filterFinded) {
        const selectedOptions = filterFinded.options.filter((option) => option.selected).map((option) => option.value)
        return selectedOptions
      }

      return []
    },
    getFiltersWithOptionsSelected: () => {
      return globalFilters
        .map((filter) => ({
          id: filter.id,
          label: filter.label,
          options: filter.options.filter((option) => option.selected).map((option) => option.value)
        }))
        .filter((filter) => filter.options.length > 0)
    },
    selectOptionFilter: (filterId, optionId, optionValue) => {
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
    },
    resetFilters: () => {
      const filtersReseted = globalFilters.map((filter) => ({
        ...filter,
        options: filter.options.map((option) => ({ ...option, selected: false }))
      }))

      setFilters(filtersReseted)
    },
    setShowFilters: (value) => setShowFilters(value),
    updateLimit: (limit) => updatePagination({ ...pagination, limit }),
    searchForm,
    nextPage,
    setSearchForm: (searchForm) => setSearchForm(searchForm),
    prevPage
  }

  return (
    <TableContext.Provider value={{ ...initialValues }}>
      <div className='w-full h-fit space-y-4'>
        {!loading && !error && data && <TableSearch onSubmitTable={handleSubmit} loading={loading} />}

        <div className='rounded-md border'>
          {loading && <TableLoading />}
          {!loading && error && <TableError />}
          {!loading && !error && !data && <TableEmpty />}
          {!loading && !error && data && <TableContent />}
        </div>

        {!loading && !error && data && <TablePagination />}
      </div>
    </TableContext.Provider>
  )
}
