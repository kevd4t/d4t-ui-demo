import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { FormCreateUser } from '@/components/page/usuarios/FormCreateUser'

const { ROUTES } = siteConfig

const CreateStationPage = () => {
  return (
    <>
      <HeaderPage title='Crear Estacion' containerClassName='pb-0' />

      <FormCreateUser />
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
