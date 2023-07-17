import { PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

import type { ICity, IFetchDataTable, ReactElement } from '@/lib/types'
import { cityColumns } from '@/lib/utils/tableColumns/cities'
import { handleFetchUrlCities } from '@/lib/services/cities'
import { useFetch } from '@/lib/hooks/useFetch'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/GenericTable'

const { ROUTES } = siteConfig

const CitiesSettingsPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<ICity>>('/api/cities')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Ciudades', singularItem: 'Ciudad' }
  }

  const handleSearchWithParams = async ({ search }) => {
    const url = handleFetchUrlCities({ pageSize, pageIndex, search })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title='Ciudades'
        createItems={[{ href: '/ajustes/ciudades/crear', title: 'Crear Ciudad' }]}
      />

      <Table
        visibilityColumns
        data={data?.results}
        columns={cityColumns}
        pagination={pagination}
        queryInfo={{ isFetching: isLoading, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Ciudad' }}
      />
    </>
  )
}

CitiesSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CITIES.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default CitiesSettingsPage
