import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { useStationFlow } from '@/lib/store/stationFlow'

import { FormEditStation } from '@/components/page/estaciones/FormEditStation'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { StationsLayout } from '@/layouts/Stations'

const { ROUTES } = siteConfig

const EditStationPage = () => {
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
    <div className='w-full'>
      <HeaderPage title='Editar Estación' />
      { currentStation && <FormEditStation station={currentStation} /> }
    </div>
  )
}

EditStationPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.STATIONS.EDIT.TITLE} | ${siteConfig.TITLE}`}>
      <StationsLayout>
        {page}
      </StationsLayout>
    </AuthenticatedLayout>
  )
}

export default EditStationPage
