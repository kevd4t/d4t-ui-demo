import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { FormCreateUser } from '@/components/page/usuarios/FormCreateUser'

const { ROUTES } = siteConfig

const CreateUserPage = () => {
  return (
    <>
      <HeaderPage title='Crear Usuario' containerClassName='pb-0' />

      <FormCreateUser />
    </>
  )
}

CreateUserPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.USERS.CREATE.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateUserPage
