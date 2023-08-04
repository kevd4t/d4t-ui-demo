import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui'
import { IconDots, IconEdit, IconEye, IconUserOff } from '@tabler/icons-react'

interface IDropdownActionsProps {
  openViewModel: () => void
  openEditModal: () => void
  openAlert: () => void
}

export const DropdownActions = ({ openViewModel, openAlert, openEditModal }: IDropdownActionsProps) => {
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

        <DropdownMenuItem onClick={openViewModel}>
          <IconEye className='mr-2 h-4 w-4' />
          Ver Chofer
        </DropdownMenuItem>

        <DropdownMenuItem onClick={openEditModal}>
          <IconEdit className='mr-2 h-4 w-4' />
          Editar Chofer
        </DropdownMenuItem>

        <DropdownMenuItem onClick={openAlert}>
          <IconUserOff className='mr-2 h-4 w-4' />
          Bloquear Chofer
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
