import { useRouter } from 'next/router'

import type { IFetchData, IStation, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { DetailStation } from '@/components/page/estaciones/DetailStation'

const { ROUTES } = siteConfig

const DetailUserPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [station, setStation] = useState(null)
  const [error, setError] = useState(null)
  const router = useRouter()

  const getCategoryDetail = async () => {
    setIsLoading(true)

    const res = await fetch(`/api/stations/${router.query.id}`)

    if (!res.ok) {
      toast.error('Hubo un Error')
      setError('Hubo un Error')
      setIsLoading(false)
      return
    }

    const data: IFetchData<IStation> = await res.json()
    setStation(data?.results)
    setIsLoading(false)
  }

  useEffect(() => {
    if (router?.query?.id) {
      getCategoryDetail()
    }
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
      <HeaderPage
        allowGoBack
        title={`Detalle de Estación ${router.query.id}`}
      />

      {station && <DetailStation station={station as IStation} />}
    </>
  )
}

DetailUserPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.STATIONS.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default DetailUserPage
