import { TableHead, TableRow, TableHeader as TablerHeaderUI } from '../..'
import { useContext } from 'react'

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
