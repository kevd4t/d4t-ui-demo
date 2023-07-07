import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/router'

import type { IMeterMark, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { DetailMeterMark } from '@/components/page/ajustes/marcas-de-medidores/DetailMeterMark'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { DetailFleet } from '@/components/page/ajustes/flotas/DetailFleet'

const { ROUTES } = siteConfig

const DetailFleetPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [fleet, setFleet] = useState(null)
  const [error, setError] = useState(null)

  const getFleetDetail = async () => {
    setIsLoading(true)

    const res = await fetch(`/api/fleets/${router.query.id}`)

    if (!res.ok) {
      toast.error('Hubo un Error')
      setError('Hubo un Error-')
      setIsLoading(false)
      return
    }

    const data: IMeterMark = await res.json()
    setFleet(data)
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
      <HeaderPage title={`Detalle de Marca de Medidor ${router.query.id}`} />
      <DetailFleet fleet={fleet} />
    </>
  )
}

DetailFleetPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.USERS.DETAIL.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default DetailFleetPage
