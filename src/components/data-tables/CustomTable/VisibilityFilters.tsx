import { IconAdjustmentsHorizontal } from '@tabler/icons-react'
import { Button } from 'd4t-ui-demo'
import { useTableStore } from './store'

export const VisibilityFilters = () => {
  const { showFilters, setShowFilters } = useTableStore()

  return (
    <Button
      variant='outline'
      onClick={() => setShowFilters(!showFilters)}
      className='ml-auto py-5 whitespace-nowrap'
    >
      <IconAdjustmentsHorizontal className='mr-2 h-4 w-4' />

      Mostrar Filtros
    </Button>
  )
}
