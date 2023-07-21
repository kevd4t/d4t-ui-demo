import { ColumnDef } from '@tanstack/react-table'

import type { IGetEntityColumnsParams, IMeterDevice, TColumnActions } from '@/lib/types'

import { MeterDeviceColumnActions } from './ColumnActions'
import { ColumnSortMeterDevice } from './ColumnSort'
import { Avatar, AvatarFallback, AvatarImage, Badge, Checkbox } from '@/components/ui'

const actionsColumn = {
  id: 'Acciones',
  accessorKey: 'actions',
  header: () => <div className='w-full text-right'>Acciones</div>,
  cell: ({ row }) => (
    <div className='w-full text-right'>
      <MeterDeviceColumnActions meterDevice={row.original} />
    </div>
  )
}

const idColumn = {
  id: 'ID',
  accessorKey: 'id',
  header: ({ column }) => <ColumnSortMeterDevice column={column} columnLabel='ID' />,
  cell: ({ row: { original } }) => (
    <div className='font-medium pl-6'>
      { original.id }
    </div>
  )
}

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

export const meterDeviceColumns: ColumnDef<IMeterDevice>[] = [
  {
    id: 'Imagen',
    accessorKey: 'image',
    header: 'Titulo',
    cell: ({ row: { original } }) => (
      <Avatar>
        <AvatarImage src={original.images[0]} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  },
  {
    id: 'Serial',
    accessorKey: 'serial',
    header: 'Serial'
  },
  {
    id: 'Modelo',
    accessorKey: 'gpsModel',
    header: 'Modelo',
    cell: ({ row }) => row.original.meterModel.title
  },
  {
    id: 'Unidad de Medición',
    accessorKey: 'meterUnit',
    header: 'Unidad de Medición',
    cell: ({ row }) => row.original.meterUnit
  },
  // {
  //   id: 'Estación',
  //   accessorKey: 'station',
  //   header: 'Estación',
  //   cell: ({ row }) => row.original.station.title
  // },
  {
    id: 'Estatus',
    accessorKey: 'status',
    header: ({ column }) => <ColumnSortMeterDevice column={column} columnLabel='Estatus' />,
    cell: ({ row: { original } }) => (
      <Badge className='w-full'>
        {original.status}
      </Badge>
    )
  }
]

const initialActions: TColumnActions = {
  edit: false,
  detail: false,
  create: false,
  delete: false,
  removeLocalItem: null
}

export const getMeterDeviceColumns = ({
  selection = false,
  actions = initialActions,
  id = true
}: IGetEntityColumnsParams): ColumnDef<IMeterDevice>[] => {
  const meterDeviceColumnsAcum: ColumnDef<IMeterDevice>[] = []

  if (id && !meterDeviceColumnsAcum.includes(idColumn)) {
    meterDeviceColumnsAcum.push(idColumn)
  }

  meterDeviceColumns.forEach(meterDevice => meterDeviceColumnsAcum.push({ ...meterDevice }))

  if (
    (actions?.create || actions?.delete || actions?.detail || actions?.edit || actions?.removeLocalItem) &&
    !meterDeviceColumnsAcum.includes(actionsColumn)
  ) {
    meterDeviceColumnsAcum.push({
      id: 'Acciones',
      accessorKey: 'actions',
      header: () => <div className='w-full text-right'>Acciones</div>,
      cell: ({ row }) => {
        return (
          <div className='w-full text-right'>
            <MeterDeviceColumnActions
              actions={actions}
              itemIdx={row.index}
              meterDevice={row.original}
            />
          </div>
        )
      }
    })
  }

  // Mover la columna de selección a la primera posición si existe
  const selectionIndex = meterDeviceColumnsAcum.findIndex(column => column === selectionColumn)

  if (selection && selectionIndex === -1) {
    meterDeviceColumnsAcum.unshift(selectionColumn)
  } else if (selectionIndex !== -1 && selectionIndex !== 0) {
    meterDeviceColumnsAcum.splice(selectionIndex, 1)
    meterDeviceColumnsAcum.unshift(selectionColumn)
  }

  return meterDeviceColumnsAcum
}
