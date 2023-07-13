import { PaginationState } from '@tanstack/react-table'
import { IconAd } from '@tabler/icons-react'
import { useState } from 'react'

import { handleFetchUrlGpsModelByGpsMarkId } from '@/lib/services/settings/gps/marks'
import { getGpsModelColumns } from '@/lib/utils/tableColumns/gpsModels'
import type { IFetchDataTable, IGPSMark, IGPSModel } from '@/lib/types'
import { useFetch } from '@/lib/hooks/useFetch'

import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from '@/components/ui'
import { Table } from '@/components/common/tables/GenericTable'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

export const DetailGpsMark = ({ gpsMark }: { gpsMark: IGPSMark }) => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<IGPSModel>>(`/api/gps-marks/${gpsMark?.id}/models`)

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Flotas', singularItem: 'Flota' }
  }

  const handleSearchWithParams = async ({ search }) => {
    const url = handleFetchUrlGpsModelByGpsMarkId({ pageSize, pageIndex, search, gpsMarkId: gpsMark.id })
    fetcher(url)
  }

  return (
    <>
      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardHeader>
              <Avatar className='w-32 h-32 rounded-sm mx-auto'>
                <AvatarImage src={gpsMark.image} className='object-contain' />
                <AvatarFallback className='rounded-md'>
                  <IconAd className='text-zinc-500 w-10 h-10' />
                </AvatarFallback>
              </Avatar>
            </CardHeader>

            <CardContent>
              <h6 className='font-semibold'>Informacion Basica</h6>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Título:</span> &nbsp;
                  <span className='dark:text-gray-300'>{gpsMark.title}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Descripción:</strong>&nbsp;
                    {gpsMark.description}
                  </p>
                </li>
              </ul>

              <Separator className='my-2' />
              <Badge className={`w-full text-sm h-full py-1.5 ${gpsMark.isActive ? 'border-2 bg-green-100 border-green-500 text-green-500' : 'border-2 bg-red-100 border-red-500 text-red-500'}`}>
                {gpsMark.isActive ? 'Activo' : 'Bloqueado'}
              </Badge>
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
                    value={gpsMark.title}
                  />

                  <Input
                    readOnly
                    type='text'
                    tabIndex={2}
                    id='isActive'
                    label='Descripción'
                    value={gpsMark.isActive ? 'Activo' : 'Bloqueado'}
                  />
                </div>

                <TextArea
                  rows={9}
                  readOnly
                  tabIndex={3}
                  id='description'
                  label='Descripción'
                  value={gpsMark.description}
                />
              </section>
            </Card>
          </div>

          <Card className='p-4 mt-6 w-full'>
            <section className='w-full flex flex-row justify-between items-center'>
              <div>
                <CardTitle>Modelos de GPS</CardTitle>
                <CardDescription>Seleccione un modelo</CardDescription>
              </div>
            </section>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={data?.results}
              columns={getGpsModelColumns({})}
              pagination={pagination}
              queryInfo={{ isFetching: isLoading, error }}
              inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Unidad' }}
            />

            {/* {
              gpsMark?.gpsModels?.map((gpsModel) => (
                <Card key={gpsModel.id} className='max-w-sm mx-auto'>
                  <CardHeader>
                    <CardTitle>Título: {gpsModel.title}</CardTitle>
                    <CardDescription>Descripción: {gpsModel.description}</CardDescription>

                    <section className='flex w-full justify-center items-end'>
                      <Badge className='mr-4 w-full text-sm'>
                        {gpsModel.isActive ? 'Activo' : 'Bloqueado'}
                      </Badge>
                    </section>
                  </CardHeader>

                  <CardContent>
                    <img
                      src={gpsModel.image}
                      alt='imagen'
                      className='rounded-md mx-auto'
                    />
                  </CardContent>
                </Card>
              ))
            } */}
          </Card>

          <Card className='p-4 w-full col-span-6 md:col-span-4 mt-6'>
            <CardTitle>Imagen de la Marca</CardTitle>

            <Separator className='my-4' />

            <CardContent className='mt-0 pb-0'>
              <img
                src={gpsMark.image}
                alt='imagen'
                className='rounded-md mx-auto'
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
