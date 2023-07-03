import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import { IconId, IconUser } from '@tabler/icons-react'
import ReactCompareImage from 'react-compare-image'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { toast } from 'sonner'

import { userGroupsColumns, userGroupsColumnsToFilter } from '@/lib/utils/tableColumns/user-groups'
import type { IDataToCreateUser, IFetchDataTable, IUserGroup } from '@/lib/types'
import { convertBytes, formatCI, formatPhoneNumber } from '@/lib/utils/formaters'
import { compressImage } from '@/lib/utils/handleCompressionImage'
import { handleOnlyNumbers } from '@/lib/utils/handleOnlyNumbers'
import { handleFetchUrlUserGroups } from '@/lib/services/users'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { useFetch } from '@/lib/hooks/useFetch'
import { APP_CONFIG } from '@/config'
import { userRules } from './rules'

import { Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, CardContent, CardHeader, CardTitle, Dialog, DialogContent, DialogHeader, Separator } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { UploadImage } from '@/components/common/uploadImages'
import { GenericCombobox } from '@/components/common/combox'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { UploadUserPhoto } from './UploadUserPhoto'

const { PHONE_LINE_CODES, CI_TYPES, ROLES_DIC: ROLES, IS_ACTIVE } = APP_CONFIG

const defaultValues: IDataToCreateUser = {
  names: '',
  surnames: '',
  username: '',
  phoneCode: PHONE_LINE_CODES.DIGITAL[0].value,
  phoneNumber: '',
  ciType: 'v',
  ciNumber: '',
  email: '',
  isActive: 'true',
  role: 'OPERATOR'
}

const initialImageValues = {
  original: [],
  compressed: []
}

export const FormCreateUser = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableUserGroupsSelected, HandleTableUserGroupsSelected] = useState<RowSelectionState>({})
  const [showComparisons, setShowComparisons] = useState({ userPhoto: false, ciImage: false })
  const [modalInfo, setModalInfo] = useState({ open: false, label: '', illustration: null })
  const [fullDataUserGroupsSelected, setFullDataUserGroupsSelected] = useState([])
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const [userPhoto, setUserPhoto] = useState(initialImageValues)
  const [ciImage, setCIImage] = useState(initialImageValues)
  const form = useForm<IDataToCreateUser>({ defaultValues })
  const router = useRouter()

  const { data, error, isLoading: isLoadingUserGroups, fetcher } = useFetch<IFetchDataTable<IUserGroup>>('/api/users/groups')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Usuarios', singularItem: 'Usuario' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlUserGroups({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  const onChangeImageCI = async (imageList, addUpdateIndex) => {
    const imageFile: File = imageList[0]?.file

    if (!imageFile) {
      setCIImage(prevState => ({
        original: [{ ...prevState.original[0] }],
        compressed: []
      }))

      return
    }

    const { data_url, file } = await compressImage({ imageFile, quality: 10, maxWidth: 200, maxHeight: 200 })

    console.log({
      original: convertBytes(imageList[0]?.file?.size),
      compressed: convertBytes(file.size)
    })

    setCIImage(prevState => ({
      original: [{ data_url: imageList[0]?.data_url, file: imageList[0]?.file }],
      compressed: [{ data_url: data_url?.toString(), file }]
    }))
  }

  const onChangeUserPhoto = async (imageList, addUpdateIndex) => {
    const imageFile: File = imageList[0]?.file

    if (!imageFile) {
      setUserPhoto(prevState => ({
        original: [{ ...prevState.original[0] }],
        compressed: []
      }))

      return
    }

    const { data_url, file } = await compressImage({ imageFile, quality: 10, maxWidth: 200, maxHeight: 200 })

    console.log({
      original: convertBytes(imageList[0]?.file?.size),
      compressed: convertBytes(file.size)
    })

    setUserPhoto(prevState => ({
      original: [{ data_url: imageList[0]?.data_url, file: imageList[0]?.file }],
      compressed: [{ data_url: data_url?.toString(), file }]
    }))
  }

  const getFullDataSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataUserGroupsSelected(fullDataSelection)
  }

  const handleOnKeyUpCI = (event) => {
    const { value } = event.target

    const ciFormmated = formatCI(value)

    form.setValue('ciNumber', ciFormmated)
  }

  const handleOnKeyUpPhoneNumber = (event) => {
    const { value } = event.target

    const phoneNumberFormated = formatPhoneNumber(value)

    form.setValue('phoneNumber', phoneNumberFormated)
  }

  const getAllUserRoles = () => {
    return Object.entries(APP_CONFIG.ROLES_DIC).flatMap(role => ({ label: role[1].label, value: role[1].key }))
  }

  const formatCodePhoneLines = () => {
    const allCodeLines = [...PHONE_LINE_CODES.DIGITAL, ...PHONE_LINE_CODES.MOVILNET, ...PHONE_LINE_CODES.MOVISTAR]
    return allCodeLines
  }

  const formatCITypes = () => {
    const allCITypes = [CI_TYPES.VENEZUELAN, CI_TYPES.JURIDICAL, CI_TYPES.FOREIGN, CI_TYPES.PASSPORT, CI_TYPES.GOVERNMENTAL]
    const allTypesCIFormated = allCITypes.map(ciType => ({ label: ciType.key, value: ciType.key.toLowerCase() }))
    return allTypesCIFormated
  }

  const handleCloseComparisons = () => {
    if (showComparisons.ciImage === true) {
      setShowComparisons(prevState => ({ ...prevState, ciImage: false }))
    }

    if (showComparisons.userPhoto === true) {
      setShowComparisons(prevState => ({ ...prevState, userPhoto: false }))
    }
  }

  const onSubmit = async (data: IDataToCreateUser) => {
    if (!fullDataUserGroupsSelected?.length) {
      toast.error('El Grupo Es Requerido')
      setLoading({ meessage: '', value: false })
      return
    }

    if (fullDataUserGroupsSelected?.length > 1) {
      toast.error('Seleccione Solo 1 Grupo')
      setLoading({ meessage: '', value: false })
      return
    }

    if (!userPhoto || !userPhoto[0]) {
      toast.error('La Foto de Perfil es requerida')
      setLoading({ meessage: '', value: false })
      return
    }

    if (userPhoto[0]?.file?.size > APP_CONFIG.FILES_RULES.LIMIT_SIZE) {
      toast.error('Solo archivos menos de 10MB')
      setLoading({ meessage: '', value: false })
      return
    }

    if (!ciImage || !ciImage[0]) {
      toast.error('La Foto de la Cedula es requerida')
      setLoading({ meessage: '', value: false })
      return
    }

    if (ciImage[0]?.file?.size > APP_CONFIG.FILES_RULES.LIMIT_SIZE) {
      toast.error('Solo archivos menos de 10MB')
      setLoading({ meessage: '', value: false })
      return
    }

    setLoading(({ meessage: 'Creando Usuario', value: true }))
    setModalInfo(prevState => ({ ...prevState, label: 'Creando Usuario', open: true }))
    await simulateFetch(3000)

    const ciImageFile = ciImage[0]?.file
    const userPhotoFile = userPhoto[0]?.file

    console.log({
      ...data,
      phone: `${data.phoneCode}${data.phoneNumber}`.replace(/\s/g, ''),
      ci: `${data.ciType.toUpperCase()}${data.ciNumber}`.replaceAll('.', ''),
      ciImage: ciImageFile,
      photo: userPhotoFile,
      group: fullDataUserGroupsSelected[0].original
    })

    setModalInfo(prevState => ({ label: 'Usuario Creado', open: true, illustration: <Congratulations className='h-72' /> }))
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false })
    setLoading({ meessage: '', value: false })

    router.push('/usuarios/23')
  }

  return (
    <>
      <Dialog modal open={modalInfo.open}>
        <DialogContent aria-modal>
          <DialogHeader>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              {loading.value && <WomanLoading className='w-72' />}
              {modalInfo.illustration}

              <div className='flex'>
                <h5 className='font-bold text-4xl'>{modalInfo.label}</h5>
                {loading.value && <div className='dot-flashing mt-6 ml-5'></div>}
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog modal open={showComparisons.ciImage} onOpenChange={handleCloseComparisons}>
        <DialogContent aria-modal>
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <ReactCompareImage
              leftImage={ciImage.compressed[0]?.data_url}
              leftImageLabel='Comprimido'
              rightImage={ciImage.original[0]?.data_url}
              rightImageLabel='Original'
            />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog modal open={showComparisons.userPhoto} onOpenChange={handleCloseComparisons}>
        <DialogContent aria-modal>
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <ReactCompareImage
              leftImage={userPhoto.compressed[0]?.data_url}
              leftImageLabel='Comprimido'
              rightImage={userPhoto.original[0]?.data_url}
              rightImageLabel='Original'
            />
          </div>
        </DialogContent>
      </Dialog>

      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardHeader>
              <Avatar className='w-32 h-32 rounded-sm mx-auto'>
                <AvatarImage src={userPhoto?.compressed[0]?.data_url} className='object-contain' />
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
                  <span className='dark:text-gray-300'>{form.watch('names')} {form.watch('surnames')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Telefono:</span> &nbsp;
                  <span className='dark:text-gray-300'>({form.watch('phoneCode')}) {form.watch('phoneNumber')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Email:</span> &nbsp;
                  <span className='dark:text-gray-300'>{form.watch('email')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Cedula de Identidad:</span> &nbsp;

                  <span className='dark:text-gray-300'>
                    {form.watch('ciType') && `${form.watch('ciType').toUpperCase()}-` }{form.watch('ciNumber')}
                  </span>
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
                ciImage?.compressed[0]?.data_url
                  ? (
                    <img
                      src={ciImage?.compressed[0]?.data_url}
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
          <form onSubmit={form.handleSubmit(onSubmit)} autoFocus className='w-full'>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
              <Card className='p-4 w-full'>
                <CardTitle>Informacion Basica</CardTitle>

                <Separator className='my-4' />

                <section className='w-full space-y-4'>
                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
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

                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
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

                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <div className='w-full flex justify-start items-end gap-x-2'>
                      <GenericCombobox
                        id='ciType'
                        form={form}
                        tabIndex={6}
                        label='Cedula'
                        defaultValue='v'
                        placeholder='Buscar...'
                        ctaPlaceholder='Tipo'
                        buttonClassName='w-[80px]'
                        popoverClassName='w-[90px]'
                        notFoundLabel='Codigo No Encontrado'
                        items={formatCITypes()}
                      />

                      <Input
                        id='ciNumber'
                        type='text'
                        tabIndex={7}
                        maxLength={10}
                        placeholder='00.000.000'
                        register={form.register}
                        onKeyUp={handleOnKeyUpCI}
                        inputErrors={userRules.ci}
                        onKeyPress={handleOnlyNumbers}
                        messageErrors={form.formState.errors}
                      />
                    </div>

                    <Input
                      id='email'
                      type='email'
                      tabIndex={8}
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
              <CardTitle>Rol y Estado</CardTitle>

              <Separator className='my-4' />

              <section className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <GenericSelect
                  id='role'
                  label='Rol'
                  tabIndex={9}
                  placeholder='Seleccione un Rol'
                  defaultValue='OPERATOR'
                  fieldControlled={{ control: form.control, rules: userRules.role }}
                  className='w-full'
                  items={getAllUserRoles()}
                />

                <GenericSelect
                  id='isActive'
                  label='Estado'
                  placeholder='Seleccione un Estado'
                  defaultValue='true'
                  tabIndex={10}
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
          </form>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Grupos de Usuarios</CardTitle>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={data?.results}
              pagination={pagination}
              columns={userGroupsColumns}
              itemsToFilter={userGroupsColumnsToFilter}
              queryInfo={{ isFetching: isLoadingUserGroups, error }}
              inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Grupo de Usuarios' }}
              selection={{
                rowSelection: tableUserGroupsSelected,
                setRowSelection: HandleTableUserGroupsSelected,
                getFullDataSelection
              }}
            />
          </Card>

          <div className='w-full h-full mt-6 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-6 gap-4'>
            <Card className='p-4 w-full h-full col-span-6 md:col-span-2'>
              <CardTitle>Foto de Perfil</CardTitle>

              <Separator className='my-4' />

              <CardContent className='flex flex-col justify-between items-start pb-0'>
                <UploadUserPhoto
                  zoom
                  imageToUpload={userPhoto.compressed}
                  onChange={onChangeUserPhoto}
                  compress={{ openComparisons: () => setShowComparisons(prevStatus => ({ ...prevStatus, userPhoto: true })) }}
                  tabIndexs={{
                    upload: 11,
                    change: 11,
                    delete: 12
                  }}
                />
              </CardContent>
            </Card>

            <Card className='p-4 w-full col-span-6 md:col-span-4'>
              <CardTitle>Foto de la Cedula de Identidad</CardTitle>

              <Separator className='my-4' />

              <CardContent className='mt-0 pb-0'>
                <UploadImage
                  zoom
                  emptyClassName='h-[285px]'
                  onChange={onChangeImageCI}
                  imageToUpload={ciImage.compressed}
                  uploadLabel='Cargar Cedula de Identidad'
                  tabIndexs={{ upload: 13, change: 13, delete: 14 }}
                  icons={{ placeholder: <IconId className='text-zinc-400 w-14 h-14' strokeWidth={1.5} /> }}
                  compress={{ openComparisons: () => setShowComparisons(prevStatus => ({ ...prevStatus, ciImage: true })) }}
                />
              </CardContent>
            </Card>
          </div>

          <section className='w-full flex justify-between items-start mt-6 gap-x-6'>
            <Button variant='outline' tabIndex={15} type='button' className='w-full py-2 text-base'>
              Cancelar
            </Button>

            <Button
              type='submit'
              tabIndex={16}
              className='w-full py-2 text-base'
              isLoading={loading.value}
              onClick={form.handleSubmit(onSubmit)}
            >
              Crear Usuario
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
