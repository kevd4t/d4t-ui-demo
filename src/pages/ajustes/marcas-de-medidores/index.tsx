import { PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

import { meterMarkColumns, meterMarkColumnsToFilter } from '@/lib/utils/tableColumns/meterMarks'
import { handleFetchUrlGpsMarks } from '@/lib/services/settings/gps/marks'
import type { IFetchDataTable, ReactElement } from '@/lib/types'
import { useFetch } from '@/lib/hooks/useFetch'
import { IGPSMark } from '@/lib/types/gps'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/GenericTable'

const { ROUTES } = siteConfig

const MetersMarksSettingsPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<IGPSMark>>('/api/meter-marks')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Marcas', singularItem: 'Marca' }
  }

  const handleSearchWithParams = async ({ search }) => {
    const url = handleFetchUrlGpsMarks({ pageSize, pageIndex, search })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title='Marcas de Medidores'
        createItems={[{ href: '/ajustes/marcas-de-medidores/crear', title: 'Crear Marca de Medidor' }]}
      />

      <Table
        visibilityColumns
        data={data?.results}
        columns={meterMarkColumns}
        itemsToFilter={meterMarkColumnsToFilter}
        pagination={pagination}
        queryInfo={{ isFetching: isLoading, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Marca de Medidor' }}
      />
    </>
  )
}

MetersMarksSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.GPS_MARKS.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default MetersMarksSettingsPage
