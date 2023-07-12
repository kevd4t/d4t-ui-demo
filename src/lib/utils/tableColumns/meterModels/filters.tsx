import { IconStatusChange } from '@tabler/icons-react'
import { IItemToFilter } from '@/lib/types'

export const meterModelColumnsToFilter: IItemToFilter[] = [
  {
    queryFilterColumnID: 'isActive',
    columnID: 'Estado',
    label: 'Estado',
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
