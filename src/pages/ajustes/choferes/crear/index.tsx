import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { FormCreateDriver } from '@/components/page/ajustes/choferes/FormCreateDriver'

const { ROUTES } = siteConfig

const CreateUserPage = () => {
  return (
    <>
      <HeaderPage allowGoBack title='Crear Chofer' containerClassName='pb-0' />
      <FormCreateDriver />
    </>
  )
}

CreateUserPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.DRIVERS.CREATE.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateUserPage
