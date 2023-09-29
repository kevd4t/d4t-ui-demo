import { Dispatch, SetStateAction, useContext } from 'react'
import { IconClick } from '@tabler/icons-react'

import { Button, Checkbox, TableBody as TableBodyUI, TableCell, TableRow } from '../../'
import { generateUUID } from './utils'
import { TableContext } from './store'
import { ITableColumn } from './types'

interface TableBodyRowProps {
  data: Record<string, string>[],
  columns: ITableColumn<any>[],
  setSelectItem: (item) => void
  setMultiItemsSelected: Dispatch<SetStateAction<any[]>>
}

const TableBodyEmpty = ({ colSpan }: { colSpan: number }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className='h-24 text-center'>
        Sin Resultados
      </TableCell>
    </TableRow>
  )
}

const TableBodyRow = ({ data, columns, setSelectItem, setMultiItemsSelected }: TableBodyRowProps) => {
  const renderCell = (column: ITableColumn<any>, item: Record<string, string>) => {
    if (column?.render) {
      return <div>{column.render(item)}</div>
    }

    if (column.id === 'select') {
      return (
        <Button onClick={() => setSelectItem(item)} variant='outline' size='icon' type='button'>
          <IconClick size={18} />
        </Button>
      )
    }

    if (column.id === 'multi-select') {
      return (
        <Checkbox onClick={() => setMultiItemsSelected([item])} checked={true} />
      )
    }

    return <>{item[column.id]}</>
  }

  return (
    <>
      {
        data.map(item => (
          <TableRow key={generateUUID()}>
            {
              columns.map(column => (
                <TableCell key={generateUUID()}>
                  {renderCell(column, item)}
                </TableCell>
              ))
            }
          </TableRow>
        ))
      }
    </>
  )
}

export const TableBody = () => {
  const { data, columns, setSelectItem, setMultiItemsSelected } = useContext(TableContext)

  return (
    <TableBodyUI>
      {
        data.length
          ? <TableBodyRow setMultiItemsSelected={setMultiItemsSelected} setSelectItem={setSelectItem} data={data} columns={columns} />
          : <TableBodyEmpty colSpan={columns.length} />
      }
    </TableBodyUI>
  )
}
