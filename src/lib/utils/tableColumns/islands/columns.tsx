/* eslint-disable brace-style */
import { ColumnDef } from '@tanstack/react-table'

import type { IIsland, IGetEntityColumnsParams, TColumnActions } from '@/lib/types'

import { IslandColumnActions } from './ColumnActions'
import { IslandColumnSort } from './ColumnSort'
import { Badge, Checkbox } from '@/components/ui'

const actionsColumn = {
  id: 'Acciones',
  accessorKey: 'actions',
  header: () => <div className='w-full text-right'>Acciones</div>,
  cell: ({ row }) => (
    <div className='w-full text-right'>
      <IslandColumnActions island={row.original} />
    </div>
  )
}

const idColumn = {
  id: 'ID',
  accessorKey: 'id',
  header: ({ column }) => <IslandColumnSort column={column} columnLabel='ID' />,
  cell: ({ row: { original } }) => (
    <div className='font-medium pl-6'>
      { original.id }
    </div>
  )
}

export const islandColumns: ColumnDef<IIsland>[] = [
  {
    id: 'Estatus',
    accessorKey: 'status',
    header: ({ column }) => <IslandColumnSort column={column} columnLabel='Estatus' />,
    cell: ({ row }) => (
      <div className='text-center w-full'>
        <Badge>{row.original.status}</Badge>
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

export const getIslandColumns = ({
  selection = false,
  actions = initialActions,
  id = true
}: IGetEntityColumnsParams): ColumnDef<IIsland>[] => {
  const islandsColumnsAcum: ColumnDef<IIsland>[] = []

  if (id && !islandsColumnsAcum.includes(idColumn)) {
    islandsColumnsAcum.push(idColumn)
  }

  islandColumns.forEach(islandColumn => {
    islandsColumnsAcum.push({ ...islandColumn })
  })

  if (actions && !islandsColumnsAcum.includes(actionsColumn)) {
    islandsColumnsAcum.push({
      id: 'Acciones',
      accessorKey: 'actions',
      header: () => <div className='w-full text-right'>Acciones</div>,
      cell: ({ row }) => {
        return (
          <div className='w-full text-right'>
            <IslandColumnActions
              actions={actions}
              itemIdx={row.index}
              island={row.original}
            />
          </div>
        )
      }
    })
  }

  // Mover la columna de selección a la primera posición si existe
  const selectionIndex = islandsColumnsAcum.findIndex(column => column === selectionColumn)

  if (selection && selectionIndex === -1) {
    islandsColumnsAcum.unshift(selectionColumn)
  } else if (selectionIndex !== -1 && selectionIndex !== 0) {
    islandsColumnsAcum.splice(selectionIndex, 1)
    islandsColumnsAcum.unshift(selectionColumn)
  }

  return islandsColumnsAcum
}
