import { Dispatch, SetStateAction } from 'react'
import { IconSearch } from '@tabler/icons-react'
import { Table } from '@tanstack/react-table'
import { useForm } from 'react-hook-form'
import { X } from 'lucide-react'

import { IItemToFilter, ITableSearchInput } from '@/lib/types/tables'

import { DataTableFacetedFilter } from './DataTableFacetedFilter'
import { Button } from '@/components/ui/button'
import { InputUI } from '@/components/ui'
import { useTableStore } from '@/lib/store/table'
import { Spinner } from '../loaders/Spinner'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  itemsToFilter: IItemToFilter[]
  inputSearch?: ITableSearchInput
  setSearch?: Dispatch<SetStateAction<string>>
  setFilters?: Dispatch<SetStateAction<any>>
  isFetching: boolean
}

interface ISearchData {
  search: string
}

export function DataTableToolbar<TData> ({ table, itemsToFilter, inputSearch = null, setSearch, setFilters, isFetching }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getPreFilteredRowModel().rows.length > table.getFilteredRowModel().rows.length
  const { handleSubmit, register } = useForm<ISearchData>()
  const { filters } = useTableStore()

  const onSubmit = async ({ search }: ISearchData) => {
    setSearch(search)
    setFilters(filters)
  }

  return (
    <div className='w-auto flex items-center justify-between'>
      <div className='w-full flex flex-wrap items-center gap-x-2 gap-y-2'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex justify-start items-center mr-4'>
          <InputUI
            {...register('search')}
            className='py-2 w-[150px] lg:w-[250px] max-w-xs mr-3'
            placeholder={inputSearch?.placeholder ?? ''}
            type='text'
            disabled={isFetching}
          />

          <Button disabled={isFetching}>
            {
              isFetching
                ? <Spinner />
                : <IconSearch className='dark:border-white h-5 w-5' />
            }
          </Button>
        </form>

        <div className='w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center'>
          {
            itemsToFilter &&
              itemsToFilter.map(item => {
                return table.getColumn(item.columnID) && (
                  <DataTableFacetedFilter
                    table={table}
                    key={item.columnID}
                    queryFilterColumnID={item.queryFilterColumnID}
                    column={table.getColumn(item.columnID)}
                    title={item.label}
                    options={item.options}
                    icon={item.icon}
                  />
                )
              })
          }

          {
            isFiltered && (
              <Button
                variant='ghost'
                onClick={() => table.resetColumnFilters()}
                className='px-2 py-5 lg:px-3 ml-0 lg:ml-auto'
              >
                Limpiar Filtros
                <X className='ml-2 h-4 w-4' />
              </Button>
            )
          }
        </div>
      </div>
    </div>
  )
}
