import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui'
import { Table } from '@tanstack/react-table'
import { IconAdjustmentsHorizontal } from '@tabler/icons-react'

interface IDropdownSettingsColumnsProps {
  table: Table<any>
}

export const DropDownSettingsColumns = ({ table }: IDropdownSettingsColumnsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='ml-auto py-5 whitespace-nowrap'>
          <IconAdjustmentsHorizontal className='mr-2 h-4 w-4' />

          Ajustes de Columnas
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>

        <DropdownMenuLabel>Columnas Visibles</DropdownMenuLabel>

        <DropdownMenuSeparator />

        {
          table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className='capitalize'
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              )
            })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
