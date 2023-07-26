import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'sonner'

import type { IFetchData, IStatusType, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { DetailTypeStatus } from '@/components/page/ajustes/estados/DetailTypeStatus'

const { ROUTES } = siteConfig

const StatusTypeSettingsPage = () => {
  const [statusType, setStatusType] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  const getTypeStatusDetail = async () => {
    setIsLoading(true)

    const res = await fetch(`/api/status-type/${router.query.id}`)

    if (!res.ok) {
      toast.error('Hubo un Error')
      setError('Hubo un Error')
      setIsLoading(false)
      return
    }

    const data: IFetchData<IStatusType> = await res.json()
    setStatusType(data?.results)
    setIsLoading(false)
  }

  useEffect(() => {
    if (router?.query?.id) {
      getTypeStatusDetail()
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
        title={`Detalle de Tipo de Estado ${router.query.id}`}
      />

      { statusType && <DetailTypeStatus typeStatus={statusType} /> }
    </>
  )
}

StatusTypeSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.STATUS.LIST.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default StatusTypeSettingsPage
