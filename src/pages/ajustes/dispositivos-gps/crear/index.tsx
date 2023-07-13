import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { FormCreateGPSDevice } from '@/components/page/ajustes/dispositivos-gps/FormCreateGpsDevice'

const { ROUTES } = siteConfig

const CreateGPSDeviceSettingsPage = () => {
  return (
    <>
      <HeaderPage allowGoBack title='Crear Dispositivo GPS' containerClassName='pb-0' />
      <FormCreateGPSDevice />
    </>
  )
}
CreateGPSDeviceSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.GPS_DEVICE.CREATE.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateGPSDeviceSettingsPage
