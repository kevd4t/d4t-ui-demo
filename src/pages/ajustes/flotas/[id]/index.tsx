import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'sonner'

import type { IMeterMark, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { DetailFleet } from '@/components/page/ajustes/flotas/DetailFleet'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

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
      <HeaderPage allowGoBack title={`Detalle de Flota ${router.query.id}`} />
      { fleet?.results && (<DetailFleet fleet={fleet.results} />) }
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
