import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { DataTable } from '@/components/common/tables'
import { fetchCategories } from '@/lib/services/settings/categories'
import { categoryColumns, categoryColumnsToFilter } from '@/lib/utils/tableColumns/categories'

const { ROUTES } = siteConfig

const CategorySettingsPage = () => {
  return (
    <>
      <HeaderPage
        title='Categorias'
        createItem={{ href: '/ajustes/categorias/crear', title: 'Crear Categoria' }}
      />

      <DataTable
        visibilityColumns
        columns={categoryColumns}
        itemsToFilter={categoryColumnsToFilter}
        labelPagination={{ singularItem: 'Categoria', pluralItem: 'Categorias' }}
        inputSearch={{ placeholder: 'Buscar Categoria' }}
        query={{ queryKey: 'categorias', queryFn: () => fetchCategories }}
      />
    </>
  )
}

CategorySettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CATEGORIES.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default CategorySettingsPage
