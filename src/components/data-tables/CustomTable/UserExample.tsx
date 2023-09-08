import { User, useGetAllUserQuery } from '@/graphql/generated/types'
import { CustomTable } from '.'

import { userColumns } from '@/lib/schemas/user/table'
import { formatPagination, initialPagination } from './utils'
import { getCookie } from 'typescript-cookie'
import { TableSubmit } from './types'
import { APP_CONFIG } from '@/config'

const formatUserDataTable = (users: User[]): any[] => {
  if (!users) return

  return users.map(user => ({
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    status: APP_CONFIG.USER_STATUS_DIC[user.status].label
  }))
}

export const UserTableExample = () => {
  const { data, loading, error } = useGetAllUserQuery({
    variables: { pagination: initialPagination },
    context: { headers: { Authorization: `Bearer ${getCookie('token')}` } }
  })

  const pagination = formatPagination(data?.getAllUser?.result)
  const usersFormated = formatUserDataTable(data?.getAllUser?.result?.docs)

  const onSubmitTable: TableSubmit = async ({ page, limit, filters, queries }) => {
    console.log({ page, limit, filters, queries })
  }

  return (
    <>
      <CustomTable
        data={usersFormated}
        onSubmitTable={onSubmitTable}
        pagination={pagination}
        error={Boolean(error)}
        columns={userColumns}
        loading={loading}
      />
    </>
  )
}
