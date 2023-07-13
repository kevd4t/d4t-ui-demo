import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
// import { Table } from '@/components/common/tables'
// import { fetchCategories } from '@/lib/services/settings/categories'
// import { categoryColumns, categoryColumnsToFilter } from '@/lib/utils/tableColumns/categories'

const { ROUTES } = siteConfig

const StatusTypeSettingsPage = () => {
  return (
    <>
      <HeaderPage allowGoBack title='Tipo de Estado' />

      {/* <DataTable
        visibilityColumns
        columns={categoryColumns}
        itemsToFilter={categoryColumnsToFilter}
        labelPagination={{ singularItem: 'Categoria', pluralItem: 'Categorias' }}
        inputSearch={{ placeholder: 'Buscar Categoria' }}
        query={{ queryKey: 'categorias', queryFn: () => fetchCategories }}
      /> */}
    </>
  )
}

StatusTypeSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CATEGORIES.DETAIL.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default StatusTypeSettingsPage
