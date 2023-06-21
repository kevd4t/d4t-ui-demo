'use client'

import { Table } from '@tanstack/react-table'
import { X } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { DataTableFacetedFilter } from './DataTableFacetedFilter'
import { IItemToFilter, ITableSearchInput } from '@/lib/types/tables'
import { InputUI } from '@/components/ui'
import { useForm } from 'react-hook-form'
import { IconSearch } from '@tabler/icons-react'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  itemsToFilter: IItemToFilter[]
  inputSearch?: ITableSearchInput
}

interface ISearchData {
  search: string
}

export function DataTableToolbar<TData> ({ table, itemsToFilter, inputSearch = null }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getPreFilteredRowModel().rows.length > table.getFilteredRowModel().rows.length
  const { handleSubmit, register } = useForm<ISearchData>()

  const onSubmit = (data: ISearchData) => {
    console.log({ data })
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        {
          inputSearch && (
            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-start items-center mr-4'>
              <InputUI
                {...register('search')}
                className='py-2 w-[150px] lg:w-[250px] mr-3'
                placeholder={inputSearch.placeholder}
                type='text'
                // value={(table.getColumn('ID')?.getFilterValue() as string) ?? ''}
                // onChange={(event) =>
                //   table.getColumn('ID')?.setFilterValue(event.target.value)
                // }
              />

              <Button>
                <IconSearch className='h-5 w-5' />
              </Button>
            </form>
          )
        }

        {
          itemsToFilter.map(item => {
            return table.getColumn(item.columnID) && (
              <DataTableFacetedFilter
                key={item.columnID}
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
              className='h-8 px-2 py-2 lg:px-3'
            >
              Limpiar Filtros
              <X className='ml-2 h-4 w-4' />
            </Button>
          )
        }
      </div>
    </div>
  )
}
