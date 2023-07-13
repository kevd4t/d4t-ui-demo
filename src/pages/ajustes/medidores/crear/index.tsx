import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { FormCreateMeterDevice } from '@/components/page/ajustes/medidores/FormCreateMeterDevice'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const CreateMeterDeviceSettingsPage = () => {
  return (
    <>
      <HeaderPage allowGoBack title='Crear Medidor' containerClassName='pb-0' />
      <FormCreateMeterDevice />
    </>
  )
}

CreateMeterDeviceSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.GPS_DEVICE.CREATE.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateMeterDeviceSettingsPage
