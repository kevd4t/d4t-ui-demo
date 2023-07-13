import { IconAdOff, IconClipboard, IconDots, IconEdit, IconEye, IconEyeOff, IconFidgetSpinner, IconSortAscending, IconSortDescending, IconStatusChange } from '@tabler/icons-react'
import { Column, ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/router'

import { IItemToFilter, IGPSMark } from '@/lib/types'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, Badge, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui'
import { useFetch } from '@/lib/hooks/useFetch'
import { useState } from 'react'
import { toast } from 'sonner'

export const GpsMarkRowActions = ({ gpsMark }: { gpsMark: IGPSMark }) => {
  const [openAlert, setOpenAlert] = useState(false)
  const { isLoading, error, fetcher } = useFetch()
  const router = useRouter()

  const blockGpsMark = async () => {
    const data: any = await fetcher(`/api/gps-mark/${gpsMark.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`${gpsMark.title} ha sido bloqueado`)
    setOpenAlert(false)
  }

  return (
    <>
      <AlertDialog open={openAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear este usuario?</AlertDialogTitle>

            <AlertDialogDescription>
                Se bloqueara la unidad {gpsMark.title}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction disabled={isLoading} onClick={blockGpsMark} className='w-[89px]'>
              { isLoading ? <IconFidgetSpinner /> : 'Bloquear' }
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

          <DropdownMenuItem onClick={() => router.push(`/ajustes/marcas-de-gps/${gpsMark.id}`)}>
            <IconEye className='mr-2 h-4 w-4' />
            Ver Marca de GPS
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => router.push(`/ajustes/marcas-de-gps/${gpsMark.id}/editar`)}>
            <IconEdit className='mr-2 h-4 w-4' />
            Editar Marca de GPS
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOpenAlert(true)}>
            <IconAdOff className='mr-2 h-4 w-4' />
            Bloquear Marca de GPS
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(gpsMark.id.toString())}>
            <IconClipboard className='h-4 w-4 mr-2' />
            Copiar ID
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export const ColumnSort = ({ column, columnLabel }: { column: Column<IGPSMark>, columnLabel: string }) => {
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

export const gpsMarkColumns: ColumnDef<IGPSMark>[] = [
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
    header: 'Descripcion'
  },
  {
    id: 'Estado',
    accessorKey: 'isActive',
    header: ({ column }) => <ColumnSort column={column} columnLabel='Estado' />,
    cell: ({ row: { original } }) => {
      return (
        <Badge className='ml-3' variant={original.isActive ? 'success' : 'red'}>
          {original.isActive ? 'Activo' : 'Bloqueado'}
        </Badge>
      )
    }
  },
  {
    id: 'Acciones',
    accessorKey: 'actions',
    header: () => <div className='w-full text-right'>Acciones</div>,
    cell: ({ row }) => (
      <div className='w-full text-right'>
        <GpsMarkRowActions gpsMark={row.original} />
      </div>
    )
  }
]

export const gpsMarkColumnsToFilter: IItemToFilter[] = [
  {
    queryFilterColumnID: 'isActive',
    columnID: 'Estado',
    label: 'Estado',
    icon: <IconStatusChange className='h-4 w-4 mr-2' />,
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
