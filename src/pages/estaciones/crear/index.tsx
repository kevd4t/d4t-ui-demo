import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { CreateStationLayout } from '@/layouts/Stations/CreateStation'
import { AuthenticatedLayout } from '@/layouts/Authenticated'

import { FormCreateStation } from '@/components/page/estaciones/FormCreateStation'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

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
      <CreateStationLayout>
        {page}
      </CreateStationLayout>
    </AuthenticatedLayout>
  )
}

export default CreateStationPage
