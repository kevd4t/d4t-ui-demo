import { IconDots, IconEdit, IconEye, IconTrash, IconX } from '@tabler/icons-react'

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui'
import { IStation, TColumnActions } from '@/lib/types'
import Link from 'next/link'

interface ICityColumnActionsProps {
  station: IStation
  actions?: TColumnActions
  itemIdx?: number
  handleDialogsOpen?: {
    detail?: () => void
    edit?: () => void
    create?: () => void
    delete?: () => void
  }
}

export const StationDropdownActions = ({ station, actions, itemIdx, handleDialogsOpen }: ICityColumnActionsProps) => {
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

              <DropdownMenuItem asChild>
                <Link href={`/estaciones/${station.id}/info`}>
                  <IconEye className='mr-2 h-4 w-4' />
                  Ver Estación
                </Link>
              </DropdownMenuItem>
            </>

          )
        }

        {
          actions?.edit && (
            <DropdownMenuItem asChild>
              <Link href={`/estaciones/${station.id}/editar`}>
                <IconEdit className='mr-2 h-4 w-4' />
                Editar Estación
              </Link>
            </DropdownMenuItem>

          )
        }

        {
          actions?.delete && (
            <DropdownMenuItem onClick={handleDialogsOpen.delete}>
              <IconX className='mr-2 h-4 w-4' />
              Bloquear Estación
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
