import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { FormCreateState } from '@/components/page/ajustes/ubicaciones/estados/FormCreateState'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const CreateCategorySettingsPage = () => {
  return (
    <>
      <HeaderPage allowGoBack title='Crear Estado' containerClassName='pb-0' />
      <FormCreateState />
    </>
  )
}

CreateCategorySettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CATEGORIES.CREATE.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateCategorySettingsPage
