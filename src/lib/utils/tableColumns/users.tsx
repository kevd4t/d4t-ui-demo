import { IconClipboard, IconDots, IconEdit, IconEye, IconEyeOff, IconSortAscending, IconSortDescending, IconUserOff, IconUserQuestion, IconUserStar } from '@tabler/icons-react'
import { Column, ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'sonner'

import { IItemToFilter } from '@/lib/types/tables'
import { useFetch } from '@/lib/hooks/useFetch'
import { IUser } from '@/lib/types/users'
import { APP_CONFIG } from '@/config'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, Badge, Button, Checkbox, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui'
import { Spinner } from '@/components/common/loaders/Spinner'

const { ROLES_DIC: ROLES } = APP_CONFIG

export const UserRowActions = ({ user }: { user: IUser }) => {
  const [openAlert, setOpenAlert] = useState(false)
  const { isLoading, error, fetcher } = useFetch()
  const router = useRouter()

  const blockUser = async () => {
    const data: any = await fetcher(`/api/users/${user.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`${user.names} ${user.surnames} ha sido bloqueado`)
    setOpenAlert(false)
  }

  return (
    <>
      <AlertDialog open={openAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear este usuario?</AlertDialogTitle>
            <AlertDialogDescription>
                Se bloqueara la cuenta del usuario {user.names} {user.surnames}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction disabled={isLoading} onClick={blockUser} className='w-[89px]'>
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

          <DropdownMenuItem onClick={() => router.push(`/usuarios/${user.id}`)}>
            <IconEye className='mr-2 h-4 w-4' />
            Ver Usuario
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => router.push(`/usuarios/${user.id}/editar`)}>
            <IconEdit className='mr-2 h-4 w-4' />
            Editar Usuario
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOpenAlert(true)}>
            <IconUserOff className='mr-2 h-4 w-4' />
            Bloquear Usuario
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id.toString())}>
            <IconClipboard className='h-4 w-4 mr-2' />
            Copiar ID
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export const ColumnSort = ({ column, columnLabel }: { column: Column<IUser>, columnLabel: string }) => {
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

        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <IconSortAscending className='mr-2 h-4 w-4' />
          Ascendente
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
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

export const usersColumns: ColumnDef<IUser>[] = [
  {
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
  },
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
    id: 'Usuario',
    accessorFn: row => ({ name: row.names, lastname: row.surnames }),
    accessorKey: 'fullName',
    header: 'Usuario',
    cell: ({ row: { original } }) => (
      <div className='font-medium'>
        {`${original.names} ${original.surnames}`}
      </div>
    )
  },
  {
    id: 'Cedula de Identidad',
    accessorKey: 'ciNumber',
    accessorFn: (user) => `${user.ci.number}`,
    header: ({ column }) => <ColumnSort column={column} columnLabel='Cedula de Identidad' />,
    cell: ({ row: { original } }) => {
      return <div className='pl-4 w-full'>{`${original.ci.type}-${original.ci.number}`}</div>
    }
  },
  {
    id: 'Telefono',
    accessorKey: 'phone',
    header: ({ column }) => <ColumnSort column={column} columnLabel='Telefono' />,
    cell: ({ row: { original } }) => {
      return <div className='pl-4 w-full'>{original.phone}</div>
    }
  },
  {
    id: 'Rol',
    accessorKey: 'role',
    header: ({ column }) => (
      <div className='w-full text-center'>
        <ColumnSort column={column} columnLabel='Rol' />
      </div>
    ),
    cell: ({ row: { original } }) => {
      return (
        <div className='text-center w-full'>
          <Badge>{ROLES[original.role].label}</Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id))
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
    cell: ({ row }) => <div className='w-full text-right'><UserRowActions user={row.original} /></div>
  }
]

export const usersColumnsToFilter: IItemToFilter[] = [
  {
    queryFilterColumnID: 'role',
    columnID: 'Rol',
    label: 'Rol',
    icon: <IconUserStar className='h-4 w-4 mr-2' />,
    options: [
      {
        label: 'Operador',
        value: 'OPERATOR'
      },
      {
        label: 'Supervisor',
        value: 'SUPERVISOR'
      },
      {
        label: 'Coordinador',
        value: 'COORDINATOR'
      },
      {
        label: 'Administrador',
        value: 'ADMINISTRATOR'
      }
    ]
  },
  {
    queryFilterColumnID: 'status',
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
