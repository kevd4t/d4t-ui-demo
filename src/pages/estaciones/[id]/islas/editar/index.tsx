import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { StationsLayout } from '@/layouts/Stations'
import { FormCreateStation } from '@/components/page/estaciones/FormCreateStation'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

export const EditIslandsByStationPage = (props) => {
  return (
    <>
      <HeaderPage title='Editar Isla de Estación' />
      <FormCreateStation />
    </>
  )
}

EditIslandsByStationPage.getLayout = function GetLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.STATIONS.LIST.TITLE} | ${siteConfig.TITLE}`}>
      <StationsLayout>
        {page}
      </StationsLayout>
    </AuthenticatedLayout>
  )
}

export default EditIslandsByStationPage
