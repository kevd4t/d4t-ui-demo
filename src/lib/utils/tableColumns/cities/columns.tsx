/* eslint-disable brace-style */
import { ColumnDef } from '@tanstack/react-table'

import type { ICity, IGetSubcategoryColumnsParams, TColumnActions } from '@/lib/types'

import { CityColumnActions } from './ColumnActions'
import { CityColumnSort } from './ColumnSort'
import { Checkbox } from '@/components/ui'

const actionsColumn = {
  id: 'Acciones',
  accessorKey: 'actions',
  header: () => <div className='w-full text-right'>Acciones</div>,
  cell: ({ row }) => (
    <div className='w-full text-right'>
      <CityColumnActions city={row.original} />
    </div>
  )
}

const idColumn = {
  id: 'ID',
  accessorKey: 'id',
  header: ({ column }) => <CityColumnSort column={column} columnLabel='ID' />,
  cell: ({ row: { original } }) => (
    <div className='font-medium pl-6'>
      { original.id }
    </div>
  )
}

export const cityColumns: ColumnDef<ICity>[] = [
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

export const getCityColumns = ({
  selection = false,
  actions = initialActions,
  id = true
}: IGetSubcategoryColumnsParams): ColumnDef<ICity>[] => {
  const cityColumnsAcum: ColumnDef<ICity>[] = []

  if (id && !cityColumnsAcum.includes(idColumn)) {
    cityColumnsAcum.push(idColumn)
  }

  cityColumns.forEach(subcategoryColumn => {
    cityColumnsAcum.push({ ...subcategoryColumn })
  })

  if (actions && !cityColumnsAcum.includes(actionsColumn)) {
    cityColumnsAcum.push({
      id: 'Acciones',
      accessorKey: 'actions',
      header: () => <div className='w-full text-right'>Acciones</div>,
      cell: ({ row }) => {
        return (
          <div className='w-full text-right'>
            <CityColumnActions
              actions={actions}
              itemIdx={row.index}
              city={row.original}
            />
          </div>
        )
      }
    })
  }

  // Mover la columna de selección a la primera posición si existe
  const selectionIndex = cityColumnsAcum.findIndex(column => column === selectionColumn)

  if (selection && selectionIndex === -1) {
    cityColumnsAcum.unshift(selectionColumn)
  } else if (selectionIndex !== -1 && selectionIndex !== 0) {
    cityColumnsAcum.splice(selectionIndex, 1)
    cityColumnsAcum.unshift(selectionColumn)
  }

  return cityColumnsAcum
}
