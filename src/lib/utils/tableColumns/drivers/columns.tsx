/* eslint-disable brace-style */
import { ColumnDef } from '@tanstack/react-table'

import { ColumnSortDriver } from './ColumnSort'
import { Badge, Checkbox } from '@/components/ui'
import { IDriver, IGetEntityColumnsParams, TColumnActions } from '@/lib/types'
import { DriverColumnActions } from './ColumnActions'

const idColumn = {
  id: 'ID',
  accessorKey: 'id',
  header: ({ column }) => <ColumnSortDriver column={column} columnLabel='ID' />,
  cell: ({ row: { original } }) => (
    <div className='font-medium pl-6'>
      { original.id }
    </div>
  )
}

export const driverColumns: ColumnDef<IDriver>[] = [
  {
    id: 'Usuario',
    accessorFn: row => ({ name: row.names, lastname: row.surnames }),
    accessorKey: 'fullName',
    header: 'Usuario',
    cell: ({ row: { original } }) => (
      <div className='font-medium'>
        {`${original.names} ${original.surnames}`}
      </div>
    )
  },
  {
    id: 'Cedula de Identidad',
    accessorKey: 'ciNumber',
    accessorFn: (user) => `${user.ci.number}`,
    header: ({ column }) => <ColumnSortDriver column={column} columnLabel='Cedula de Identidad' />,
    cell: ({ row: { original } }) => {
      return <div className='pl-4 w-full'>{`${original.ci.type}-${original.ci.number}`}</div>
    }
  },
  {
    id: 'Telefono',
    accessorKey: 'phone',
    header: ({ column }) => <ColumnSortDriver column={column} columnLabel='Telefono' />,
    cell: ({ row: { original } }) => {
      return <div className='pl-4 w-full'>{original.phone}</div>
    }
  },
  {
    id: 'Estatus',
    accessorKey: 'status',
    header: ({ column }) => <ColumnSortDriver column={column} columnLabel='Estatus' />,
    cell: ({ row: { original } }) => {
      return (
        <Badge className='ml-3'>
          {original.status}
        </Badge>
      )
    }
  }
]

const selectionColumn = {
  id: 'select',
  header: ({ table }) => (
    <Checkbox
      checked={table.getIsAllPageRowsSelected()}
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label='Select all'
    />
  ),
  cell: ({ row, table }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label='Select row'
    />
  ),
  enableSorting: false,
  enableHiding: false
}

const initialActions: TColumnActions = {
  edit: false,
  detail: false,
  create: false,
  delete: false,
  removeLocalItem: null
}

const actionsColumn = {
  id: 'Acciones',
  accessorKey: 'actions',
  header: () => <div className='w-full text-right'>Acciones</div>,
  cell: ({ row }) => (
    <div className='w-full text-right'>
      <DriverColumnActions driver={row.original} />
    </div>
  )
}

export const getDriverColumns = ({
  selection = false,
  actions = initialActions,
  id = true
}: IGetEntityColumnsParams): ColumnDef<IDriver>[] => {
  const stationColumnsAcum: ColumnDef<IDriver>[] = []

  if (id && !stationColumnsAcum.includes(idColumn)) {
    stationColumnsAcum.push(idColumn)
  }

  driverColumns.forEach(stationColumn => {
    stationColumnsAcum.push({ ...stationColumn })
  })

  if (actions && !stationColumnsAcum.includes(actionsColumn)) {
    stationColumnsAcum.push({
      id: 'Acciones',
      accessorKey: 'actions',
      header: () => <div className='w-full text-right'>Acciones</div>,
      cell: ({ row }) => {
        return (
          <div className='w-full text-right'>
            <DriverColumnActions driver={row.original} />
          </div>
        )
      }
    })
  }

  // Mover la columna de selección a la primera posición si existe
  const selectionIndex = stationColumnsAcum.findIndex(column => column === selectionColumn)

  if (selection && selectionIndex === -1) {
    stationColumnsAcum.unshift(selectionColumn)
  } else if (selectionIndex !== -1 && selectionIndex !== 0) {
    stationColumnsAcum.splice(selectionIndex, 1)
    stationColumnsAcum.unshift(selectionColumn)
  }

  return stationColumnsAcum
}
