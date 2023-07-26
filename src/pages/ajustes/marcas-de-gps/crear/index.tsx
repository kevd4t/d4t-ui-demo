import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { FormCreateGPSMark } from '@/components/page/ajustes/marcas-de-gps/FormCreateGPSMark'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const CreateGPSMarksSettingsPage = () => {
  return (
    <>
      <HeaderPage allowGoBack title='Crear Marca de GPS' containerClassName='pb-0' />
      <FormCreateGPSMark />
    </>
  )
}

CreateGPSMarksSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.GPS_MARKS.CREATE.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateGPSMarksSettingsPage
