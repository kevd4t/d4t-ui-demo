import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { FormCreateCategory } from '@/components/page/ajustes/categorias/FormCreateCategory'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const CreateCategorySettingsPage = () => {
  return (
    <>
      <HeaderPage allowGoBack title='Crear Categoria' containerClassName='pb-0' />
      <FormCreateCategory />
    </>
  )
}

CreateCategorySettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CATEGORIES.CREATE.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateCategorySettingsPage
