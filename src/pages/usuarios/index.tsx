import { usersColumns, usersColumnsToFilter } from '@/lib/utils/tableColumns/users'
import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { DataTable } from '@/components/common/tables'
import { fetchUsers } from '@/lib/services/users'

const { ROUTES } = siteConfig

const UsersPage = () => {
  return (
    <>
      <HeaderPage
        title='Usuarios'
        createItem={{ href: '/usuarios/crear', title: 'Crear Usuario' }}
      />

      <DataTable
        visibilityColumns
        columns={usersColumns}
        itemsToFilter={usersColumnsToFilter}
        labelPagination={{ singularItem: 'Usuario', pluralItem: 'Usuarios' }}
        inputSearch={{ placeholder: 'Buscar Usuario' }}
        query={{ queryKey: 'users', queryFn: () => fetchUsers }}
      />
    </>
  )
}

UsersPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.USERS.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default UsersPage
