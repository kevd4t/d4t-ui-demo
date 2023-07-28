/* eslint-disable brace-style */
import { ColumnDef } from '@tanstack/react-table'

import type { IStation, IGetEntityColumnsParams, TColumnActions } from '@/lib/types'

import { StationColumnActions } from './ColumnActions'
import { StationColumnSort } from './ColumnSort'
import { Badge, Checkbox } from '@/components/ui'

const actionsColumn = {
  id: 'Acciones',
  accessorKey: 'actions',
  header: () => <div className='w-full text-right'>Acciones</div>,
  cell: ({ row }) => (
    <div className='w-full text-right'>
      <StationColumnActions station={row.original} />
    </div>
  )
}

const idColumn = {
  id: 'ID',
  accessorKey: 'id',
  header: ({ column }) => <StationColumnSort column={column} columnLabel='ID' />,
  cell: ({ row: { original } }) => (
    <div className='font-medium pl-6'>
      { original.id }
    </div>
  )
}

export const stationColumns: ColumnDef<IStation>[] = [
  {
    id: 'Titulo',
    accessorKey: 'title',
    header: 'Titulo',
    cell: ({ row: { original } }) => {
      return <div className='w-full'>{original.name}</div>
    }
  },
  {
    id: 'Ubicacion',
    accessorKey: 'direction',
    header: 'Ubicacion (latitud, longitud)',
    cell: ({ row: { original } }) => `${original.location.coords.lat}, ${original.location.coords.lng}`
  },
  {
    id: 'Ciudad',
    accessorKey: 'city',
    header: ({ column }) => <StationColumnSort column={column} columnLabel='Ciudad' />,
    cell: ({ row }) => (
      <div className='w-full pl-4'>
        {row.original.location.city}
      </div>
    )
  },
  {
    id: 'Estatus',
    accessorKey: 'status',
    header: ({ column }) => <StationColumnSort column={column} columnLabel='Estatus' />,
    cell: ({ row }) => (
      <div className='text-center w-full'>
        <Badge>{row.original.state}</Badge>
      </div>
    )
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

export const getStationColumns = ({
  selection = false,
  actions = initialActions,
  id = true
}: IGetEntityColumnsParams): ColumnDef<IStation>[] => {
  const stationColumnsAcum: ColumnDef<IStation>[] = []

  if (id && !stationColumnsAcum.includes(idColumn)) {
    stationColumnsAcum.push(idColumn)
  }

  stationColumns.forEach(stationColumn => {
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
            <StationColumnActions
              actions={actions}
              itemIdx={row.index}
              station={row.original}
            />
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
