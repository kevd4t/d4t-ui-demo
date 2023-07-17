import { IconDots, IconEdit, IconEye, IconEyeOff, IconSortAscending, IconSortDescending, IconX } from '@tabler/icons-react'
import { Column, ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/router'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui'
import { IStatusType } from '@/lib/types/status'
import { Spinner } from '@/components/common/loaders/Spinner'
import { useState } from 'react'
import { useFetch } from '@/lib/hooks/useFetch'
import { toast } from 'sonner'

export const StatusTypeRowActions = ({ statusType }: { statusType: IStatusType }) => {
  const router = useRouter()
  const [, setOpenDetail] = useState(false)
  const [, setOpenEdit] = useState(false)
  const [isOpenAlert, setOpenAlert] = useState(false)
  const { isLoading, error, fetcher } = useFetch()

  const openConfirmBlock = () => setOpenAlert(true)
  const openEdit = () => setOpenEdit(true)
  const openDetail = () => setOpenDetail(true)

  // const handleDialogsOpen = {
  //   edit: actions.edit ? openEdit : null,
  //   detail: actions.detail ? openDetail : null,
  //   delete: actions.delete ? openConfirmBlock : null
  // }

  const handleDialogsOpen = {
    edit: openEdit,
    detail: openDetail,
    delete: openConfirmBlock
  }

  const blockStatus = async () => {
    const data: any = await fetcher(`/api/status-type/${statusType.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`${statusType.title} ha sido bloqueado`)
    setOpenAlert(false)
  }

  return (
    <>
      <AlertDialog open={isOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear este estado?</AlertDialogTitle>
            <AlertDialogDescription>
                Se bloqueara el estado {statusType.title}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction disabled={isLoading} onClick={blockStatus} className='w-[89px]'>
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

          <DropdownMenuItem onClick={() => router.push(`/ajustes/estados/${statusType.id}`)}>
            <IconEye className='mr-2 h-4 w-4' />
            Ver Tipo de Estado
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => router.push(`/ajustes/estados/${statusType.id}/editar`)}>
            <IconEdit className='mr-2 h-4 w-4' />
            Editar Tipo de Estado
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleDialogsOpen.delete}>
            <IconX className='mr-2 h-4 w-4' />
            Bloquear Estado
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export const ColumnSort = ({ column, columnLabel }: { column: Column<IStatusType>, columnLabel: string }) => {
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

export const statusTypeColumns: ColumnDef<IStatusType>[] = [
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
    header: 'Descripcion',
    cell: ({ row: { original } }) => {
      return <div className='pl-4 w-full'>{original.description}</div>
    }
  },
  {
    id: 'Acciones',
    accessorKey: 'actions',
    header: () => <div className='w-full text-right'>Acciones</div>,
    cell: ({ row }) => (
      <div className='w-full text-right'>
        <StatusTypeRowActions statusType={row.original} />
      </div>
    )
  }
]
