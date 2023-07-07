import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import ReactCompareImage from 'react-compare-image'
import { IconBadgeAd, IconId } from '@tabler/icons-react'
import Zoom from 'react-medium-image-zoom'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { toast } from 'sonner'

import type { IDataToEditMeterMark, IDataToEditUser, IFetchDataTable, IMeterMark, IUserGroup } from '@/lib/types'
import { userGroupsColumns, userGroupsColumnsToFilter } from '@/lib/utils/tableColumns/user-groups'
import { compressImage } from '@/lib/utils/handleCompressionImage'
import { handleFetchUrlUserGroups } from '@/lib/services/users'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { convertBytes } from '@/lib/utils/formaters'
import { useFetch } from '@/lib/hooks/useFetch'
import { editMeterMarkRules } from './rules'
import { APP_CONFIG } from '@/config'

import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Dialog, DialogContent, DialogHeader, Separator } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { UploadImage } from '@/components/common/uploadImages'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

const { IS_ACTIVE } = APP_CONFIG

export const FormEditMeterMark = ({ meterMark }: { meterMark: IMeterMark }) => {
  const defaultValues: IDataToEditMeterMark = {
    title: meterMark.title,
    description: meterMark.description,
    models: meterMark.models,
    isActive: String(meterMark.isActive) as 'true' | 'false',
    image: meterMark.image
  }

  const initialMeterMarkImage = {
    original: [{ data_url: meterMark.image, file: null }],
    compressed: [{ data_url: meterMark.image, file: null }]
  }

  const initialFullDataUserGroupsSelected = [{ original: [...meterMark.models] }]

  const [fullDataUserGroupsSelected, setFullDataUserGroupsSelected] = useState(initialFullDataUserGroupsSelected)
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableUserGroupsSelected, HandleTableUserGroupsSelected] = useState<RowSelectionState>({})
  const [showComparisons, setShowComparisons] = useState({ markImage: false })
  const [modalInfo, setModalInfo] = useState({ open: false, label: '', illustration: null })
  const [markImage, setMarkImage] = useState(initialMeterMarkImage)
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const [showTableUserGroups, setShowTableUserGroups] = useState(false)
  const form = useForm<IDataToEditMeterMark>({ defaultValues })
  const router = useRouter()

  const { data, error, isLoading: isLoadingUserGroups, fetcher } = useFetch<IFetchDataTable<IUserGroup>>('/api/users/groups')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Usuarios', singularItem: 'Marca' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlUserGroups({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  const onChangeMeterMarkImage = async (imageList, addUpdateIndex) => {
    const imageFile: File = imageList[0]?.file

    if (!imageFile) {
      setMarkImage(prevState => ({
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

    setMarkImage(prevState => ({
      original: [{ data_url: imageList[0]?.data_url, file: imageList[0]?.file }],
      compressed: [{ data_url: data_url?.toString(), file }]
    }))
  }

  const getFullDataSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataUserGroupsSelected(fullDataSelection)
  }

  const handleCloseComparisons = () => {
    if (showComparisons.markImage === true) {
      setShowComparisons(prevState => ({ ...prevState, markImage: false }))
    }
  }

  const onSubmit = async (data: IDataToEditUser) => {
    if (!fullDataUserGroupsSelected?.length) {
      toast.error('El modelo es requerido')
      setLoading({ meessage: '', value: false })
      return
    }

    if (fullDataUserGroupsSelected?.length === 0) {
      toast.error('Seleccione mas 1 o mas modelos')
      setLoading({ meessage: '', value: false })
      return
    }

    if (!markImage.compressed[0]?.data_url) {
      toast.error('La imagen de la marca es requerida')
      setLoading({ meessage: '', value: false })
      return
    }

    if (markImage[0]?.file?.size > APP_CONFIG.FILES_RULES.LIMIT_SIZE['4MB']) {
      toast.error('Solo archivos menos de 4MB')
      setLoading({ meessage: '', value: false })
      return
    }

    setLoading(({ meessage: 'Editando Marca', value: true }))
    setModalInfo(prevState => ({ ...prevState, label: 'Editando Marca', open: true }))
    await simulateFetch(3000)

    const meterMarkFile = markImage[0]?.file

    console.log({
      ...data,
      image: meterMarkFile,
      models: fullDataUserGroupsSelected[0].original
    })

    setModalInfo(prevState => ({ label: 'Marca Editada', open: true, illustration: <Congratulations className='h-72' /> }))
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false })
    setLoading({ meessage: '', value: false })

    router.push('/marcas-de-d-medidores')
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

      <Dialog modal open={showComparisons.markImage} onOpenChange={handleCloseComparisons}>
        <DialogContent aria-modal>
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <ReactCompareImage
              leftImage={markImage.compressed[0]?.data_url}
              leftImageLabel='Comprimido'
              rightImage={markImage.original[0]?.data_url}
              rightImageLabel='Original'
            />
          </div>
        </DialogContent>
      </Dialog>

      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardHeader>
              {
                markImage?.compressed[0]?.data_url
                  ? (
                    <Zoom>
                      <img
                        src={markImage?.compressed[0]?.data_url}
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
                  <span className='dark:text-gray-300'>{form.watch('title')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Descripción:</strong>&nbsp;
                    {form.watch('description')}
                  </p>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className={`w-full text-sm h-full py-1.5 ${IS_ACTIVE[form.watch('isActive')].value ? 'border-2 bg-green-100 border-green-500 text-green-500' : 'border-2 bg-red-100 border-red-500 text-red-500'}`}>
                {form.watch('isActive') === 'true' ? 'Activo' : 'Bloqueado'}
              </Badge>
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
                      id='title'
                      type='text'
                      register={form.register}
                      label='Nombres'
                      placeholder='Kevin Daniel'
                      messageErrors={form.formState.errors}
                      inputErrors={editMeterMarkRules.title}
                      tabIndex={1}
                    />

                    <GenericSelect
                      id='isActive'
                      label='Estado'
                      placeholder='Seleccione un Estado'
                      defaultValue='true'
                      tabIndex={2}
                      fieldControlled={{ control: form.control, rules: editMeterMarkRules.isActive }}
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
                  </div>

                  <div className='w-full'>
                    <TextArea
                      id='description'
                      rows={5}
                      tabIndex={3}
                      label='Descripción'
                      register={form.register}
                      placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium ipsum natus possimus amet reprehenderit veritatis eum deserunt labore quidem.'
                      messageErrors={form.formState.errors}
                      inputErrors={editMeterMarkRules.description}
                    />
                  </div>
                </section>
              </Card>
            </div>
          </form>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle className='w-full flex flex-row justify-between items-center'>
              <div>Modelos de GPS</div>

              <Button onClick={() => setShowTableUserGroups(prevState => !prevState)}>
                { showTableUserGroups ? 'Cancelar' : 'Cambiar Modelo' }
              </Button>
            </CardTitle>

            <Separator className='my-4' />

            {
              showTableUserGroups
                ? (
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
                )
                : (
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
                )
            }
          </Card>

          <div className='w-full h-full mt-6 flex justify-center items-start'>
            <Card className='p-4 w-full col-span-6 md:col-span-4'>
              <CardTitle>Foto de la Marca</CardTitle>

              <Separator className='my-4' />

              <CardContent className='mt-0 pb-0'>
                <UploadImage
                  zoom
                  emptyClassName='h-[285px]'
                  onChange={onChangeMeterMarkImage}
                  imageToUpload={markImage.compressed}
                  uploadLabel='Cargar imagen de la marca'
                  tabIndexs={{ upload: 13, change: 13, delete: 14 }}
                  icons={{ placeholder: <IconId className='text-zinc-400 w-14 h-14' strokeWidth={1.5} /> }}
                  compress={{ openComparisons: () => setShowComparisons(prevStatus => ({ ...prevStatus, markImage: true })) }}
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
              Editar Marca
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
