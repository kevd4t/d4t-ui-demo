import { IconBusStop, IconUser } from '@tabler/icons-react'
import { PaginationState } from '@tanstack/react-table'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import { getMeterDeviceColumns } from '@/lib/utils/tableColumns/meterDevices'
import { getIslandColumns } from '@/lib/utils/tableColumns/islands'
import type { IStation } from '@/lib/types'

import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent, CardHeader, CardTitle, Separator } from '@/components/ui'
import { Table } from '@/components/common/tables/GenericTable'
import { GridImages } from '@/components/common/grid-images'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

const BasicMapNoSSR = dynamic(() => import('@/components/common/gps/BasicMap'), { ssr: false })

export const DetailStation = ({ station }: { station: IStation }) => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Subcategorias', singularItem: 'Subcategoria' }
  }

  return (
    <>
      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardHeader>
              <Avatar className='w-full h-32 rounded-sm mx-auto'>
                <AvatarImage src={station.images[0]} className='object-contain w-full h-full' />
                <AvatarFallback className='rounded-md'>
                  <IconBusStop className='text-zinc-500 w-10 h-10' />
                </AvatarFallback>
              </Avatar>
            </CardHeader>

            <CardContent>
              <h6 className='font-semibold'>Informacion Basica</h6>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Título:</span> &nbsp;
                  <span className='dark:text-gray-300'>{station.title}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>RIF:</span> &nbsp;
                  <span className='dark:text-gray-300'>{station.rif}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Modalidad:</span> &nbsp;
                  <span className='dark:text-gray-300'>{station.modality}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Despacha Gasolina:</span> &nbsp;
                  <span className='dark:text-gray-300'>{station.title ? 'Si' : 'No'}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Despacha Disel:</span> &nbsp;
                  <span className='dark:text-gray-300'>{station.isDiselDispatch ? 'Si' : 'No'}</span>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge
                className={`w-full text-sm h-full py-1.5 ${station.isActive ? 'border-2 bg-green-100 border-green-500 text-green-500' : 'border-2 bg-red-100 border-red-500 text-red-500'}`}
              >
                {station.isActive ? 'Activo' : 'Bloqueado'}
              </Badge>

              <Separator className='my-2' />

              <Badge className='w-full text-sm h-full py-1.5'>
                {station.status}
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
                    id='title'
                    type='text'
                    tabIndex={1}
                    label='Título'
                    placeholder='Estacion Pepito'
                    readOnly
                    value={station.title}
                  />

                  <Input
                    id='rif'
                    type='text'
                    tabIndex={2}
                    label='Rif'
                    placeholder='Estacion Pepito'
                    readOnly
                    value={station.rif}
                  />
                </div>

                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    id='modality'
                    type='text'
                    tabIndex={3}
                    label='Modalidad'
                    placeholder='Estacion Pepito'
                    readOnly
                    value={station.modality}
                  />

                  <Input
                    id='type'
                    type='text'
                    tabIndex={4}
                    label='Tipo'
                    placeholder='Estacion Pepito'
                    readOnly
                    value={station.type}
                  />
                </div>

                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    id='nbBandera'
                    type='text'
                    tabIndex={5}
                    label='nbBandera'
                    readOnly
                    value={station.modality}
                  />

                  <Input
                    id='cadenaSum'
                    type='text'
                    tabIndex={6}
                    label='Cadena de Suministros'
                    readOnly
                    value={station.cadenaSum}
                  />
                </div>

                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    id='isDiselDispatch'
                    type='text'
                    tabIndex={7}
                    label='Despacha Disel'
                    readOnly
                    value={station.isDiselDispatch ? 'Si' : 'No'}
                  />

                  <Input
                    id='isGasolineDispatch'
                    type='text'
                    tabIndex={8}
                    label='Despacha Gasolina'
                    readOnly
                    value={station.isGasolineDispatch ? 'Si' : 'No'}
                  />
                </div>

                <TextArea
                  id='socialReason'
                  rows={5}
                  tabIndex={9}
                  label='Razón Social'
                  value={station.socialReason}
                />
              </section>
            </Card>
          </div>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Estados</CardTitle>

            <Separator className='my-4' />
            <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                id='isActive'
                type='text'
                tabIndex={10}
                label='Estado'
                readOnly
                value={station.isActive ? 'Activo' : 'Bloqueado'}
              />

              <Input
                id='status'
                type='text'
                tabIndex={11}
                label='Estatus'
                readOnly
                value={station.status}
              />
            </div>
          </Card>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Dirección</CardTitle>

            <Separator className='my-4' />

            <section className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                id='directionState'
                type='text'
                tabIndex={12}
                label='Estado'
                readOnly
                value={station.direction.state}
              />

              <Input
                id='directionCity'
                type='text'
                tabIndex={13}
                label='Ciudad'
                readOnly
                value={station.direction.city}
              />
            </section>

            <TextArea
              id='directionReference'
              rows={5}
              tabIndex={14}
              label='Referencia'
              classNameContainer='mt-4'
              value={station.direction.reference}
            />
          </Card>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Contactos</CardTitle>

            <Separator className='my-4' />

            <ul className='grid grid-cols-1 sm:grid-cols-3 grid-flow-row gap-6'>
              {
                station.contacts.map(contact => (
                  <li key={contact.id} className='w-full'>
                    <Card>
                      <CardHeader>
                        <Avatar className='w-16 h-16 rounded-full mx-auto'>
                          <AvatarImage src={contact.photo || 'https://via.placeholder.com/200/ff4d4d'} className='object-contain' />

                          <AvatarFallback className='rounded-full'>
                            <IconUser className='text-zinc-500 w-6 h-6' />
                          </AvatarFallback>
                        </Avatar>
                      </CardHeader>

                      <Separator />

                      <CardContent className='pt-4'>
                        <Input
                          id='name'
                          type='text'
                          tabIndex={14}
                          label='Nombre'
                          readOnly
                          value={contact.name || 'Sin Nombre'}
                        />

                        <div className='space-y-2 mt-4'>
                          <Input
                            id='email'
                            type='text'
                            tabIndex={14}
                            label='Correo Electrónico'
                            readOnly
                            value={contact.email || 'Sin Correo'}
                          />

                          <Input
                            id='phone'
                            type='text'
                            tabIndex={14}
                            label='Teléfono'
                            readOnly
                            value={contact.phone || 'Sin Teléfono'}
                          />

                          <Input
                            id='ci'
                            type='text'
                            tabIndex={14}
                            label='Cedula de Identidad'
                            readOnly
                            value={contact.ci || 'Sin Cedula'}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </li>
                ))
              }
            </ul>
          </Card>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Medidores</CardTitle>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={station.meters}
              pagination={pagination}
              queryInfo={{ error: null, isFetching: false }}
              columns={getMeterDeviceColumns({ actions: { detail: true } })}
            />
          </Card>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Islas</CardTitle>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={station.islands}
              pagination={pagination}
              queryInfo={{ error: null, isFetching: false }}
              columns={getIslandColumns({ actions: { detail: true } })}
            />
          </Card>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Coordenadas</CardTitle>

            <Separator className='my-4' />

            <div className='w-full h-96 bg-slate-50 rounded-md'>
              <BasicMapNoSSR />
            </div>
          </Card>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Fotos de la Estación</CardTitle>

            <Separator className='my-4' />

            <GridImages images={station.images} />
          </Card>
        </div>
      </div>
    </>
  )
}
