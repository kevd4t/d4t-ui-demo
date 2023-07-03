import { IconId, IconUser } from '@tabler/icons-react'

import type { IUserDetail } from '@/lib/types'
import { APP_CONFIG } from '@/config'

import { Avatar, AvatarFallback, AvatarImage, Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'
import { formatCI, formatPhone } from '@/lib/utils/formaters'

const { ROLES_DIC: ROLES } = APP_CONFIG

export const DetailUser = ({ user }: { user: IUserDetail }) => {
  return (
    <>
      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardHeader>
              <Avatar className='w-32 h-32 rounded-sm mx-auto'>
                <AvatarImage src={user.photo} className='object-contain' />
                <AvatarFallback className='rounded-md'>
                  <IconUser className='text-zinc-500 w-10 h-10' />
                </AvatarFallback>
              </Avatar>
            </CardHeader>

            <CardContent>
              <h6 className='font-semibold'>Informacion Basica</h6>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Username:</span> &nbsp;
                  <span className='dark:text-gray-300'>{user.names} {user.surnames}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Telefono:</span> &nbsp;
                  <span className='dark:text-gray-300'>({formatPhone(user.phone).codeLine}) {formatPhone(user.phone).number}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Email:</span> &nbsp;
                  <span className='dark:text-gray-300'>{user.email}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Cedula de Identidad:</span> &nbsp;

                  <span className='dark:text-gray-300'>
                    {`${user?.ci?.type.toUpperCase()}-`}{user?.ci?.number}
                  </span>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className={`w-full text-sm h-full py-1.5 ${user.isActive ? 'border-2 bg-green-100 border-green-500 text-green-500' : 'border-2 bg-red-100 border-red-500 text-red-500'}`}>
                {user.isActive ? 'Activo' : 'Bloqueado'}
              </Badge>

              <Separator className='my-2' />

              <Badge className='w-full text-sm h-full py-1.5'>
                {ROLES[user.role].label}
              </Badge>
            </CardContent>
          </Card>

          <Card className='w-full mt-6'>
            <CardHeader className='pb-4'>
              <h6 className='font-semibold'>Cedula de Identidad</h6>
            </CardHeader>

            <CardContent className='mt-0'>
              {
                user?.ci?.image
                  ? (
                    <img
                      src={user?.ci?.image}
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
          <form autoFocus className='w-full'>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
              <Card className='p-4 w-full'>
                <CardTitle>Informacion Basica</CardTitle>

                <Separator className='my-4' />

                <section className='w-full space-y-4'>
                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <Input
                      id='names'
                      type='text'
                      readOnly
                      tabIndex={1}
                      label='Nombres'
                      value={user.names}
                      classNameContainer='w-full'
                    />

                    <Input
                      id='surnames'
                      type='text'
                      readOnly
                      tabIndex={2}
                      label='Apellidos'
                      classNameContainer='w-full'
                      value={user.surnames}
                    />
                  </div>

                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <Input
                      id='username'
                      type='text'
                      readOnly
                      tabIndex={3}
                      label='Nombre de Usuario'
                      classNameContainer='w-full'
                      value={user.username}
                    />

                    <div className='w-full flex justify-start items-end gap-x-2'>
                      <Input
                        id='phoneCode'
                        type='text'
                        readOnly
                        tabIndex={4}
                        label='Telefono'
                        classNameContainer='w-[90px]'
                        value={formatPhone(user.phone).codeLine}
                      />

                      <Input
                        id='phoneNumber'
                        type='text'
                        readOnly
                        tabIndex={5}
                        classNameContainer='w-full'
                        value={formatPhone(user.phone).number}
                      />
                    </div>
                  </div>

                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <div className='w-full flex justify-start items-end gap-x-2'>
                      <Input
                        id='ciType'
                        type='text'
                        readOnly
                        tabIndex={6}
                        label='Cedula'
                        classNameContainer='w-[80px]'
                        value={user.ci.type}
                      />

                      <Input
                        id='ciNumber'
                        type='text'
                        readOnly
                        tabIndex={7}
                        classNameContainer='w-full'
                        value={formatCI(user.ci.number)}
                      />
                    </div>

                    <Input
                      id='email'
                      type='text'
                      readOnly
                      tabIndex={8}
                      value={user.email}
                      label='Correo Electronico'
                      classNameContainer='w-full'
                    />
                  </div>
                </section>
              </Card>
            </div>

            <Card className='p-4 mt-6 w-full'>
              <CardTitle>Rol y Estado</CardTitle>

              <Separator className='my-4' />

              <section className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <Input
                  id='role'
                  type='text'
                  label='Rol'
                  readOnly
                  tabIndex={9}
                  classNameContainer='w-full'
                  value={ROLES[user.role].label}
                />

                <Input
                  id='isActive'
                  type='text'
                  label='Estado'
                  readOnly
                  tabIndex={10}
                  classNameContainer='w-full'
                  value={`${user.isActive ? 'Activo' : 'Bloqueado'}`}
                />
              </section>
            </Card>
          </form>

          <Card className='p-4 mt-6 w-full' tabIndex={11}>
            <CardTitle>Grupo de Usuarios</CardTitle>

            <Separator className='my-4' />

            <Card className='max-w-sm mx-auto'>
              <CardHeader>
                <CardTitle>{user.group.title}</CardTitle>
                <CardDescription>{user.group.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Badge>{user.group.isActive ? 'Activo' : 'Bloqueado'}</Badge>

                <br />

                {
                  user.group.moduleAccess.map(access => (
                    <Badge key={access}>
                      {access}
                    </Badge>
                  ))
                }
              </CardContent>
            </Card>
          </Card>

          <div className='w-full h-full mt-6 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-6 gap-4'>
            <Card className='p-4 w-full h-full col-span-6 md:col-span-2'>
              <CardTitle>Foto de Perfil</CardTitle>

              <Separator className='my-4' />

              <CardContent className='flex flex-col justify-between items-start pb-0'>
                <img
                  src={user.photo}
                  alt={`${user.names} ${user.surnames}`}
                  tabIndex={12}
                />
              </CardContent>
            </Card>

            <Card className='p-4 w-full col-span-6 md:col-span-4'>
              <CardTitle>Foto de la Cedula de Identidad</CardTitle>

              <Separator className='my-4' />

              <CardContent className='mt-0 pb-0'>
                <img
                  src={user?.ci?.image}
                  alt={`${user.names} ${user.surnames}`}
                  tabIndex={13}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
