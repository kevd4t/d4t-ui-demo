import type { IFetchDataTable, IGPSDevice, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { useState } from 'react'
import { PaginationState } from '@tanstack/react-table'
import { useFetch } from '@/lib/hooks/useFetch'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/GenericTable'
import { gpsDeviceColumns } from '@/lib/utils/tableColumns/gpsDevices'
import { handleFetchUrlGpsDevices } from '@/lib/services/settings/gps/devices'

const { ROUTES } = siteConfig

const GPSSettingsPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<IGPSDevice>>('/api/gps-devices')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Dispositivos GPS', singularItem: 'Dispositivo GPS' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlGpsDevices({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title='Dispositivos GPS'
        createItems={[{ href: '/ajustes/dispositivos-gps/crear', title: 'Crear Dispositivo GPS' }]}
      />

      <Table
        visibilityColumns
        data={data?.results}
        pagination={pagination}
        columns={gpsDeviceColumns}
        queryInfo={{ isFetching: isLoading, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Dispositivo GPS' }}
      />
    </>
  )
}

GPSSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.GPS_DEVICE.LIST.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default GPSSettingsPage
