import dynamic from 'next/dynamic'

import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { DetailInfo } from '@/components/page/monitoreo/gps/DetailInfo'
import { Button } from '@/components/ui'
import { IconDotsVertical } from '@tabler/icons-react'

const { ROUTES } = siteConfig

const DetailRouteMonitoringPage = () => {
  const BasicMapNoSSR = dynamic(() => import('@/components/common/gps/BasicMap'), { ssr: false })

  return (
    <div className='relative w-full h-full'>
      <BasicMapNoSSR />
      <DetailInfo />

      <div className='fixed bottom-4 right-4 z-10'>
        <Button>
          {'<'} Regresar
        </Button>

        <Button>
          <IconDotsVertical className='text-white' /> Opciones
        </Button>
      </div>
    </div>
  )
}

DetailRouteMonitoringPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.MONITORING.ROUTES.CREATE.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default DetailRouteMonitoringPage
