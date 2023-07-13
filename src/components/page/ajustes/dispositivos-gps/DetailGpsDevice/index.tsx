import { IconDeviceMobilePin } from '@tabler/icons-react'
import dynamic from 'next/dynamic'

import type { IGPSDevice } from '@/lib/types'

import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent, CardHeader, CardTitle, Label, Separator } from '@/components/ui'
import { ImagesSlider } from '@/components/common/sliders/ImagesSlider'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

export const DetailGPSDevice = ({ gpsDevice }: { gpsDevice: IGPSDevice }) => {
  const BasicMapNoSSR = dynamic(() => import('@/components/common/gps/BasicMap'), { ssr: false })

  return (
    <>
      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardHeader>
              <Avatar className='w-32 h-32 rounded-sm mx-auto'>
                <AvatarImage src={gpsDevice.images[0]} className='object-contain' />
                <AvatarFallback className='rounded-md'>
                  <IconDeviceMobilePin className='text-zinc-500 w-10 h-10' />
                </AvatarFallback>
              </Avatar>
            </CardHeader>

            <CardContent>
              <h6 className='font-semibold'>Informacion Basica</h6>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Serial:</span> &nbsp;
                  <span className='dark:text-gray-300'>{gpsDevice.serial}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Marca de GPS:</span> &nbsp;
                  <span className='dark:text-gray-300'>{gpsDevice.gpsMark.title}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Modelo de GPS:</span> &nbsp;
                  <span className='dark:text-gray-300'>{gpsDevice.gpsModel.title}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Flota:</span> &nbsp;
                  <span className='dark:text-gray-300'>{gpsDevice.fleet.title}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Unidad de la Flota:</span> &nbsp;
                  <span className='dark:text-gray-300'>{gpsDevice.truck.title}</span>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className={'w-full text-sm h-full py-1.5'}>
                {gpsDevice.status}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className='w-full pt-6'>
          <Card className='p-4 w-full'>
            <CardTitle>Informacion Basica</CardTitle>

            <Separator className='my-4' />

            <section className='w-full space-y-4'>
              <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <Input
                  readOnly
                  id='serial'
                  type='text'
                  tabIndex={1}
                  label='Serial'
                  defaultValue={gpsDevice.serial}
                />

                <Input
                  readOnly
                  id='status'
                  type='text'
                  tabIndex={2}
                  label='Estatus'
                  value={gpsDevice.status}
                />
              </div>
            </section>
          </Card>

          <Card className='p-4 w-full col-span-6 md:col-span-4 mt-6'>
            <CardTitle>Marca y Modelo de GPS</CardTitle>

            <Separator className='my-4' />

            <section className='grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-6'>
              <Card>
                <CardHeader>
                  <CardTitle>Marca de GPS</CardTitle>

                  <div className='w-full rounded-md p-4 bg-slate-50 bg-opacity-5'>
                    <img
                      src={gpsDevice.gpsMark.image}
                      alt='Marca de GPS'
                      width={100}
                      className='mx-auto rounded-md'
                    />
                  </div>
                </CardHeader>

                <CardContent>
                  <section className='w-full space-y-4'>
                    <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                      <Input
                        readOnly
                        id='gpsMarkTitle'
                        type='text'
                        tabIndex={7}
                        label='Título'
                        value={gpsDevice.gpsMark.title}
                      />

                      <Input
                        readOnly
                        id='gpsMarkIsActive'
                        type='text'
                        tabIndex={8}
                        label='Estado'
                        value={gpsDevice.gpsMark.isActive ? 'Activo' : 'Bloqueado'}
                      />
                    </div>

                    <TextArea
                      rows={3}
                      tabIndex={3}
                      id='gpsMarkDescription'
                      label='Descripción'
                      defaultValue={gpsDevice.gpsMark.description}
                    />
                  </section>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <section className='w-full flex justify-between items-end'>
                    <CardTitle>Modelo de GPS</CardTitle>

                    <Badge>
                      {gpsDevice.gpsModel.type}
                    </Badge>
                  </section>

                  <div className='w-full rounded-md p-4 bg-slate-50 bg-opacity-5'>
                    <img
                      src={gpsDevice.gpsModel.image}
                      alt='Modelo de GPS'
                      width={100}
                      className='mx-auto rounded-md'
                    />
                  </div>
                </CardHeader>

                <CardContent>
                  <section className='w-full space-y-4'>
                    <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                      <Input
                        readOnly
                        id='gpsMarkTitle'
                        type='text'
                        tabIndex={7}
                        label='Título'
                        value={gpsDevice.gpsModel.title}
                      />

                      <Input
                        readOnly
                        id='gpsModelIsActive'
                        type='text'
                        tabIndex={8}
                        label='Estado'
                        value={gpsDevice.gpsModel.isActive ? 'Activo' : 'Bloqueado'}
                      />
                    </div>

                    <TextArea
                      rows={3}
                      tabIndex={3}
                      label='Descripción'
                      id='gpsModelDescription'
                      defaultValue={gpsDevice.gpsModel.description}
                    />
                  </section>
                </CardContent>
              </Card>
            </section>
          </Card>

          <Card className='p-4 w-full col-span-6 md:col-span-4 mt-6'>
            <CardTitle>Flota y Unidad</CardTitle>

            <Separator className='my-4' />

            <section className='grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-6'>
              <Card>
                <CardHeader>
                  <CardTitle>Flota</CardTitle>
                </CardHeader>

                <CardContent>
                  <section className='w-full space-y-4'>
                    <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                      <Input
                        readOnly
                        id='fleetTitle'
                        type='text'
                        tabIndex={7}
                        label='Título'
                        value={gpsDevice.fleet.title}
                      />

                      <Input
                        readOnly
                        id='fleetIsActive'
                        type='text'
                        tabIndex={8}
                        label='Estado'
                        value={gpsDevice.fleet.status}
                      />
                    </div>

                    <TextArea
                      rows={3}
                      tabIndex={3}
                      label='Descripción'
                      id='fleetDescription'
                      defaultValue={gpsDevice.fleet.description}
                    />

                    <div className=' w-full'>
                      <Label>Posicion Geologica</Label>

                      <div className='my-2'></div>

                      <div className='h-52'>
                        <BasicMapNoSSR />
                      </div>
                    </div>
                  </section>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <section className='w-full flex justify-between items-end'>
                    <CardTitle>Unidad</CardTitle>

                    <Badge>
                      {gpsDevice.gpsModel.type}
                    </Badge>
                  </section>

                  <div className='w-full rounded-md p-4 bg-slate-50 bg-opacity-5'>
                    <ImagesSlider images={gpsDevice.truck.images} className='max-w-sm' />
                  </div>
                </CardHeader>

                <CardContent>
                  <section className='w-full space-y-4'>
                    <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                      <Input
                        readOnly
                        id='gpsMarkTitle'
                        type='text'
                        tabIndex={7}
                        label='Título'
                        value={gpsDevice.gpsModel.title}
                      />

                      <Input
                        readOnly
                        id='gpsModelIsActive'
                        type='text'
                        tabIndex={8}
                        label='Estado'
                        value={gpsDevice.gpsModel.isActive ? 'Activo' : 'Bloqueado'}
                      />
                    </div>

                    <TextArea
                      rows={3}
                      tabIndex={3}
                      label='Descripción'
                      id='fleetDescription'
                      defaultValue={gpsDevice.fleet.description}
                    />
                  </section>
                </CardContent>
              </Card>
            </section>
          </Card>

          <Card className='p-4 w-full col-span-6 md:col-span-4 mt-6'>
            <CardTitle>Imagenes del Dispositivo GPS</CardTitle>

            <Separator className='my-4' />

            <CardContent className='mt-0 pb-0'>
              <ImagesSlider images={gpsDevice.images} className='max-w-md' />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
