import useSWR from 'swr'

import { usersColumns, usersColumnsToFilter } from '@/lib/utils/tableColumns'
import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { DataTable } from '@/components/common/tables'

const { ROUTES } = siteConfig

const UsersPage = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/users', { revalidateOnFocus: false })

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <HeaderPage
        title='Usuarios'
        createItem={{ href: '/usuarios/crear', title: 'Crear Usuario' }}
      />

      <DataTable
        visibilityColumns
        columns={usersColumns}
        data={data}
        itemsToFilter={usersColumnsToFilter}
        labelPagination={{ singularItem: 'Usuario', pluralItem: 'Usuarios' }}
        inputSearch={{
          placeholder: 'Buscar Usuario',
          mutate
        }}
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
