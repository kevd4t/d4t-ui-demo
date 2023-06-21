import { useRouter } from 'next/router'

import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const DetailUserPage = () => {
  const router = useRouter()

  return (
    <div>
      <HeaderPage title={`Editar Usuario ${router.query.id}`} />
    </div>
  )
}

DetailUserPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.USERS.DETAIL.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default DetailUserPage
