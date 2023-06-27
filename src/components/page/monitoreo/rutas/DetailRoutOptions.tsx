import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui'
import { IconClipboard, IconDotsVertical } from '@tabler/icons-react'
import { IRoute } from '@/lib/types/routes'

export const DetailRoutOptions = ({ route }: { route: IRoute }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <IconDotsVertical className='h-5 mr-2' /> Opciones
        </Button>

      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Opciones</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          Editar Ruta
        </DropdownMenuItem>

        <DropdownMenuItem>
          Another Item
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
