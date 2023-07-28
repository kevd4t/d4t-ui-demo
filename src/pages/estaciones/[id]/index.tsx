import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { StationsLayout } from '@/layouts/Stations'
import { useStationFlow } from '@/lib/store/stationFlow'

const { ROUTES } = siteConfig

const DetailStationPage = () => {
  const { currentStation, isLoading } = useStationFlow()

  if (!currentStation && !isLoading) {
    return (
      <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Hubo un Error</h5>
      </div>
    )
  }

  if (isLoading && !currentStation) {
    return (
      <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Cargando...</h5>
      </div>
    )
  }

  return (
    <>
      <HeaderPage
        allowGoBack
        title={`Detalle de Estación ${currentStation.name}`}
      />

      fino
      {/* {station && <DetailStation station={station as IStation} /> */}
    </>
  )
}

DetailStationPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.STATIONS.LIST.TITLE} | ${siteConfig.TITLE}`}>
      <StationsLayout>
        {page}
      </StationsLayout>
    </AuthenticatedLayout>
  )
}

export default DetailStationPage
