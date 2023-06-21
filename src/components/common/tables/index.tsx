import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import { DataTablePagination } from './DataTablePagination'
import { DataTableToolbar } from './DataTableToolbar'
import { DropDownSettingsColumns } from './DropdownSettingsColumns'
import { useMemo, useState } from 'react'
import { ITablePaginationlabel, IItemToFilter, ITableSearchInput, ITableQuery, ITableQueryData } from '@/lib/types/tables'
import { useQuery } from '@tanstack/react-query'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  // data: TData[]
  visibilityColumns?: boolean,
  itemsToFilter?: IItemToFilter[]
  labelPagination: ITablePaginationlabel
  inputSearch?: ITableSearchInput
  query: ITableQuery
}

export function DataTable<TData, TValue> ({
  columns,
  query,
  visibilityColumns,
  itemsToFilter,
  labelPagination,
  inputSearch = null
}: DataTableProps<TData, TValue>) {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 10 })
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState({})
  const [search, setSearch] = useState('')

  const fetchDataOptions = { pageIndex, pageSize, search, ...query.queryParams }

  const { data, error, isFetching } = useQuery<ITableQueryData>({
    queryKey: [query.queryKey, fetchDataOptions],
    queryFn: query.queryFn(fetchDataOptions),
    refetchOnWindowFocus: false
  })

  const defaultData = useMemo(() => [], [])

  const pagination = useMemo(
    () => ({ pageIndex, pageSize }),
    [pageIndex, pageSize]
  )

  const table = useReactTable({
    data: data?.results ?? defaultData,
    columns,
    pageCount: data?.info?.pageCount ?? -1,
    state: { sorting, columnVisibility, rowSelection, columnFilters, pagination },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onPaginationChange: setPagination,
    manualPagination: true
  })

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>!data</div>

  return (
    <div className='space-y-4'>
      <div className='w-full flex justify-between items-center'>
        <DataTableToolbar
          setSearch={setSearch}
          inputSearch={inputSearch}
          table={table}
          itemsToFilter={itemsToFilter}
        />

        { visibilityColumns && <DropDownSettingsColumns table={table} /> }
      </div>

      <div className='rounded-md border'>
        {
          isFetching && (
            <div>
              Is Fetching...
            </div>
          )
        }

        {
          (!isFetching && error) && (
            <div>
              Error to load data
            </div>
          )
        }

        {
          (!isFetching && data) && (
            <Table>
              <TableHeader>
                {
                  table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {
                        headerGroup.headers.map((header) => {
                          return (
                            <TableHead key={header.id}>
                              {
                                header.isPlaceholder
                                  ? null
                                  : flexRender(header.column.columnDef.header, header.getContext())
                              }
                            </TableHead>
                          )
                        })
                      }
                    </TableRow>
                  ))
                }
              </TableHeader>

              <TableBody>
                {
                  table.getRowModel().rows?.length
                    ? (
                      table.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && 'selected'}
                        >
                          {
                            row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                              </TableCell>
                            ))
                          }
                        </TableRow>
                      ))
                    )
                    : (
                      <TableRow>
                        <TableCell colSpan={columns.length} className='h-24 text-center'>
                          No results.
                        </TableCell>
                      </TableRow>
                    )
                }
              </TableBody>
            </Table>
          )
        }
      </div>

      <DataTablePagination labelPagination={labelPagination} table={table} />
    </div>
  )
}
