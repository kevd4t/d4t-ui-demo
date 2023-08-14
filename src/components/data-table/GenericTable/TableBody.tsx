import { TableCell, TableRow, TableBody as TableBodyUI } from '../../'
import { ColumnDef, Table, flexRender } from '@tanstack/react-table'

interface TableBodyProps<TData, TValue> {
  table: Table<any>
  columns: ColumnDef<TData, TValue>[]
}

export function TableBody<TData, TValue> ({ table, columns }: TableBodyProps<TData, TValue>) {
  return (
    <TableBodyUI>
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
    </TableBodyUI>
  )
}
