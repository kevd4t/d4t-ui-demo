import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { FormCreateMeterMark } from '@/components/page/ajustes/marcas-de-medidores/FormCreateMeterMark'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const CreateMeterMarksSettingsPage = () => {
  return (
    <>
      <HeaderPage title='Crear Marca de Medidor' containerClassName='pb-0' />
      <FormCreateMeterMark />
    </>
  )
}

CreateMeterMarksSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.METER_MARKS.CREATE.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateMeterMarksSettingsPage
