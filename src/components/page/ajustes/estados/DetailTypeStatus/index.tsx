
import { PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

import { getStatusColumns } from '@/lib/utils/tableColumns/status'
import type { IStatusType } from '@/lib/types'

import { Badge, Card, CardContent, CardTitle, Separator } from '@/components/ui'
import { Table } from '@/components/common/tables/GenericTable'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

export const DetailTypeStatus = ({ typeStatus }: { typeStatus: IStatusType }) => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Estados', singularItem: 'Estado' }
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
                  <span className='dark:text-gray-300'>{ typeStatus.title }</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Descripción:</strong>&nbsp;
                    { typeStatus.description }
                  </p>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className={`w-full text-sm h-full py-1.5 ${typeStatus.isActive ? 'border-2 bg-green-100 border-green-500 text-green-500' : 'border-2 bg-red-100 border-red-500 text-red-500'}`}>
                {typeStatus.isActive ? 'Activo' : 'Bloqueado'}
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
                    value={typeStatus.title}
                  />

                  <Input
                    readOnly
                    id='isActive'
                    type='text'
                    tabIndex={2}
                    label='Estatus'
                    value={typeStatus.isActive ? 'Activo' : 'Bloqueado'}
                  />
                </div>

                <TextArea
                  rows={5}
                  readOnly
                  tabIndex={3}
                  id='description'
                  label='Descripción'
                  value={typeStatus.description}
                />
              </section>
            </Card>
          </div>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Estados</CardTitle>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              pagination={pagination}
              data={typeStatus.status}
              queryInfo={{ error: null, isFetching: false }}
              columns={getStatusColumns({ selection: false, actions: { detail: true } })}
            />
          </Card>
        </div>
      </div>
    </>
  )
}
