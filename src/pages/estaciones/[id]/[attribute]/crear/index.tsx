import { EStationType, type ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { StationsLayout } from '@/layouts/Stations'
import { useStationFlow } from '@/lib/store/stationFlow'
import { FormEditStation } from '@/components/page/estaciones/FormEditStation'

const { ROUTES } = siteConfig

export const CreateAttributeByStationPage = () => {
  const { currentStation } = useStationFlow()

  if (currentStation.type === EStationType.PUMP) return <FormEditStation station={currentStation} />

  if (currentStation.type === EStationType.STOCKAGE) return <div>FORM EDIT STATION STOCKAGE</div>

  return (
    <div>
      Epale
    </div>
  )
}

CreateAttributeByStationPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.STATIONS.LIST.TITLE} | ${siteConfig.TITLE}`}>
      <StationsLayout>
        {page}
      </StationsLayout>
    </AuthenticatedLayout>
  )
}

export default CreateAttributeByStationPage
