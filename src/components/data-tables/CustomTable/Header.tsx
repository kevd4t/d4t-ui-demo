import { useContext } from 'react'

import { TableHead, TableRow, TableHeader as TablerHeaderUI } from '../../table'
import { TableContext } from './store'

export const TableHeader = () => {
  const { columns } = useContext(TableContext)

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
