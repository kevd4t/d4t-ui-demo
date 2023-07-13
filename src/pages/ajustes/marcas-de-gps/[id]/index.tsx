import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/router'

import type { IGPSMark, IMeterMark, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { DetailGpsMark } from '@/components/page/ajustes/marcas-de-gps/DetailGpsMark'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const DetailGPSMarkPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [meterMark, setMeterMark] = useState(null)
  const [error, setError] = useState(null)

  const getMeterMarkDetail = async () => {
    setIsLoading(true)

    const res = await fetch(`/api/gps-marks/${router.query.id}`)

    if (!res.ok) {
      toast.error('Hubo un Error')
      setError('Hubo un Error-')
      setIsLoading(false)
      return
    }

    const data: IMeterMark = await res.json()
    setMeterMark(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getMeterMarkDetail()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.id])

  if (error) {
    return (
      <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Hubo un Error</h5>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Cargando...</h5>
      </div>
    )
  }

  return (
    <>
      <HeaderPage allowGoBack title={`Detalle de Marca de GPS ${router.query.id}`} />
      { meterMark?.results && <DetailGpsMark gpsMark={meterMark.results as IGPSMark} /> }
    </>
  )
}

DetailGPSMarkPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.USERS.DETAIL.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default DetailGPSMarkPage
