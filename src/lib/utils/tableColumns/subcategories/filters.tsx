import { IconStatusChange } from '@tabler/icons-react'
import { IItemToFilter } from '@/lib/types'

export const subcategoryColumnsToFilter: IItemToFilter[] = [
  {
    queryFilterColumnID: 'status',
    columnID: 'Estatus',
    label: 'Estatus',
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
