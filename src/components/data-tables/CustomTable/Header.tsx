import { TableHead, TableRow, TableHeader as TablerHeaderUI } from 'd4t-ui-demo'
import { useTableStore } from './store'

export const TableHeader = () => {
  const { columns } = useTableStore()

  return (
    <TablerHeaderUI>
      <TableRow >
        {
          columns.length > 0 && columns.map((column, idx) => (
            <TableHead key={`${column.id}-${idx}`}>{column.label}</TableHead>
          ))
        }
      </TableRow>
    </TablerHeaderUI>
  )
}
