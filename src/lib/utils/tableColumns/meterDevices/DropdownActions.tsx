import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui'
import { IMeterDevice, TColumnActions } from '@/lib/types'
import { IconDots, IconEdit, IconEye, IconTrash, IconX } from '@tabler/icons-react'

interface IDropdownActionsProps {
  meterDevice: IMeterDevice
  actions?: TColumnActions
  itemIdx?: number
  handleDialogsOpen?: {
    detail?: () => void
    edit?: () => void
    create?: () => void
    delete?: () => void
  }
}

export const MeterDeviceDropdownActions = ({ actions, itemIdx, handleDialogsOpen, meterDevice }: IDropdownActionsProps) => {
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

        {
          actions?.detail && (
            <>
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={handleDialogsOpen.detail}>
                <IconEye className='mr-2 h-4 w-4' />
                Ver Medidor
              </DropdownMenuItem>
            </>

          )
        }

        {
          actions?.edit && (
            <DropdownMenuItem onClick={handleDialogsOpen.edit}>
              <IconEdit className='mr-2 h-4 w-4' />
              Editar Medidor
            </DropdownMenuItem>

          )
        }

        {
          actions?.delete && (
            <DropdownMenuItem onClick={handleDialogsOpen.delete}>
              <IconX className='mr-2 h-4 w-4' />
              Bloquear Medidor
            </DropdownMenuItem>
          )
        }

        {
          actions?.removeLocalItem && (
            <>
              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => actions.removeLocalItem(itemIdx)}>
                <IconTrash className='h-4 w-4 mr-2' />
                Remover
              </DropdownMenuItem>
            </>
          )
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
