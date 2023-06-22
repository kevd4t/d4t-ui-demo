import { IconClipboard, IconDots, IconEdit, IconEye, IconEyeOff, IconSortAscending, IconSortDescending, IconUserQuestion } from '@tabler/icons-react'
import { Column, ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown } from 'lucide-react'

import { Badge, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui'
import { useRouter } from 'next/router'
import { IItemToFilter } from '@/lib/types/tables'
import { ISubCategory } from '@/lib/types/subcategories'

export const StatusTypeRowActions = ({ subcategory }: { subcategory: ISubCategory }) => {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Abrir menu</span>
          <IconDots className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => router.push(`/categorias/${subcategory.id}`)}>
          <IconEye className='mr-2 h-4 w-4' />
          Ver Tipo de Estado
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => router.push(`/categorias/${subcategory.id}/editar`)}>
          <IconEdit className='mr-2 h-4 w-4' />
          Editar Tipo de Estado
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(subcategory.id.toString())}>
          <IconClipboard className='h-4 w-4 mr-2' />
          Copiar ID
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const ColumnSort = ({ column, columnLabel }: { column: Column<ISubCategory>, columnLabel: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          { columnLabel }
          <ChevronsUpDown className='ml-2 h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Ordenar</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => column.toggleSorting(true)}
        >
          <IconSortAscending className='mr-2 h-4 w-4' />
          Ascendente
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => column.toggleSorting(false)}
        >
          <IconSortDescending className='mr-2 h-4 w-4' />
          Descendente
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => column.toggleVisibility(false) }>
          <IconEyeOff className='h-4 w-4 mr-2' />
          Ocultar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const statusTypeColumns: ColumnDef<ISubCategory>[] = [
  {
    id: 'ID',
    accessorKey: 'id',
    header: ({ column }) => <ColumnSort column={column} columnLabel='ID' />,
    cell: ({ row: { original } }) => (
      <div className='font-medium pl-6'>
        { original.id }
      </div>
    )
  },
  {
    id: 'Titulo',
    accessorKey: 'title',
    header: 'Titulo',
    cell: ({ row: { original } }) => {
      return <div className='w-full'>{original.title}</div>
    }
  },
  {
    id: 'Descripcion',
    accessorKey: 'description',
    header: ({ column }) => <ColumnSort column={column} columnLabel='Descripcion' />,
    cell: ({ row: { original } }) => {
      return <div className='pl-4 w-full'>{original.description}</div>
    }
  },
  {
    id: 'Estatus',
    accessorKey: 'isActive',
    header: ({ column }) => (
      <div className='w-full text-center'>
        <ColumnSort column={column} columnLabel='Estatus' />
      </div>
    ),
    cell: ({ row: { original } }) => (
      <div className='w-full text-center'>
        <Badge variant={original.isActive ? 'success' : 'red'}>
          {original.isActive ? 'Activo' : 'Bloqueado'}
        </Badge>
      </div>
    ),
    filterFn: (row, id, value) => value.includes(row.getValue(id).toString())
  },
  {
    id: 'Acciones',
    accessorKey: 'actions',
    header: () => <div className='w-full text-right'>Acciones</div>,
    cell: ({ row }) => (
      <div className='w-full text-right'>
        <StatusTypeRowActions subcategory={row.original} />
      </div>
    )
  }
]

export const statusTypeColumnsToFilter: IItemToFilter[] = [
  {
    queryFilterColumnID: 'isActive',
    columnID: 'Estatus',
    label: 'Estatus',
    icon: <IconUserQuestion className='h-4 w-4 mr-2' />,
    options: [
      {
        label: 'Activo',
        value: true
      },
      {
        label: 'Bloqueado',
        value: false
      }
    ]
  }
]
