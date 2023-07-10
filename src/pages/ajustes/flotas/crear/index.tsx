import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { FormCreateFleet } from '@/components/page/ajustes/flotas/FormCreateFleet'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const CreateFleetsSettingsPage = () => {
  return (
    <>
      <HeaderPage title='Crear Flota' containerClassName='pb-0' />
      <FormCreateFleet />
    </>
  )
}

CreateFleetsSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.FLEETS.CREATE.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateFleetsSettingsPage
