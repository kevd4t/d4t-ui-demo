/* eslint-disable brace-style */
import { ColumnDef } from '@tanstack/react-table'

import type { IGetSubcategoryColumnsParams, IState, TColumnActions } from '@/lib/types'

import { StateColumnActions } from './ColumnActions'
import { SubcategoryColumnSort } from './ColumnSort'
import { Checkbox } from '@/components/ui'

const actionsColumn = {
  id: 'Acciones',
  accessorKey: 'actions',
  header: () => <div className='w-full text-right'>Acciones</div>,
  cell: ({ row }) => (
    <div className='w-full text-right'>
      <StateColumnActions state={row.original} />
    </div>
  )
}

const idColumn = {
  id: 'ID',
  accessorKey: 'id',
  header: ({ column }) => <SubcategoryColumnSort column={column} columnLabel='ID' />,
  cell: ({ row: { original } }) => (
    <div className='font-medium pl-6'>
      { original.id }
    </div>
  )
}

export const stateColumns: ColumnDef<IState>[] = [
  {
    id: 'Titulo',
    accessorKey: 'title',
    header: 'Titulo',
    cell: ({ row: { original } }) => {
      return <div className='w-full'>{original.title}</div>
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
  detail: null,
  create: false,
  delete: false,
  removeLocalItem: null
}

export const getStateColumns = ({
  selection = false,
  actions = initialActions,
  id = true
}: IGetSubcategoryColumnsParams): ColumnDef<IState>[] => {
  const stateColumnsAcum: ColumnDef<IState>[] = []

  if (id && !stateColumnsAcum.includes(idColumn)) {
    stateColumnsAcum.push(idColumn)
  }

  stateColumns.forEach(subcategoryColumn => {
    stateColumnsAcum.push({ ...subcategoryColumn })
  })

  if (actions && !stateColumnsAcum.includes(actionsColumn)) {
    stateColumnsAcum.push({
      id: 'Acciones',
      accessorKey: 'actions',
      header: () => <div className='w-full text-right'>Acciones</div>,
      cell: ({ row }) => {
        return (
          <div className='w-full text-right'>
            <StateColumnActions
              actions={actions}
              itemIdx={row.index}
              state={row.original}
            />
          </div>
        )
      }
    })
  }

  // Mover la columna de selección a la primera posición si existe
  const selectionIndex = stateColumnsAcum.findIndex(column => column === selectionColumn)

  if (selection && selectionIndex === -1) {
    stateColumnsAcum.unshift(selectionColumn)
  } else if (selectionIndex !== -1 && selectionIndex !== 0) {
    stateColumnsAcum.splice(selectionIndex, 1)
    stateColumnsAcum.unshift(selectionColumn)
  }

  return stateColumnsAcum
}
