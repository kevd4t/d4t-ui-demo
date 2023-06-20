// import useSWR from 'swr'
import { useRouter } from 'next/router'

import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const DetailUserPage = () => {
  const router = useRouter()
  // const { data, error, isLoading } = useSWR('/api/users', { revalidateOnFocus: false })

  // if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>

  return (
    <div>
      <HeaderPage title={`Editar Usuario ${router.query.id}`} />
    </div>
  )
}

DetailUserPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.USERS.DETAIL.TITLE} | ${siteConfig.TITLE}`} mainClassName='p-0 sm:p-0'>
      {page}
    </AuthenticatedLayout>
  )
}

export default DetailUserPage
