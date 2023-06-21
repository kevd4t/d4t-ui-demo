import { IconClipboard, IconDots, IconEdit, IconEye, IconEyeOff, IconSortAscending, IconSortDescending } from '@tabler/icons-react'
import { Column, ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown } from 'lucide-react'

import { APP_CONFIG } from '@/config'
import { IUser } from '@/lib/types/users'

import { Badge, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui'
import { TRole } from '@/lib/types'
import { useRouter } from 'next/router'

const { ROLES_DIC: ROLES } = APP_CONFIG

export const UserRowActions = ({ user }: { user: IUser }) => {
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

        <DropdownMenuItem onClick={() => router.push(`/usuarios/${user.id}`)}>
          <IconEye className='mr-2 h-4 w-4' />
          Ver Usuario
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => router.push(`/usuarios/${user.id}/editar`)}>
          <IconEdit className='mr-2 h-4 w-4' />
          Editar Usuario
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>
          <IconClipboard className='h-4 w-4 mr-2' />
          Copiar ID
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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

export const usersColumns: ColumnDef<IUser>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: ({ column }) => <ColumnSort column={column} columnLabel='ID' />,
    cell: ({ row: { original } }) => (
      <div className='font-medium pl-6'>
        { original.id }
      </div>
    )
  },
  {
    id: 'fullName',
    accessorFn: row => ({ name: row.name, lastname: row.lastname }),
    accessorKey: 'fullName',
    header: ({ column }) => <ColumnSort column={column} columnLabel='Usuario' />,
    cell: ({ row: { original } }) => (
      <div className='font-medium pl-6'>
        {`${original.name} ${original.lastname}`}
      </div>
    )
  },
  {
    id: 'ci',
    accessorKey: 'ci',
    header: ({ column }) => <ColumnSort column={column} columnLabel='Cedula' />,
    cell: ({ row }) => {
      const ci = row.getValue('ci') as string
      return <div className='pl-4 w-full'>{ci}</div>
    }
  },
  {
    id: 'phone',
    accessorKey: 'phone',
    header: ({ column }) => <ColumnSort column={column} columnLabel='Telefono' />,
    cell: ({ row }) => {
      const phone = row.getValue('phone') as string
      return <div className='pl-4 w-full'>{phone}</div>
    }
  },
  {
    id: 'role',
    accessorKey: 'role',
    header: ({ column }) => (
      <div className='w-full text-center'>
        <ColumnSort column={column} columnLabel='Rol' />
      </div>
    ),
    cell: ({ row }) => {
      const role = row.getValue('role') as TRole
      return <div className='text-center w-full'><Badge>{ROLES[role].label}</Badge></div>
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id))
  },
  {
    id: 'isActive',
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
    id: 'actions',
    accessorKey: 'actions',
    header: () => <div className='w-full text-right'>Acciones</div>,
    cell: ({ row }) => <div className='w-full text-right'><UserRowActions user={row.original} /></div>
  }
]

export const usersColumnsToFilter = [
  {
    columnID: 'role',
    label: 'Rol',
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
    columnID: 'isActive',
    label: 'Estatus',
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
