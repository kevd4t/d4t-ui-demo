import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { FormCreateStation } from '@/components/page/estaciones/FormCreateStation'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const CreateStationPage = () => {
  return (
    <>
      <HeaderPage allowGoBack title='Crear Estación' containerClassName='pb-0' />
      <FormCreateStation />
    </>
  )
}

CreateStationPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.STATIONS.CREATE.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateStationPage
