import { useForm } from 'react-hook-form'

import type { TRole } from '@/lib/types'

import { Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, CardContent, CardHeader, CardTitle, Separator } from '@/components/ui'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { userRules } from './rules'
import { formatCI, formatPhoneNumber } from '@/lib/utils/formaters'
import { handleOnlyNumbers } from '@/lib/utils/handleOnlyNumbers'
import { GenericCombobox } from '@/components/common/combox'
import { APP_CONFIG } from '@/config'
import { UploadImage } from '@/components/common/uploadImages'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'sonner'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { IconId } from '@tabler/icons-react'
import { UploadUserPhoto } from './UploadUserPhoto'

const { PHONE_LINE_CODES, ROLES_DIC: ROLES, IS_ACTIVE } = APP_CONFIG

interface IDataToCreateUser {
  names: string
  surnames: string
  username: string
  phoneCode: string
  phoneNumber: string
  ci: string
  email: string
  isActive: 'true' | 'false'
  role: TRole
}

const defaultValues: IDataToCreateUser = {
  names: '',
  surnames: '',
  username: '',
  phoneCode: PHONE_LINE_CODES.DIGITAL[0].value,
  phoneNumber: '',
  ci: '',
  email: '',
  isActive: 'true',
  role: 'OPERATOR'
}

export const FormCreateUser = () => {
  const [imageToUpload, setImageToUpload] = useState([])
  const [userPhoto, setUserPhoto] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<IDataToCreateUser>({ defaultValues })
  const router = useRouter()

  const onChangeImageCI = (imageList, addUpdateIndex) => {
    console.log(imageList[0], addUpdateIndex)
    setImageToUpload(imageList)
  }

  const onChangeUserPhoto = (imageList, addUpdateIndex) => {
    console.log(imageList[0], addUpdateIndex)
    setUserPhoto(imageList)
  }

  const onSubmit = async (data: IDataToCreateUser) => {
    setIsLoading(true)

    console.log({ data })
    if (!imageToUpload || !imageToUpload[0]) {
      toast.error('La imagen es requerida')
      setIsLoading(false)
      return
    }

    if (imageToUpload[0]?.file?.size > APP_CONFIG.FILES_RULES.LIMIT_SIZE) {
      toast.error('Solo archivos menos de 10MB')
      setIsLoading(false)
      return
    }

    const singleImage = imageToUpload[0]?.file
    console.log({ singleImage })
    setIsLoading(false)
  }

  const handleOnKeyUpCI = (event) => {
    const { value } = event.target

    const ciFormmated = formatCI(value)

    form.setValue('ci', ciFormmated)
  }

  const handleOnKeyUpPhoneNumber = (event) => {
    const { value } = event.target

    const phoneNumberFormated = formatPhoneNumber(value)

    form.setValue('phoneNumber', phoneNumberFormated)
  }

  const formatCodePhoneLines = () => {
    const allCodeLines = [...PHONE_LINE_CODES.DIGITAL, ...PHONE_LINE_CODES.MOVILNET, ...PHONE_LINE_CODES.MOVISTAR]
    return allCodeLines
  }

  if (isLoading) {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Cargando...</h5>
      </div>
    )
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className='w-full h-full flex justify-start items-start gap-x-10' autoFocus>
      <div className='max-w-xs w-full flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
        <Card className='w-full sticky top-0 left-0'>
          <CardHeader>
            <Avatar className='w-20 h-20 rounded-sm mx-auto'>
              <AvatarImage src='#' />
              <AvatarFallback className='rounded-md'>USER</AvatarFallback>
            </Avatar>
          </CardHeader>

          <CardContent className='mt-0'>
            <h6 className='font-semibold'>Informacion Basica</h6>

            <ul className='mt-2'>
              <li className='flex justify-start items-center text-sm text-primary-gray'>
                <span className='font-semibold dark:text-white'>Username:</span> &nbsp;
                <span className='dark:text-gray-300'>{form.watch('names')} {form.watch('surnames')}</span>
              </li>

              <li className='flex justify-start items-center text-sm text-primary-gray'>
                <span className='font-semibold dark:text-white'>Telefono:</span> &nbsp;
                <span className='dark:text-gray-300'>{form.watch('phoneCode')} {form.watch('phoneNumber')}</span>
              </li>

              <li className='flex justify-start items-center text-sm text-primary-gray'>
                <span className='font-semibold dark:text-white'>Correo Electronico:</span> &nbsp;
                <span className='dark:text-gray-300'>{form.watch('email')}</span>
              </li>

              <li className='flex justify-start items-center text-sm text-primary-gray'>
                <span className='font-semibold dark:text-white'>Cedula de Identidad:</span> &nbsp;
                <span className='dark:text-gray-300'>{form.watch('ci')}</span>
              </li>
            </ul>

            <Separator className='my-2' />

            <Badge className={`w-full text-sm h-full py-1.5 ${IS_ACTIVE[form.watch('isActive')].value ? 'border-2 bg-green-100 border-green-500 text-green-500' : 'border-2 bg-red-100 border-red-500 text-red-500'}`}>
              {form.watch('isActive') === 'true' ? 'Activo' : 'Bloqueado'}
            </Badge>

            <Separator className='my-2' />

            <Badge className='w-full text-sm h-full py-1.5'>
              {ROLES[form.watch('role')].label}
            </Badge>
          </CardContent>
        </Card>

        <Card className='w-full mt-6'>
          <CardHeader className='pb-4'>
            <h6 className='font-semibold'>Cedula de Identidad</h6>
          </CardHeader>

          <CardContent className='mt-0'>
            {
              imageToUpload[0]?.data_url
                ? (
                  <img
                    src={imageToUpload[0]?.data_url}
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
          <Card className='w-full xl:w-1/3 min-w-[230px] h-full xl:h-[333px]'>
            <CardHeader className='pb-4'>
              <h6 className='font-semibold'>Foto de Perfil</h6>
            </CardHeader>

            <CardContent className='flex flex-col justify-between items-start xl:pb-2 h-[190px]'>
              <UploadUserPhoto imageToUpload={userPhoto} onChange={onChangeUserPhoto} />
            </CardContent>
          </Card>

          <Card className='p-4 w-full'>
            <CardTitle>Informacion Basica</CardTitle>

            <Separator className='my-4' />

            <section className='w-full space-y-4'>
              <div className='w-full flex justify-between items-start gap-x-5'>
                <Input
                  id='names'
                  type='text'
                  register={form.register}
                  label='Nombres'
                  placeholder='Kevin Daniel'
                  messageErrors={form.formState.errors}
                  inputErrors={userRules.names}
                  tabIndex={1}
                />

                <Input
                  id='surnames'
                  type='text'
                  tabIndex={2}
                  label='Apellidos'
                  register={form.register}
                  placeholder='Blanco Ortiz'
                  inputErrors={userRules.surnames}
                  messageErrors={form.formState.errors}
                />
              </div>

              <div className='w-full flex justify-between items-end gap-x-5'>
                <Input
                  id='username'
                  type='text'
                  tabIndex={3}
                  register={form.register}
                  label='Nombre de Usuario'
                  placeholder='k-user_name.47'
                  inputErrors={userRules.username}
                  messageErrors={form.formState.errors}
                />

                <div className='w-full flex justify-start items-end gap-x-2'>
                  <GenericCombobox
                    id='phoneCode'
                    form={form}
                    tabIndex={4}
                    label='Telefono'
                    defaultValue='0412'
                    placeholder='Buscar...'
                    ctaPlaceholder='Codigo'
                    buttonClassName='w-[90px]'
                    popoverClassName='w-[130px]'
                    items={formatCodePhoneLines()}
                    notFoundLabel='Codigo No Encontrado'
                  />

                  <Input
                    id='phoneNumber'
                    prefix='+58'
                    type='text'
                    tabIndex={5}
                    maxLength={7}
                    placeholder='0000000'
                    register={form.register}
                    onKeyPress={handleOnlyNumbers}
                    onKeyUp={handleOnKeyUpPhoneNumber}
                    inputErrors={userRules.phoneNumber}
                    messageErrors={form.formState.errors}
                  />
                </div>
              </div>

              <div className='w-full flex justify-between items-start gap-x-5'>
                <Input
                  id='ci'
                  tabIndex={6}
                  maxLength={10}
                  placeholder='00.000.000'
                  register={form.register}
                  onKeyUp={handleOnKeyUpCI}
                  inputErrors={userRules.ci}
                  label='Cedula de Identidad'
                  onKeyPress={handleOnlyNumbers}
                  messageErrors={form.formState.errors}
                />

                <Input
                  id='email'
                  type='email'
                  tabIndex={7}
                  register={form.register}
                  label='Correo Electronico'
                  placeholder='user@gmail.com'
                  inputErrors={userRules.email}
                  messageErrors={form.formState.errors}
                />
              </div>
            </section>
          </Card>
        </div>

        <Card className='p-4 mt-6 w-full'>
          <CardTitle>Foto de la Cedula de Identidad</CardTitle>

          <Separator className='my-4' />

          <CardContent className='mt-0'>
            <UploadImage onChange={onChangeImageCI} imageToUpload={imageToUpload} emptyClassName='h-[476px]' />
          </CardContent>
        </Card>

        <Card className='p-4 mt-6 w-full'>
          <CardTitle>Rol y Estado</CardTitle>

          <Separator className='my-4' />

          <section className='w-full flex justify-start items-center gap-x-5'>
            <GenericSelect
              id='role'
              label='Rol'
              tabIndex={8}
              placeholder='Seleccione un Rol'
              defaultValue='OPERATOR'
              fieldControlled={{ control: form.control, rules: userRules.role }}
              className='w-full'
              items={[
                {
                  label: 'Operador',
                  value: 'OPERATOR'
                },
                {
                  label: 'Coordinador',
                  value: 'COORDINATOR'
                },
                {
                  label: 'Supervisor',
                  value: 'SUPERVISOR'
                },
                {
                  label: 'Adminsitrador',
                  value: 'ADMINISTRATOR'
                }
              ]}
            />

            <GenericSelect
              id='isActive'
              label='Estado'
              placeholder='Seleccione un Estado'
              defaultValue='true'
              tabIndex={9}
              fieldControlled={{ control: form.control, rules: userRules.isActive }}
              items={[
                {
                  label: 'Activo',
                  value: true
                },
                {
                  label: 'Bloqueado',
                  value: false
                }
              ]}
            />
          </section>
        </Card>

        <Button tabIndex={10} type='submit' className='mt-2 w-full py-2 text-base'>
          Crear Usuario
        </Button>
      </div>
    </form>
  )
}
