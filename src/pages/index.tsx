import { AuthenticatedLayout } from '@/layouts/Authenticated'
import type { ReactElement } from '@/lib/types'

import { DatePickerWithPresets } from '@/components/common/calendars/CalendarDemo'
import { ContextMenuDemo } from '@/components/common/context-menu'

const HomePage = () => {
  return (
    <div className='text-9'>
      <DatePickerWithPresets />
      <ContextMenuDemo />
    </div>
  )
}

HomePage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title='Pagina de Inicio'>
      {page}
    </AuthenticatedLayout>
  )
}

export default HomePage
