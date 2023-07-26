import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { StationsLayout } from '@/layouts/Stations'
import { FormCreateStation } from '@/components/page/estaciones/FormCreateStation'

const { ROUTES } = siteConfig

export const DetailBasicInfoByStationPage = () => {
  return (<FormCreateStation />)
}

DetailBasicInfoByStationPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.STATIONS.LIST.TITLE} | ${siteConfig.TITLE}`}>
      <StationsLayout>
        {page}
      </StationsLayout>
    </AuthenticatedLayout>
  )
}

export default DetailBasicInfoByStationPage
