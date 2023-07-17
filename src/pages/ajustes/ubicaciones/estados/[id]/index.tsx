import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'sonner'

import { IFetchData, IState } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { DetailState } from '@/components/page/ajustes/ubicaciones/estados/DetailState'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const StateSettingsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [state, setState] = useState(null)
  const [error, setError] = useState(null)
  const router = useRouter()

  const getStateDetail = async () => {
    setIsLoading(true)

    const res = await fetch(`/api/states/${router.query.id}`)

    if (!res.ok) {
      toast.error('Hubo un Error')
      setError('Hubo un Error')
      setIsLoading(false)
      return
    }

    const data: IFetchData<IState> = await res.json()
    setState(data?.results)
    setIsLoading(false)
  }

  useEffect(() => {
    if (router?.query?.id) {
      getStateDetail()
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
        title={`Detalle de Estado ${router.query.id}`}
      />

      { state && <DetailState state={state} /> }
    </>
  )
}

StateSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CATEGORIES.EDIT.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default StateSettingsPage
