import { IconClipboard, IconDots, IconEdit, IconEye, IconEyeOff, IconSortAscending, IconSortDescending } from '@tabler/icons-react'
import { Column, ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/router'

import { IMeterDevice } from '@/lib/types'
import { Badge, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Avatar, AvatarImage, AvatarFallback } from '@/components/ui'

export const MeterDeviceRowActions = ({ meterDevice }: { meterDevice: IMeterDevice }) => {
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

        <DropdownMenuItem onClick={() => router.push(`/medidor/${meterDevice.id}`)}>
          <IconEye className='mr-2 h-4 w-4' />
          Ver Medidor
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => router.push(`/medidor/${meterDevice.id}/editar`)}>
          <IconEdit className='mr-2 h-4 w-4' />
          Editar Medidor
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(meterDevice.id.toString())}>
          <IconClipboard className='h-4 w-4 mr-2' />
          Copiar ID
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const ColumnSort = ({ column, columnLabel }: { column: Column<IMeterDevice>, columnLabel: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          { columnLabel }
          <ChevronsUpDown className='h-4 w-4' />
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

export const meterDeviceColumns: ColumnDef<IMeterDevice>[] = [
  {
    id: 'ID',
    accessorKey: 'id',
    header: ({ column }) => <ColumnSort column={column} columnLabel='ID' />,
    cell: ({ row: { original } }) => (
      <div className='font-medium pl-4'>
        { original.id }
      </div>
    )
  },
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
  {
    id: 'Estación',
    accessorKey: 'station',
    header: 'Estación',
    cell: ({ row }) => row.original.station.title
  },
  {
    id: 'Estatus',
    accessorKey: 'status',
    header: ({ column }) => <ColumnSort column={column} columnLabel='Estatus' />,
    cell: ({ row: { original } }) => (
      <Badge className='w-full'>
        {original.status}
      </Badge>
    )
  },
  {
    id: 'Acciones',
    accessorKey: 'actions',
    header: () => <div className='w-full text-right'>Acciones</div>,
    cell: ({ row }) => (
      <div className='w-full text-right'>
        <MeterDeviceRowActions meterDevice={row.original} />
      </div>
    )
  }
]
