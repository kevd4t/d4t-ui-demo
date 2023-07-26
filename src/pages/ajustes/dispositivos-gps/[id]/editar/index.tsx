import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'sonner'

import type { IMeterMark, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { FormEditGpsDevice } from '@/components/page/ajustes/dispositivos-gps/FormEditGpsDevice'

const { ROUTES } = siteConfig

const EditGPSDevicePage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [gpsDevice, setGpsDevice] = useState(null)
  const [error, setError] = useState(null)

  const getMeterMarkDetail = async () => {
    setIsLoading(true)

    const res = await fetch(`/api/gps-devices/${router.query.id}`)

    if (!res.ok) {
      toast.error('Hubo un Error')
      setError('Hubo un Error')
      setIsLoading(false)
      return
    }

    const data: IMeterMark = await res.json()
    setGpsDevice(data)
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
      <HeaderPage allowGoBack title={`Editar DIspositivo de GPS ${router.query.id}`} />
      { gpsDevice?.results && <FormEditGpsDevice gpsDevice={gpsDevice.results} /> }
    </>
  )
}

EditGPSDevicePage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.GPS_DEVICE.EDIT.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default EditGPSDevicePage
