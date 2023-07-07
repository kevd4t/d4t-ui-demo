import { IconBadgeAd } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import Zoom from 'react-medium-image-zoom'

import type { IFleet, IFormFieldsCreateFleet } from '@/lib/types'

import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'


export const DetailFleet = ({ fleet }: { fleet: IFleet }) => {
  return (
    <>
      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardContent>
              <h6 className='font-semibold'>Informacion Basica</h6>

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

              <Badge>{ fleet.status }</Badge>
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
                    value={fleet.title}
                  />

                  <Input
                    readOnly
                    id='isActive'
                    type='text'
                    tabIndex={1}
                    label='Nombre'
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
            <CardTitle>Modelos de Medidores</CardTitle>
            <CardDescription>Seleccione un modelo</CardDescription>

            <Separator className='my-4' />

            {/* <ul className={`${fleet.models.length > 1 ? 'grid sm:grid-cols-2 grid-flow-row gap-4' : ''}`}>
              {
                fleet.trucks.map(truck => (
                  <li key={truck.id}>
                    <Card className='max-w-sm mx-auto'>
                      <CardHeader>
                        <CardTitle>{truck.title}</CardTitle>
                      </CardHeader>

                      <CardContent>
                        <Badge>{truck.status}</Badge>

                        <br />
                        <Badge>
                          {truck.}
                        </Badge>
                      </CardContent>
                    </Card>
                  </li>
                ))
              }
            </ul> */}
          </Card>

          <div className='w-full h-full mt-6 flex justify-center items-start'>
            <Card className='p-4 w-full col-span-6 md:col-span-4'>
              <CardTitle>Foto de la Marca</CardTitle>

              <Separator className='my-4' />

              {/* {
                fleet?.image
                  ? (
                    <Zoom>
                      <img
                        src={fleet?.image}
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
              } */}
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
