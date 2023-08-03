import { EStationType, type ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { StationsLayout } from '@/layouts/Stations'
import { useStationFlow } from '@/lib/store/stationFlow'
import { usePathname } from 'next/navigation'
import { FormCreateIsland } from '@/components/page/estaciones/atributos/islas/FormCreateIsland'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { FormCreateDispenser } from '@/components/page/estaciones/atributos/dispensadores/FormCreateDispenser'
import { FormCreateTank } from '@/components/page/estaciones/atributos/tanques/FormCreateTank'

const { ROUTES } = siteConfig

const EditAttributeByStationPage = () => {
  const { currentStation } = useStationFlow()
  const pathname = usePathname()

  if ((currentStation?.type === EStationType.PUMP) && (pathname.includes('/islas'))) {
    return (
      <div className='w-full'>
        <HeaderPage title='Crear Isla' headingPage />
        <FormCreateIsland />
      </div>
    )
  }

  if ((currentStation?.type === EStationType.PUMP) && (pathname.includes('/dispensadores'))) {
    return (
      <div className='w-full'>
        <HeaderPage title='Crear Dispensador' headingPage />
        <FormCreateDispenser />
      </div>
    )
  }

  if ((currentStation?.type === EStationType.PUMP) && (pathname.includes('/tanques'))) {
    return (
      <div className='w-full'>
        <HeaderPage title='Crear Tanque' headingPage />
        <FormCreateTank />
      </div>
    )
  }

  if (currentStation?.type === EStationType.STOCKAGE) return <div>FORM EDIT STATION STOCKAGE</div>

  return (
    <div>
      Epale
    </div>
  )
}

EditAttributeByStationPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.STATIONS.LIST.TITLE} | ${siteConfig.TITLE}`}>
      <StationsLayout>
        {page}
      </StationsLayout>
    </AuthenticatedLayout>
  )
}

export default EditAttributeByStationPage
