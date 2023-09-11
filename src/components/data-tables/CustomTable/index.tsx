import { useCallback, useEffect, useMemo, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

import type { TablePagination as ITablePagination, TableSubmitParams, InitialTable, TableColumn, TableFilter, TableQuery, TableSubmit } from './types'
import { TableContext } from './store'

import { TablePagination } from './Pagination'
import { TableContent } from './Content'
import { TableLoading } from './Loading'
import { TableSearch } from './Search'
import { TableError } from './Error'
import { TableEmpty } from './Empty'

interface CustomTableProps<DataSchema> {
  data: DataSchema[] | []
  pagination: ITablePagination
  columns: TableColumn<DataSchema>[]
  loading: boolean
  error: boolean
  onSubmitTable: TableSubmit
}

const initialPagination = {
  limit: 5,
  page: 1,
  labels: { plural: 'Items', single: 'Item' },
  hasPrevPage: false,
  hasNextPage: false
}

export function CustomTable<DataSchema>(props: CustomTableProps<DataSchema>) {
  const [pagination, setPagination] = useState(props?.pagination ?? initialPagination)
  const [searchForm, setSearchForm] = useState<UseFormReturn<any, any, any>>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [loading] = useState(props?.loading ?? true)
  const [columns] = useState(props?.columns ?? [])
  const [error] = useState(props?.error ?? false)
  const [data] = useState(props?.data ?? [])
  const [globalFilters, setFilters] = useState([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmit = useCallback((params: TableSubmitParams) => props?.onSubmitTable({ ...params }), [props?.onSubmitTable])

  const handleSetSearchForm = useCallback((searchForm) => setSearchForm(searchForm), [])

  const getFilterOptionsSelectedById = useCallback((filterId) => {
    const filterFinded = globalFilters.find((f) => f.id === filterId)

    if (filterFinded) {
      const selectedOptions = filterFinded.options
        .filter((option) => option.selected)
        .map((option) => option.value)

      return selectedOptions
    }

    return []
  }, [globalFilters])

  const getFiltersWithOptionsSelected = useCallback(() => {
    return globalFilters
      .map((filter) => ({
        id: filter.id,
        label: filter.label,
        options: filter.options
          .filter((option) => option.selected)
          .map((option) => option.value)
      }))
      .filter((filter) => filter.options.length > 0)
  }, [globalFilters])

  const selectOptionFilter = useCallback((filterId, optionId, optionValue) => {
    const filterFinded = globalFilters.map(filter => {
      if (filter.id === filterId) {
        return {
          ...filter,
          options: filter.options.map(option => {
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
  }, [globalFilters])

  const resetFilters = useCallback(() => {
    const filtersReseted = globalFilters.map(filter => ({
      ...filter,
      options: filter.options.map(option => ({ ...option, selected: false }))
    }))

    setFilters(filtersReseted)
  }, [globalFilters])

  const handleShowFilters = useCallback((value: boolean) => {
    setShowFilters(value)
  }, [])

  const updateLimit = useCallback((limit) => {
    setPagination(prevState => ({ ...prevState, limit }))
    const formSearchQuery = searchForm.getValues()

    const queries = []
    const filtersSelected: TableFilter[] = getFiltersWithOptionsSelected()

    Object.entries(formSearchQuery)?.forEach(query => {
      if (!query[1]) return

      queries.push({
        field: query[0],
        text: query[1]
      })
    })

    handleSubmit({ filters: filtersSelected, queries, limit, page: pagination.page })
  }, [getFiltersWithOptionsSelected, handleSubmit, pagination.page, searchForm])

  const nextPage = useCallback(() => {
    const page = pagination.page + 1
    setPagination(prevState => ({ ...prevState, page }))

    const formSearchQuery = searchForm.getValues()

    const queries = []
    const filtersSelected: TableFilter[] = getFiltersWithOptionsSelected()

    Object.entries(formSearchQuery)?.forEach(query => {
      if (!query[1]) return

      queries.push({
        field: query[0],
        text: query[1]
      })
    })

    handleSubmit({ filters: filtersSelected, queries, limit: pagination.limit, page })
  }, [getFiltersWithOptionsSelected, handleSubmit, pagination.limit, pagination.page, searchForm])

  const prevPage = useCallback(() => {
    const currentePage = pagination.page
    const page = currentePage === 1 ? 1 : currentePage - 1
    setPagination({ ...pagination, page })

    const formSearchQuery = searchForm.getValues()

    const queries = []
    const filtersSelected: TableFilter[] = getFiltersWithOptionsSelected()

    Object.entries(formSearchQuery)?.forEach(query => {
      if (!query[1]) return

      queries.push({
        field: query[0],
        text: query[1]
      })
    })

    if (pagination.page !== 1) {
      handleSubmit({ filters: filtersSelected, queries, limit: pagination.limit, page })
    }
  }, [getFiltersWithOptionsSelected, handleSubmit, pagination, searchForm])

  const initialValues = useMemo<InitialTable>(() => {
    const columnsWithQueries = columns.filter(userColumn => userColumn.isQuery)

    const queries: TableQuery[] = columnsWithQueries.map(column => ({
      id: column.id as string,
      label: column.label
    }))

    return {
      data,
      columns,
      pagination,
      showFilters,
      filters: globalFilters,
      queries,
      onSubmitTable: handleSubmit,
      getFilterOptionsSelectedById,
      getFiltersWithOptionsSelected,
      selectOptionFilter,
      resetFilters,
      setShowFilters: handleShowFilters,
      updateLimit,
      searchForm,
      nextPage,
      setSearchForm: handleSetSearchForm,
      prevPage
    }
  }, [columns, data, pagination, showFilters, globalFilters, handleSubmit, getFilterOptionsSelectedById, getFiltersWithOptionsSelected, selectOptionFilter, resetFilters, handleShowFilters, updateLimit, searchForm, nextPage, handleSetSearchForm, prevPage])

  useEffect(() => {
    if (!globalFilters?.length) {
      const filterFiltersExist = (columnToFilter) => columnToFilter?.filters && columnToFilter?.filters.length

      const filters: TableFilter[] = columns.filter(filterFiltersExist).map(filter => {
        const filterOptions = filter.filters.map(filterOption => ({ ...filterOption, selected: false }))
        const toReturn = { ...filter, id: filter.id as string, options: filterOptions }

        delete toReturn.filters

        return toReturn
      })

      setFilters(filters)
    }
  }, [columns, globalFilters?.length, initialValues.filters])

  return (
    <TableContext.Provider value={{ ...initialValues }}>
      <div className='w-full h-fit space-y-4'>
        {(!loading && !error && data) && <TableSearch onSubmitTable={handleSubmit} loading={loading} />}

        <div className='rounded-md border'>
          {loading && <TableLoading />}
          {(!loading && error) && <TableError />}
          {(!loading && !error && !data) && <TableEmpty />}
          {(!loading && !error && data) && <TableContent />}
        </div>

        {(!loading && !error && data) && <TablePagination />}
      </div>
    </TableContext.Provider>
  )
}
