import { TableBody as TableBodyUI, TableCell, TableRow } from 'd4t-ui-demo'
import { useTableStore } from './store'
import { TableColumn } from './types'
import { generateUUID } from './utils'

const TableBodyEmpty = ({ colSpan }: { colSpan: number }) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className='h-24 text-center'>
        Sin Resultados
      </TableCell>
    </TableRow>
  )
}

const TableBodyRow = ({ data, columns }: { data: Record<string, string>[], columns: TableColumn<any>[] }) => {
  return (
    <>
      {
        data.map(item => (
          <TableRow key={generateUUID()}>
            {
              columns.map(column => (
                <TableCell key={generateUUID()}>
                  {
                    column?.render
                      ? <div>{column.render(item)}</div>
                      : <>{item[column.id]}</>
                  }
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
  const { data, columns } = useTableStore()

  return (
    <TableBodyUI>
      {
        data.length
          ? <TableBodyRow data={data} columns={columns} />
          : <TableBodyEmpty colSpan={data.length} />
      }
    </TableBodyUI>
  )
}
