import useSWR from 'swr'

import { usersColumns, usersColumnsToFilter } from '@/lib/utils/tableColumns'
import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { DataTable } from '@/components/common/tables'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const UsersPage = () => {
  const { data, error, isLoading } = useSWR('/api/users', { revalidateOnFocus: false })

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <HeaderPage title='Usuarios' />

      <DataTable
        visibilityColumns
        columns={usersColumns}
        data={data}
        itemsToFilter={usersColumnsToFilter}
      />
    </div>
  )
}

UsersPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.USERS.LIST.TITLE} | ${siteConfig.TITLE}`} mainClassName='p-0 sm:p-0'>
      {page}
    </AuthenticatedLayout>
  )
}

export default UsersPage
