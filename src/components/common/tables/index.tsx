import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
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

import { ITablePaginationlabel, IItemToFilter, ITableSearchInput, ITableQuery, ITableQueryData } from '@/lib/types/tables'
import { LoaderDots } from '@/components/common/loaders/DynamicDots'
import { DropDownSettingsColumns } from './DropdownSettingsColumns'
// import { DataTablePagination } from './DataTablePagination'
import { DataTableToolbar } from './DataTableToolbar'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
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
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState({})
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<any>(null)

  const fetchDataOptions = { pageIndex, pageSize, search, filters }

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
    columns,
    data: data?.results ?? defaultData,
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

  return (
    <div className='space-y-4'>
      <div className='w-full flex flex-wrap justify-between items-center gap-y-2'>
        <DataTableToolbar
          setFilters={setFilters}
          setSearch={setSearch}
          inputSearch={inputSearch}
          table={table}
          itemsToFilter={itemsToFilter}
          isFetching={isFetching}
        />

        { visibilityColumns && <DropDownSettingsColumns table={table} /> }
      </div>

      <div className='rounded-md border'>
        {
          isFetching && (
            <div className='w-full h-full flex flex-col justify-center items-center py-24'>
              <LoaderDots />

              <h6 className='font-semibold'>Cargando...</h6>
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
                          Sin Resultados
                        </TableCell>
                      </TableRow>
                    )
                }
              </TableBody>
            </Table>
          )
        }
      </div>

      {/* <DataTablePagination labelPagination={labelPagination} table={table} /> */}
    </div>
  )
}
