import dynamic from 'next/dynamic'

import type { IMeterDevice } from '@/lib/types'

import { Badge, Card, CardContent, CardTitle, Label, Separator } from '@/components/ui'
import { ImagesSlider } from '@/components/common/sliders/ImagesSlider'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

export const DetailMeterDevice = ({ meterDevice }: { meterDevice: IMeterDevice }) => {
  const BasicMapNoSSR = dynamic(() => import('@/components/common/gps/BasicMap'), { ssr: false })

  return (
    <>
      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardContent className='pt-5'>
              <CardTitle>Informacion Basica</CardTitle>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Serial:</span> &nbsp;
                  <span className='dark:text-gray-300'>{ meterDevice.serial }</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Modelo:</strong>&nbsp;
                    { meterDevice.meterModel.title }
                  </p>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Tipo:</strong>&nbsp;
                    { meterDevice.type }
                  </p>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Unidad:</strong>&nbsp;
                    { meterDevice.meterUnit }
                  </p>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className='w-full text-sm'>
                { meterDevice.status }
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
                <div className='w-full grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    readOnly
                    id='serial'
                    type='text'
                    tabIndex={1}
                    label='Serial'
                    value={meterDevice.serial}
                  />

                  <Input
                    readOnly
                    id='meterModel'
                    type='text'
                    tabIndex={2}
                    label='Modelo del medidor'
                    value={meterDevice.meterModel.title}
                  />

                  <Input
                    readOnly
                    id='status'
                    type='text'
                    tabIndex={3}
                    label='Tipo'
                    value={meterDevice.status}
                  />
                </div>

                <div className='w-full grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    readOnly
                    id='type'
                    type='text'
                    tabIndex={4}
                    label='Tipo'
                    value={meterDevice.type}
                  />

                  <Input
                    readOnly
                    id='meterUnit'
                    type='text'
                    tabIndex={5}
                    label='Unidad de medición'
                    value={meterDevice.meterUnit}
                  />
                </div>

                <div>
                  <Label>Fotos del Medidor</Label>

                  <ImagesSlider
                    images={meterDevice.images}
                    zoom
                    spaceBetween={1}
                    className='w-full sm:w-[500px]'
                    slidesPerView={3}
                  />
                </div>
              </section>
            </Card>
          </div>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Estación</CardTitle>

            <Separator className='my-4' />

            <div className='grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 items-start gap-x-6 gap-y-4'>
              <div className='w-full h-full bg-slate-50 rounded-md'>
                <BasicMapNoSSR />
              </div>

              <div className='w-full flex flex-col justify-start items-start space-y-4'>
                <Input
                  readOnly
                  id='stationTitle'
                  type='text'
                  tabIndex={6}
                  label='Nombre'
                  value={meterDevice.station.name}
                />

                <Input
                  readOnly
                  id='stationTitle'
                  type='text'
                  tabIndex={7}
                  label='Estado'
                  value={meterDevice.station.name}
                />

                <Input
                  readOnly
                  id='stationCity'
                  type='text'
                  tabIndex={8}
                  label='Ciudad'
                  value={meterDevice.station.location.city}
                />

                <div className='w-full flex justify-between items-start gap-4'>
                  <div className='w-full flex flex-col justify-start items-start'>
                    <Label>Tipo</Label>

                    <Badge className='mt-2 text-sm w-full'>
                      {meterDevice.station.type}
                    </Badge>
                  </div>

                  <div className='w-full flex flex-col justify-start items-start'>
                    <Label>Estatus</Label>

                    <Badge className='mt-2 text-sm w-full'>
                      {meterDevice.station.state}
                    </Badge>
                  </div>
                </div>

                <TextArea
                  id='stationReference'
                  rows={5}
                  tabIndex={9}
                  label='Referencia'
                  value={meterDevice.station.location.address}
                  readOnly
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
