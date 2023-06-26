import { ColumnDef, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'

import { IItemToFilter, IPaginationProps, ISelection, ITableInputSearchProps } from '@/lib/types'

import { Table as TableUI } from '@/components/ui/table'
import { TablePagination } from './TablePagination'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'
import { TableFetchingData } from './TableFetchingData'
import { TableFethingError } from './TableFethingError'
import { useMemo } from 'react'
import { TableToolbar } from './TableToolbar'
import { SettingsColumns } from './SettingsColumns'

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

  const table = useReactTable({
    columns,
    data: data ?? defaultData,
    getCoreRowModel: getCoreRowModel(),
    state: { rowSelection: selection.rowSelection, pagination: paginationMemo },
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: pagination.setPagination,
    manualPagination: true,
    enableRowSelection: true,
    onRowSelectionChange: selection.setRowSelection
  })

  return (
    <div className='space-y-4'>
      <div className='w-full flex flex-wrap justify-between items-center gap-y-2'>
        <TableToolbar
          inputSearch={inputSearch}
          itemsToFilter={itemsToFilter}
          isFetching={queryInfo.isFetching}
          table={table}
        />

        { visibilityColumns && <SettingsColumns table={table} /> }
      </div>

      <div className='rounded-md border'>
        { queryInfo.isFetching && <TableFetchingData /> }
        { (!queryInfo.isFetching && queryInfo.error) && <TableFethingError /> }

        {
          (!queryInfo.isFetching && !queryInfo.error && data) && (
            <TableUI>
              <TableHeader table={table} />
              <TableBody table={table} columns={columns} />
            </TableUI>
          )
        }
      </div>

      <TablePagination pagination={pagination} table={table} />
    </div>
  )
}
