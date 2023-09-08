import type { TablePagination as ITablePagination, TableColumn, TableSubmit } from './types'
import { useTableStore } from './store'

import { TablePagination } from './Pagination'
import { TableContent } from './Content'
import { TableLoading } from './Loading'
import { TableError } from './Error'
import { TableEmpty } from './Empty'
import { useEffect } from 'react'
import { TableSearch } from './Search'

interface CustomTableProps<DataSchema> {
  data: DataSchema[] | []
  pagination: ITablePagination
  columns: TableColumn<DataSchema>[]
  loading: boolean
  error: boolean
  onSubmitTable: TableSubmit
}

export function CustomTable<DataSchema>({ data, onSubmitTable, pagination, columns, loading, error }: CustomTableProps<DataSchema>) {
  const initialTable: any = { data, columns, pagination, onSubmitTable } // TODO TYPE
  const { setInitialTable } = useTableStore()

  useEffect(() => {
    setInitialTable(initialTable)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, columns, pagination])

  return (
    <div className='w-full h-fit space-y-4'>
      {(!loading && !error && data) && <TableSearch onSubmitTable={onSubmitTable} loading={loading} />}

      <div className='rounded-md border'>
        {loading && <TableLoading />}
        {(!loading && error) && <TableError />}
        {(!loading && !error && !data) && <TableEmpty />}
        {(!loading && !error && data) && <TableContent />}
      </div>

      {(!loading && !error && data) && <TablePagination />}
    </div>
  )
}
