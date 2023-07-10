import { PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

import type { IFetchDataTable, IFleet, ITruck } from '@/lib/types'
import { truckColumns } from '@/lib/utils/tableColumns/trucks'
import { useFetch } from '@/lib/hooks/useFetch'

import { Badge, Card, CardContent, CardTitle, ScrollArea, Separator } from '@/components/ui'
import { handleFetchUrlTruckByFleetId } from '@/lib/services/settings/fleets'
import { Table } from '@/components/common/tables/GenericTable'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

const tags = Array.from({ length: 10 }).map(
  (_, i, a) => `Camión ${a.length - i}`
).reverse()

export const DetailFleet = ({ fleet }: { fleet: IFleet }) => {
  console.log({ fleetId: fleet.id })
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<ITruck>>(`/api/fleets/${fleet?.id}/trucks`)

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Flotas', singularItem: 'Flota' }
  }

  const handleSearchWithParams = async ({ search }) => {
    const url = handleFetchUrlTruckByFleetId({ pageSize, pageIndex, search, fleetId: fleet.id })
    fetcher(url)
  }

  return (
    <>
      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardContent className='pt-5'>
              <CardTitle>Informacion Basica</CardTitle>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Nombre:</span> &nbsp;
                  <span className='dark:text-gray-300'>{ fleet.title }</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Descripción:</strong>&nbsp;
                    { fleet.description }
                  </p>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className='w-full text-sm'>
                { fleet.status }
              </Badge>

              <Separator className='my-2' />

              <ScrollArea className='h-48 w-full rounded-md border'>
                <div className='p-4'>
                  <h6 className='mb-4 text-base font-medium leading-none'>Unidades</h6>

                  {
                    tags.map((tag) => (
                      <>
                        <div className='text-sm'>{tag}</div>
                        <Separator className='my-2' />
                      </>
                    ))
                  }
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        <div className='w-full pt-6'>
          <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
            <Card className='p-4 w-full'>
              <CardTitle>Informacion Basica</CardTitle>

              <Separator className='my-4' />

              <section className='w-full space-y-4'>
                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    readOnly
                    id='title'
                    type='text'
                    tabIndex={1}
                    label='Título'
                    value={fleet.title}
                  />

                  <Input
                    readOnly
                    id='isActive'
                    type='text'
                    tabIndex={1}
                    label='Estatus'
                    value={fleet.status}
                  />
                </div>

                <TextArea
                  rows={5}
                  readOnly
                  tabIndex={3}
                  id='description'
                  label='Descripción'
                  value={fleet.description}
                />
              </section>
            </Card>
          </div>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Unidades</CardTitle>

            <Separator className='my-4' />

            {
              data?.results && (
                <Table
                  visibilityColumns
                  data={data.results}
                  columns={truckColumns}
                  pagination={pagination}
                  queryInfo={{ isFetching: isLoading, error }}
                  inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Unidad' }}
                />
              )
            }
          </Card>
        </div>
      </div>
    </>
  )
}
