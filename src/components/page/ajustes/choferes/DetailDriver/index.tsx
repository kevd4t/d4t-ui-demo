import { IconId, IconUser } from '@tabler/icons-react'

import type { IDriver } from '@/lib/types'

import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent, CardHeader, CardTitle, Separator } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'

export const DetailDriver = ({ driver }: { driver: IDriver }) => {
  return (
    <>
      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardHeader>
              <Avatar className='w-32 h-32 rounded-sm mx-auto'>
                <AvatarImage src={driver?.photo} className='object-contain' />
                <AvatarFallback className='rounded-md'>
                  <IconUser className='text-zinc-500 w-10 h-10' />
                </AvatarFallback>
              </Avatar>
            </CardHeader>

            <CardContent>
              <h6 className='font-semibold'>Informacion Basica</h6>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Nombres y Apellidos:</span> &nbsp;
                  <span className='dark:text-gray-300'>{driver.names} {driver.surnames}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Telefono:</span> &nbsp;
                  <span className='dark:text-gray-300'>({driver.phone.split('-').slice()[0]}) {driver.phone.split('-').slice()[1]}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Cedula de Identidad:</span> &nbsp;

                  <span className='dark:text-gray-300'>
                    {driver.ci.type.toUpperCase()}-{driver.ci.number}
                  </span>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className={'w-full text-sm h-full py-1.5'}>
                {driver.status}
              </Badge>
            </CardContent>
          </Card>

          <Card className='w-full mt-6'>
            <CardHeader className='pb-4'>
              <h6 className='font-semibold'>Cedula de Identidad</h6>
            </CardHeader>

            <CardContent className='mt-0'>
              {
                driver.ci.image
                  ? (
                    <img
                      src={driver.ci.image}
                      alt='image'
                      className='rounded-md w-140 max-h-[400px] object-contain mx-auto'
                    />
                  )
                  : (
                    <div
                      className='border-gray-300 h-40 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center'
                    >
                      <IconId className='text-zinc-400 w-20 h-20' strokeWidth={1.5} />
                    </div>
                  )
              }

            </CardContent>
          </Card>
        </div>

        <div className='w-full pt-6'>
          <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
            <Card className='p-4 w-full'>
              <CardTitle>Informacion Basica</CardTitle>

              <Separator className='my-4' />

              <section className='w-full space-y-4'>
                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-3 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    id='names'
                    type='text'
                    label='Nombres'
                    placeholder='Kevin Daniel'
                    tabIndex={1}
                    value={driver.names}
                    readOnly
                  />

                  <Input
                    id='surnames'
                    type='text'
                    tabIndex={2}
                    label='Apellidos'
                    value={driver.surnames}
                    placeholder='Blanco Ortiz'
                    readOnly
                  />

                  <Input
                    id='status'
                    type='text'
                    tabIndex={3}
                    label='Apellidos'
                    value={driver.status}
                    placeholder='Blanco Ortiz'
                    readOnly
                  />
                </div>

                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-3 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    id='phone'
                    type='text'
                    tabIndex={4}
                    label='Teléfono'
                    value={driver.phone}
                    readOnly
                  />

                  <Input
                    id='ci'
                    type='text'
                    tabIndex={5}
                    label='Cedula'
                    value={`${driver.ci.type}-${driver.ci.number}`}
                    readOnly
                  />

                  <Input
                    id='licenseType'
                    type='text'
                    tabIndex={6}
                    label='Tipo de Licencia'
                    value={driver.licenseType}
                    readOnly
                  />
                </div>
              </section>
            </Card>
          </div>

          <div className='w-full h-full mt-6 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-6 gap-4'>
            <Card className='p-4 w-full h-full col-span-6 md:col-span-2'>
              <CardTitle>Foto de Perfil</CardTitle>

              <Separator className='my-4' />

              <CardContent className='flex flex-col justify-between items-start pb-0'>
                <img
                  src={driver?.photo}
                  alt={driver.names}
                  className='rounded-md w-140 max-h-[400px] object-contain mx-auto'
                />
              </CardContent>
            </Card>

            <Card className='p-4 w-full col-span-6 md:col-span-4'>
              <CardTitle>Foto de la cedula de identidad</CardTitle>

              <Separator className='my-4' />

              <CardContent className='mt-0 pb-0'>
                <img
                  src={driver?.ci?.image}
                  alt='image'
                  className='rounded-md object-contain m-auto h-full'
                  style={{ width: '-webkit-fill-available' }}
                />
              </CardContent>
            </Card>

          </div>

          <div className='w-full h-full mt-6 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-6 gap-4'>
            <Card className='p-4 w-full col-span-6 md:col-span-3'>
              <CardTitle>Foto de la licencia de condución</CardTitle>

              <Separator className='my-4' />

              <CardContent className='mt-0 pb-0'>
                <img
                  src={driver?.licenseImage}
                  alt='image'
                  className='rounded-md object-contain m-auto h-full'
                  style={{ width: '-webkit-fill-available' }}
                />
              </CardContent>
            </Card>

            <Card className='p-4 w-full col-span-6 md:col-span-3'>
              <CardTitle>Foto del certificado de seguridad</CardTitle>

              <Separator className='my-4' />

              <CardContent className='mt-0 pb-0'>
                <img
                  src={driver?.securityCertificateImage}
                  alt='image'
                  className='rounded-md object-contain m-auto h-full'
                  style={{ width: '-webkit-fill-available' }}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
