import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { StationsLayout } from '@/layouts/Stations'

const { ROUTES } = siteConfig

export const DetailIslandsByStationPage = () => {
  return (
    <div>
      Epale
    </div>
  )
}

DetailIslandsByStationPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.STATIONS.LIST.TITLE} | ${siteConfig.TITLE}`}>
      <StationsLayout>
        {page}
      </StationsLayout>
    </AuthenticatedLayout>
  )
}

export default DetailIslandsByStationPage
