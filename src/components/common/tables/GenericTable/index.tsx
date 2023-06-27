import { ColumnDef, TableState, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { useMemo } from 'react'

import { IItemToFilter, IPaginationProps, ISelection, ITableInputSearchProps } from '@/lib/types'

import { EmptyBoxIllustration } from '@/components/common/illustrations/EmptyBox'
import { TableFetchingData } from './TableFetchingData'
import { TableFethingError } from './TableFethingError'
import { TablePagination } from './TablePagination'
import { SettingsColumns } from './SettingsColumns'
import { TableUI } from '@/components/ui/table'
import { TableToolbar } from './TableToolbar'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pagination: IPaginationProps
  queryInfo: { isFetching: boolean, error: any }
  selection?: ISelection
  visibilityColumns?: boolean
  inputSearch?: ITableInputSearchProps
  itemsToFilter?: IItemToFilter[]
}

export function Table<TData, TValue> ({
  data,
  columns,
  pagination,
  queryInfo,
  selection,
  itemsToFilter,
  inputSearch,
  visibilityColumns
}: DataTableProps<TData, TValue>) {
  const defaultData = useMemo(() => [], [])
  const paginationMemo = useMemo(
    () => ({ pageIndex: pagination.pageIndex, pageSize: pagination.pageSize }),
    [pagination.pageIndex, pagination.pageSize]
  )

  const stateWithRowSelections = { rowSelection: selection?.rowSelection, pagination: paginationMemo }

  const state: Partial<TableState> = selection ? stateWithRowSelections : { pagination: paginationMemo }

  const table = useReactTable({
    state,
    columns,
    data: data ?? defaultData,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: pagination.setPagination,
    manualPagination: true,
    enableRowSelection: Boolean(selection),
    onRowSelectionChange: selection?.setRowSelection || null
  })

  return (
    <div className='space-y-4'>
      <div className='w-full flex flex-wrap justify-between items-center gap-y-2'>
        {
          (inputSearch) && (
            <TableToolbar
              inputSearch={inputSearch}
              itemsToFilter={itemsToFilter}
              isFetching={queryInfo.isFetching}
              table={table}
            />
          )
        }

        { visibilityColumns && <SettingsColumns table={table} /> }
      </div>

      <div className='rounded-md border'>
        { queryInfo.isFetching && <TableFetchingData /> }
        { (!queryInfo.isFetching && queryInfo.error) && <TableFethingError /> }

        {
          (!queryInfo.isFetching && !queryInfo.error && !data) && (
            <div className='w-full flex flex-col items-center justify-center py-8'>
              <EmptyBoxIllustration />
              <div className='-mt-3'>
                <span>Sin Resultados</span>
              </div>
            </div>
          )
        }

        {
          (!queryInfo.isFetching && !queryInfo.error && data) && (
            <TableUI>
              <TableHeader table={table} />
              <TableBody table={table} columns={columns} />
            </TableUI>
          )
        }
      </div>

      {
        (!queryInfo.isFetching && !queryInfo.error && data) && (
          <TablePagination rowsToSelect={Boolean(selection)} pagination={pagination} table={table} />
        )
      }
    </div>
  )
}
