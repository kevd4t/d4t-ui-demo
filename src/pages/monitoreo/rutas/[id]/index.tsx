import { IconChevronLeft } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { useSidebarStore } from '@/lib/store/sidebar'
import { useFetch } from '@/lib/hooks/useFetch'
import type { ReactElement } from '@/lib/types'
import { IRoute } from '@/lib/types/routes'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { DetailRoutOptions } from '@/components/page/monitoreo/rutas/DetailRoutOptions'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { DetailInfo } from '@/components/page/monitoreo/rutas/DetailInfo'
import { Button } from '@/components/ui'

const { ROUTES } = siteConfig

const DetailRouteMonitoringPage = () => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch<IRoute>(`/api/routes/${router.query.id}`)

  const { isOpen } = useSidebarStore()
  const BasicMapNoSSR = dynamic(() => import('@/components/common/gps/MonitoringRoutesMap'), { ssr: false })

  if (error) {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Hubo un Error</h5>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Cargando...</h5>
      </div>
    )
  }

  return (
    <div className='relative w-full h-full'>
      <BasicMapNoSSR />
      <DetailInfo />

      <div className={`fixed bottom-4 ${isOpen ? 'left-72' : 'left-32'} z-10 flex gap-x-5`}>
        <Button asChild className='flex justify-start items-center'>
          <Link href='/monitoreo/rutas'>
            <IconChevronLeft className='h-5 mr-2' /> Regresar
          </Link>
        </Button>

        <DetailRoutOptions route={data} />
      </div>
    </div>
  )
}

DetailRouteMonitoringPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout noPageTransition title={`${ROUTES.MONITORING.ROUTES.LIST.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default DetailRouteMonitoringPage
