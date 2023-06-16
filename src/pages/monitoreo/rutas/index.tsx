import { IconChevronLeft, IconDotsVertical } from '@tabler/icons-react'
import dynamic from 'next/dynamic'

import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { DetailInfo } from '@/components/page/monitoreo/gps/DetailInfo'
import { Button } from '@/components/ui'

const { ROUTES } = siteConfig

const GPSMonitoringPage = () => {
  const BasicMapNoSSR = dynamic(() => import('@/components/common/gps/BasicMap'), { ssr: false })

  return (
    <div className='relative w-full h-full'>
      <BasicMapNoSSR />
      <DetailInfo />

      <div className='fixed bottom-4 left-72 z-10 flex gap-x-5'>
        <Button className='flex justify-start items-center'>
          <IconChevronLeft className='h-5' /> Regresar
        </Button>

        <Button className='flex justify-start items-center'>
          <IconDotsVertical className='h-5' /> Opciones
        </Button>
      </div>
    </div>
  )
}

GPSMonitoringPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.MONITORING.ROUTES.LIST.TITLE} | ${siteConfig.TITLE}`} mainClassName='p-0 sm:p-0'>
      {page}
    </AuthenticatedLayout>
  )
}

export default GPSMonitoringPage
