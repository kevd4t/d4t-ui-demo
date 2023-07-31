import { IItemToFilter } from '@/lib/types'
import { IconUserQuestion } from '@tabler/icons-react'

export const newStationColumnsToFilter: IItemToFilter[] = [
  {
    queryFilterColumnID: 'type',
    columnID: 'Tipo',
    label: 'Tipo',
    icon: <IconUserQuestion className='h-4 w-4 mr-2' />,
    options: [
      {
        label: 'Bomba',
        value: 'PUMP'
      },
      {
        label: 'Almacenamiento',
        value: 'STOCKAGE'
      }
    ]
  },
  {
    queryFilterColumnID: 'modality',
    columnID: 'Modalidad',
    label: 'Modalidad',
    icon: <IconUserQuestion className='h-4 w-4 mr-2' />,
    options: [
      {
        label: 'Subsidiada',
        value: 'Subsidiada'
      },
      {
        label: 'Integral',
        value: 'Integral'
      },
      {
        label: 'Internacional',
        value: 'Internacional'
      }
    ]
  },
  {
    queryFilterColumnID: 'state',
    columnID: 'Estado',
    label: 'Ubicación',
    icon: <IconUserQuestion className='h-4 w-4 mr-2' />,
    options: [
      {
        label: 'La Guaira',
        value: 'La Guaira'
      },
      {
        label: 'Distrito Capital',
        value: 'Distrito Capital'
      },
      {
        label: 'Miranda',
        value: 'Miranda'
      }
    ]
  },
  {
    queryFilterColumnID: 'state',
    columnID: 'Estatus',
    label: 'Estatus',
    icon: <IconUserQuestion className='h-4 w-4 mr-2' />,
    options: [
      {
        label: 'Operativo',
        value: 'Operativo'
      },
      {
        label: 'En Mantenimiento',
        value: 'En Mantenimiento'
      }
    ]
  }
]
