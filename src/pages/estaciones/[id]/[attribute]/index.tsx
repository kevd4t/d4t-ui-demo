import { EStationType, type ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'
import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { StationsLayout } from '@/layouts/Stations'
import { useStationFlow } from '@/lib/store/stationFlow'
import { useRouter } from 'next/router'
import { DetailStation } from '@/components/page/estaciones/DetailStation'

const { ROUTES } = siteConfig

export const DetailAttributeByStationPage = () => {
  const { currentStation, isLoading } = useStationFlow()
  const router = useRouter()

  if (isLoading && !currentStation) return <div>Cargando Menol</div>

  if (currentStation?.type.includes(EStationType.PUMP)) {
    return (
      <>
        { router.asPath.includes('/info') && (<DetailStation station={currentStation} />) }
        { router.asPath.includes('/islas') && (<div>Islas</div>) }
        { router.asPath.includes('/tanques') && (<div>Tanques</div>) }
        { router.asPath.includes('/dispensadores') && (<div>Dispensadores</div>) }
      </>
    )
  }

  if (currentStation?.type.includes(EStationType.STOCKAGE)) {
    return (
      <>
        { router.asPath.includes('/another') && (<div>Another</div>) }
      </>
    )
  }

  return (<div>NOPE</div>)
}

DetailAttributeByStationPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.STATIONS.LIST.TITLE} | ${siteConfig.TITLE}`}>
      <StationsLayout>
        {page}
      </StationsLayout>
    </AuthenticatedLayout>
  )
}

export default DetailAttributeByStationPage
