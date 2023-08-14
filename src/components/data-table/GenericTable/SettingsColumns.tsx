import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../'
import { SlidersHorizontal } from 'lucide-react'
import { Table } from '@tanstack/react-table'

import { Button } from '../../'

interface IDropdownSettingsColumnsProps {
  table: Table<any>
}

export const SettingsColumns = ({ table }: IDropdownSettingsColumnsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='ml-auto py-5 whitespace-nowrap'>
          <SlidersHorizontal className='mr-2 h-4 w-4' />

          Columnas
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
