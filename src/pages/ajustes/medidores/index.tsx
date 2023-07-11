import type { IFetchDataTable, IGPSDevice, IMeterDevice, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { useState } from 'react'
import { PaginationState } from '@tanstack/react-table'
import { useFetch } from '@/lib/hooks/useFetch'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/GenericTable'
import { gpsDeviceColumns } from '@/lib/utils/tableColumns/gpsDevices'
import { handleFetchUrlGpsDevices } from '@/lib/services/settings/gps/devices'
import { meterDeviceColumns } from '@/lib/utils/tableColumns/meterDevices'

const { ROUTES } = siteConfig

const MetersSettingsPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<IMeterDevice>>('/api/meter-devices')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Estaciones', singularItem: 'Estación' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlGpsDevices({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title='Medidores'
        createItems={[{ href: '/ajustes/medidores/crear', title: 'Crear Medidor' }]}
      />

      <Table
        visibilityColumns
        data={data?.results}
        columns={meterDeviceColumns}
        pagination={pagination}
        queryInfo={{ isFetching: isLoading, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Medidor' }}
      />
    </>
  )
}

MetersSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.GPS_DEVICE.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default MetersSettingsPage
