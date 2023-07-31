import { IconUser } from '@tabler/icons-react'
import dynamic from 'next/dynamic'

import { EHydrocarbon, type IStation } from '@/lib/types'

import { Avatar, AvatarFallback, AvatarImage, Card, CardContent, CardHeader, CardTitle, Separator } from '@/components/ui'
import { GridImages } from '@/components/common/grid-images'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'
import { APP_CONFIG } from '@/config'

const BasicMapNoSSR = dynamic(() => import('@/components/common/gps/BasicMap'), { ssr: false })

export const DetailStation = ({ station }: { station: IStation }) => {
  return (
    <>
      <div className='w-full h-full flex justify-start items-start gap-x-10'>
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
                    value={station.name}
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
                    value={APP_CONFIG.STATION_TYPE[station.type].label}
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
                    value={station.chain_supply}
                  />
                </div>

                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    id='isDiselDispatch'
                    type='text'
                    tabIndex={7}
                    label='Despacha Disel'
                    readOnly
                    value={station.provider_services.includes(EHydrocarbon.DIESEL) ? 'Si' : 'No'}
                  />

                  <Input
                    id='isGasolineDispatch'
                    type='text'
                    tabIndex={8}
                    label='Despacha Gasolina'
                    readOnly
                    value={station.provider_services.includes(EHydrocarbon.GASOLINE) ? 'Si' : 'No'}
                  />
                </div>

                <TextArea
                  id='socialReason'
                  rows={5}
                  tabIndex={9}
                  label='Razón Social'
                  value={station.social_reason}
                />
              </section>
            </Card>
          </div>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Estados</CardTitle>

            <Separator className='my-4' />

            <Input
              id='status'
              type='text'
              tabIndex={11}
              label='Estatus'
              readOnly
              value={station.state}
            />
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
                value={station.location.state}
              />

              <Input
                id='directionCity'
                type='text'
                tabIndex={13}
                label='Ciudad'
                readOnly
                value={station.location.city}
              />
            </section>

            <TextArea
              id='directionReference'
              rows={5}
              tabIndex={14}
              label='Referencia'
              classNameContainer='mt-4'
              value={station.location.address}
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
                            value={contact.identity_card_number || 'Sin Cedula'}
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
            <CardTitle>Coordenadas</CardTitle>

            <Separator className='my-4' />

            <div className='w-full h-96 bg-slate-50 rounded-md'>
              <BasicMapNoSSR />
            </div>
          </Card>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Fotos de la Estación</CardTitle>

            <Separator className='my-4' />

            <GridImages images={station.images.map(image => image.url)} />
          </Card>
        </div>
      </div>
    </>
  )
}
