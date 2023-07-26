import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const CreateUserGroupPage = () => {
  return (
    <>
      <HeaderPage allowGoBack title='Crear Grupo de Usuarios' containerClassName='pb-0' />
    </>
  )
}

CreateUserGroupPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.USERS.GROUPS.CREATE.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateUserGroupPage
