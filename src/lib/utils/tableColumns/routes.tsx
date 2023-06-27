import { Badge, Button, Checkbox, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui'
import { IconClipboard, IconDots, IconEdit, IconEye, IconEyeOff, IconSortAscending, IconSortDescending } from '@tabler/icons-react'
import { Column, ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/router'

import { IRoute } from '@/lib/types/routes'

export const RouteRowActions = ({ route }: { route: IRoute }) => {
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

        <DropdownMenuItem onClick={() => router.push(`/monitoreo/rutas/${route.id}`)}>
          <IconEye className='mr-2 h-4 w-4' />
          Ver Ruta
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => router.push(`/monitoreo/rutas/${route.id}/editar`)}>
          <IconEdit className='mr-2 h-4 w-4' />
          Editar Ruta
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(route.id.toString())}>
          <IconClipboard className='h-4 w-4 mr-2' />
          Copiar ID
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const ColumnSort = ({ column, columnLabel }: { column: Column<IRoute>, columnLabel: string }) => {
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

export const routeColumns: ColumnDef<IRoute>[] = [
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
    id: 'Guia',
    accessorKey: 'guide',
    header: 'Guia'
  },
  {
    id: 'Origen',
    accessorKey: 'originStation',
    header: 'Origen'
  },
  {
    id: 'Destino',
    accessorKey: 'finalStation',
    header: 'Destino'
  },
  {
    id: 'GPS',
    accessorKey: 'gpsDevice',
    header: 'GPS (Serial)',
    cell: ({ row: { original } }) => original.gpsDevice.serial
  },
  {
    id: 'Flota',
    accessorKey: 'fleet',
    header: 'Flota',
    cell: ({ row: { original } }) => original.fleet.title
  },
  {
    id: 'Unidad',
    accessorKey: 'truck',
    header: 'Unidad',
    cell: ({ row: { original } }) => original.truck.title
  },
  {
    id: 'Estatus',
    accessorKey: 'status',
    header: ({ column }) => (
      <div className='w-full text-center'>
        <ColumnSort column={column} columnLabel='Estatus' />
      </div>
    ),
    cell: ({ row: { original } }) => (
      <div className='w-full text-center'>
        <Badge>{original.status}</Badge>
      </div>
    ),
    filterFn: (row, id, value) => value.includes(row.getValue(id).toString())
  },
  {
    id: 'Acciones',
    accessorKey: 'actions',
    header: () => <div className='w-full text-right'>Acciones</div>,
    cell: ({ row }) => <div className='w-full text-right'><RouteRowActions route={row.original} /></div>
  }
]
