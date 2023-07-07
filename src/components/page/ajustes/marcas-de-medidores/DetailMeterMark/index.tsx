import { IconBadgeAd } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import Zoom from 'react-medium-image-zoom'

import type { ICreateMeterMark, IMeterMark } from '@/lib/types'
import { APP_CONFIG } from '@/config'

import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

const { IS_ACTIVE } = APP_CONFIG

const defaultValues: ICreateMeterMark = {
  title: '',
  description: '',
  isActive: 'true'
}

export const DetailMeterMark = ({ meterMark }: { meterMark: IMeterMark }) => {
  const formMeterMark = useForm<ICreateMeterMark>({ defaultValues })

  return (
    <>
      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardHeader>
              {
                meterMark?.image
                  ? (
                    <Zoom>
                      <img
                        src={meterMark?.image}
                        alt='image'
                        className='rounded-md w-140 max-h-[400px] object-contain mx-auto'
                      />
                    </Zoom>
                  )
                  : (
                    <div
                      className='border-gray-300 h-40 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center'
                    >
                      <IconBadgeAd className='text-zinc-400 w-20 h-20' strokeWidth={1.5} />
                    </div>
                  )
              }
            </CardHeader>

            <CardContent>
              <h6 className='font-semibold'>Informacion Basica</h6>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Nombre:</span> &nbsp;
                  <span className='dark:text-gray-300'>{meterMark.title}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Descripción:</strong>&nbsp;
                    {meterMark.description}
                  </p>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className={`w-full text-sm h-full py-1.5 ${IS_ACTIVE[formMeterMark.watch('isActive')].value ? 'border-2 bg-green-100 border-green-500 text-green-500' : 'border-2 bg-red-100 border-red-500 text-red-500'}`}>
                {formMeterMark.watch('isActive') === 'true' ? 'Activo' : 'Bloqueado'}
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
                    label='Nombre'
                    value={meterMark.title}
                  />

                  <Input
                    readOnly
                    id='isActive'
                    type='text'
                    tabIndex={1}
                    label='Nombre'
                    value={meterMark.isActive ? 'Activo' : 'Bloqueado'}
                  />
                </div>

                <TextArea
                  rows={5}
                  readOnly
                  tabIndex={3}
                  id='description'
                  label='Descripción'
                  value={meterMark.description}
                />
              </section>
            </Card>
          </div>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Modelos de Medidores</CardTitle>
            <CardDescription>Seleccione un modelo</CardDescription>

            <Separator className='my-4' />

            <ul className={`${meterMark.models.length > 1 ? 'grid sm:grid-cols-2 grid-flow-row gap-4' : ''}`}>
              {
                meterMark.models.map(model => (
                  <li key={model.id}>
                    <Card className='max-w-sm mx-auto'>
                      <CardHeader>
                        <CardTitle>{model.title}</CardTitle>
                        <CardDescription>{model.description}</CardDescription>
                      </CardHeader>

                      <CardContent>
                        <Badge>{model.isActive ? 'Activo' : 'Bloqueado'}</Badge>

                        <br />
                        <Badge>
                          {model.type}
                        </Badge>
                      </CardContent>
                    </Card>
                  </li>
                ))
              }
            </ul>
          </Card>

          <div className='w-full h-full mt-6 flex justify-center items-start'>
            <Card className='p-4 w-full col-span-6 md:col-span-4'>
              <CardTitle>Foto de la Marca</CardTitle>

              <Separator className='my-4' />

              {
                meterMark?.image
                  ? (
                    <Zoom>
                      <img
                        src={meterMark?.image}
                        alt='image'
                        className='rounded-md w-140 max-h-[400px] object-contain mx-auto'
                      />
                    </Zoom>

                  )
                  : (
                    <div
                      className='border-gray-300 h-80 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center'
                    >
                      <IconBadgeAd className='text-zinc-400 w-20 h-20' strokeWidth={1.5} />
                    </div>
                  )
              }
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
