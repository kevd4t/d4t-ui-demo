import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { FormCreateStation } from '@/components/page/estaciones/FormCreateStation'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { StationsLayout } from '@/layouts/Stations'

const { ROUTES } = siteConfig

const CreateStationPage = () => {
  return (
    <>
      <HeaderPage title='Crear Estación' />
      <FormCreateStation />
    </>
  )
}

CreateStationPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.STATIONS.CREATE.TITLE} | ${siteConfig.TITLE}`}>
      <StationsLayout>
        {page}
      </StationsLayout>
    </AuthenticatedLayout>
  )
}

export default CreateStationPage
