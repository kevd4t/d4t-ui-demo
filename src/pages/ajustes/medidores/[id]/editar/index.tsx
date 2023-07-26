import { useRouter } from 'next/router'

import type { IMeterDevice, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { FormEditMeterDevice } from '@/components/page/ajustes/medidores/FormEditMeterDevice'

const { ROUTES } = siteConfig

const EditMeterDevicePage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [meterDevice, setMeterDevice] = useState(null)
  const [error, setError] = useState(null)

  const getFleetDetail = async () => {
    setIsLoading(true)

    const res = await fetch(`/api/meter-devices/${router.query.id}`)

    if (!res.ok) {
      toast.error('Hubo un Error')
      setError('Hubo un Error')
      setIsLoading(false)
      return
    }

    const data: IMeterDevice = await res.json()
    setMeterDevice(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getFleetDetail()
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
      <HeaderPage allowGoBack title={`Editar Medidor ${router.query.id}`} />
      { meterDevice?.results && (<FormEditMeterDevice meterDevice={meterDevice.results as IMeterDevice} />) }
    </>
  )
}

EditMeterDevicePage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.METER_DEVICE.EDIT.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default EditMeterDevicePage
