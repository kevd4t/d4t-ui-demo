import { Table, flexRender } from '@tanstack/react-table'
import { TableHead, TableHeader as TableHeaderUI, TableRow } from '@/components/ui/table'

interface TableHeaderProps {
  table: Table<any>
}

export const TableHeader = ({ table }: TableHeaderProps) => {
  return (
    <TableHeaderUI>
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
    </TableHeaderUI>
  )
}
