import { TableUI } from '../..'

import { TableHeader } from './Header'
import { TableBody } from './Body'

export const TableEmpty = () => {
  return (
    <TableUI>
      <TableHeader />
      <TableBody />
    </TableUI>
  )
}
