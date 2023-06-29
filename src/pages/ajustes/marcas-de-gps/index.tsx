import { PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

import type { IFetchDataTable, ReactElement } from '@/lib/types'
import { useFetch } from '@/lib/hooks/useFetch'
import { IGPSMark } from '@/lib/types/gps'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/GenericTable'
import { handleFetchUrlGpsMarks } from '@/lib/services/settings/gps/marks'
import { gpsMarkColumns, gpsMarkColumnsToFilter } from '@/lib/utils/tableColumns/gpsMarks'

const { ROUTES } = siteConfig

const GPSMarksSettingsPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<IGPSMark>>('/api/gps-marks')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Marcas de GPS', singularItem: 'Marca de GPS' }
  }

  const handleSearchWithParams = async ({ search }) => {
    const url = handleFetchUrlGpsMarks({ pageSize, pageIndex, search })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title='Marcas de GPS'
        createItems={[{ href: '/ajustes/marcas-de-gps/crear', title: 'Crear Marca de GPS' }]}
      />

      <Table
        visibilityColumns
        data={data?.results}
        columns={gpsMarkColumns}
        itemsToFilter={gpsMarkColumnsToFilter}
        pagination={pagination}
        queryInfo={{ isFetching: isLoading, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Marca de GPS' }}
      />
    </>
  )
}

GPSMarksSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.GPS_MARKS.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default GPSMarksSettingsPage
