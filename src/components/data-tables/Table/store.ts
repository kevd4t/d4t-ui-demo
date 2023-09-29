// @ts-nocheck
import { createContext } from 'react'
import { create } from 'zustand'

import { IInitialTable, ITableContextStore, ITableFilter, ITableQuery, ITableStore } from './types'

// TODO Refactor
export const useTableStore = create<ITableStore<any>>((set, get) => ({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  showFilters: true,
  onSubmitTable: null,
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: 'Items', single: 'Item' },
    hasPrevPage: false,
    hasNextPage: false
  },

  setInitialTable: (initialState: IInitialTable<any>) => set((prevState) => {
    const filterFiltersExist = (columnToFilter) => columnToFilter?.filters && columnToFilter?.filters.length

    const filters: ITableFilter[] = initialState.columns.filter(filterFiltersExist).map(filter => {
      const filterOptions = filter.filters.map(filterOption => ({ ...filterOption, selected: false }))
      const toReturn = { ...filter, id: filter.id as string, options: filterOptions }

      delete toReturn.filters

      return toReturn
    })

    const columnsWithQueries = initialState.columns.filter(userColumn => userColumn.isQuery)
    const queries: ITableQuery[] = columnsWithQueries.map(column => ({
      id: column.id as string,
      label: column.label
    }))

    return ({
      ...prevState,
      queries,
      filters,
      data: initialState?.data ?? [],
      columns: initialState?.columns,
      pagination: initialState.pagination,
      onSubmitTable: initialState.onSubmitTable
    })
  }),

  getFilterOptionsSelectedById: (filterId) => {
    const filter = get().filters.find((f) => f.id === filterId)

    if (filter) {
      return filter.options
        .filter((option) => option.selected)
        .map((option) => option.value)
    }

    return []
  },

  getFiltersWithOptionsSelected: () => get().filters
    .map((filter) => ({
      id: filter.id,
      values: filter.options
        .filter((option) => option.selected)
        .map((option) => option.value)
    }))
    .filter((filter) => filter.values.length > 0),

  setShowFilters: (value) => set((prevState) => ({ ...prevState, showFilters: value })),

  selectOptionFilter: (filterId, optionId, optionValue) => set((prevState) => {
    const filterFinded = prevState.filters.map(filter => {
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

    return ({ ...prevState, filters: filterFinded })
  }),

  resetOptionsByFilter: (filterId) => set((prevState) => {
    const filterFinded = prevState.filters.map(filter => {
      if (filter.id === filterId) {
        return {
          ...filter,
          options: filter.options.map(option => ({ ...option, selected: false }))
        }
      }

      return filter
    })

    return ({ ...prevState, filters: filterFinded })
  }),

  resetFilters: () => set((prevState) => {
    const filtersReseted = prevState.filters.map(filter => ({
      ...filter,
      options: filter.options.map(option => ({ ...option, selected: false }))
    }))

    return ({ ...prevState, filters: filtersReseted })
  }),

  updateLimit: (limit) => {
    const { filters, queries, onSubmitTable, pagination: { page } } = get()
    set((prevState) => ({ ...prevState, pagination: { ...prevState.pagination, limit } }))
    onSubmitTable({ filters, queries, limit, page })
  },

  updatePage: (page) => set((prevState) => ({ ...prevState, pagination: { ...prevState.pagination, page } })),
  setPagination: (pagination) => set(prevState => ({ ...prevState, pagination })),
  nextPage: () => {
    set((prevState) => ({
      ...prevState,
      pagination: { ...prevState.pagination, page: prevState.pagination.page + 1 }
    }))

    const { filters, queries, onSubmitTable, pagination: { page, limit } } = get()
    onSubmitTable({ filters, queries, limit, page })
  },

  prevPage: () => {
    set((prevState) => {
      const currentePage = prevState.pagination.page
      const page = currentePage === 1 ? 1 : currentePage - 1

      return {
        ...prevState,
        pagination: { ...prevState.pagination, page }
      }
    })

    const { filters, queries, onSubmitTable, pagination: { page, limit } } = get()

    if (page !== 1) {
      onSubmitTable({ filters, queries, limit, page })
    }
  },

  setColumns: (columns) => set(prevState => ({ ...prevState, columns })),
  setFilters: (filters) => set(prevState => ({ ...prevState, filters })),
  setQueries: (queries) => set(prevState => ({ ...prevState, queries })),
  setData: (data) => set(prevState => ({ ...prevState, data }))
}))

export const TableContext = createContext<ITableContextStore>({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  showFilters: true,
  searchForm: null,
  onSubmitTable: null,
  setSearchForm: () => {},
  setSelectItem: () => {},
  getGlobalFilters: () => { },
  resetOptionsByFilter: () => { },
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: 'Items', single: 'Item' },
    hasPrevPage: false,
    hasNextPage: false
  }
})
