import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { statusTypeColumns, statusTypeColumnsToFilter } from '@/lib/utils/tableColumns/type-status'
import { fetchStatusType } from '@/lib/services/settings/status/type'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { DataTable } from '@/components/common/tables'

const { ROUTES } = siteConfig

const StatusTypeSettingsPage = () => {
  return (
    <>
      <HeaderPage
        title='Tipo de Estados'
        createItem={{ href: '/ajustes/estados/crear', title: 'Crear Estado' }}
      />

      <DataTable
        visibilityColumns
        columns={statusTypeColumns}
        itemsToFilter={statusTypeColumnsToFilter}
        labelPagination={{ singularItem: 'Estado', pluralItem: 'Estados' }}
        inputSearch={{ placeholder: 'Buscar Tipo Estado' }}
        query={{ queryKey: 'statusType', queryFn: () => fetchStatusType }}
      />
    </>
  )
}

StatusTypeSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CATEGORIES.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default StatusTypeSettingsPage
