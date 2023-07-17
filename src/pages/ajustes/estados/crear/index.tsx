import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { FormCreateTypeStatus } from '@/components/page/ajustes/estados/FormCreateTypeStatus'

const { ROUTES } = siteConfig

const CreateStatusTypeSettingsPage = () => {
  return (
    <>
      <HeaderPage allowGoBack title='Crear Tipo de Estatus' containerClassName='pb-0' />
      <FormCreateTypeStatus />
    </>
  )
}

CreateStatusTypeSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.STATUS.CREATE.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateStatusTypeSettingsPage
