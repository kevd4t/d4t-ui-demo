import { IconDots, IconEdit, IconEye, IconEyeOff, IconSortAscending, IconSortDescending, IconX } from '@tabler/icons-react'
import { Column, ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'sonner'

import { useFetch } from '@/lib/hooks/useFetch'
import { IGPSDevice } from '@/lib/types'

import { Badge, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Avatar, AvatarImage, AvatarFallback, AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui'
import { Spinner } from '@/components/common/loaders/Spinner'

export const GpsDeviceRowActions = ({ gpsDevice }: { gpsDevice: IGPSDevice }) => {
  const router = useRouter()
  const [isOpenAlert, setOpenAlert] = useState(false)
  const { isLoading, error, fetcher } = useFetch()

  const blockGpsDevice = async () => {
    const data: any = await fetcher(`/api/gps-devices/${gpsDevice.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`Dispositivo ${gpsDevice.serial} ha sido bloqueado`)
    setOpenAlert(false)
  }
  return (
    <>
      <AlertDialog open={isOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear este dispositivo?</AlertDialogTitle>
            <AlertDialogDescription>
                Se bloqueara el dispositivo {gpsDevice.serial}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction disabled={isLoading} onClick={blockGpsDevice} className='w-[89px]'>
              { isLoading ? <Spinner /> : 'Bloquear' }
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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

          <DropdownMenuItem onClick={() => router.push(`/ajustes/dispositivos-gps/${gpsDevice.id}`)}>
            <IconEye className='mr-2 h-4 w-4' />
            Ver Dispositivo
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => router.push(`/ajustes/dispositivos-gps/${gpsDevice.id}/editar`)}>
            <IconEdit className='mr-2 h-4 w-4' />
            Editar Dispositivo
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOpenAlert(true)}>
            <IconX className='mr-2 h-4 w-4' />
            Bloquear Modelo
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export const ColumnSort = ({ column, columnLabel }: { column: Column<IGPSDevice>, columnLabel: string }) => {
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

export const gpsDeviceColumns: ColumnDef<IGPSDevice>[] = [
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
        <AvatarImage src='https://github.com/shadcn.png' />
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
    cell: ({ row }) => row.original.gpsModel.title
  },
  {
    id: 'Flota',
    accessorKey: 'fleet',
    header: 'Flota',
    cell: ({ row }) => row.original.fleet.title
  },
  {
    id: 'Unidad',
    accessorKey: 'truck',
    header: 'Unidad',
    cell: ({ row }) => row.original.truck.title
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
        <GpsDeviceRowActions gpsDevice={row.original} />
      </div>
    )
  }
]
