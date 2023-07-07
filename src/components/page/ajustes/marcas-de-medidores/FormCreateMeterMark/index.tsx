import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import { IconBadgeAd, IconId, IconRouter } from '@tabler/icons-react'
import ReactCompareImage from 'react-compare-image'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { toast } from 'sonner'

import type { ICreateMeterMark, ICreateMeterModel, IFetchDataTable, IMeterModel, ReactNode } from '@/lib/types'
import { compressImage } from '@/lib/utils/handleCompressionImage'
import { handleFetchUrlUserGroups } from '@/lib/services/users'
import { convertBytes } from '@/lib/utils/formaters'
import { useFetch } from '@/lib/hooks/useFetch'
import { meterMarkRules, meterModelRules } from './rules'
import { APP_CONFIG } from '@/config'

import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Separator } from '@/components/ui'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { UploadImage } from '@/components/common/uploadImages'
import { GenericSelect } from '@/components/common/selects'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { meterModelColumns, meterModelColumnsToFilter } from '@/lib/utils/tableColumns/meterModels'

const { IS_ACTIVE } = APP_CONFIG

const defaultValues: ICreateMeterMark = {
  title: '',
  description: '',
  isActive: 'true'
}

const initialImageValues = { original: [], compressed: [] }

interface IModalState {
  open: boolean
  label: string
  illustration?: ReactNode
  type: 'CREATE_METER_MODEL' | 'COMPARISON_MARK_IMAGE' | 'CREATING_METER_MARK' | 'METER_MARK_CREATED' | 'CREATING_METER_MODEL' | 'METER_MODEL_CREATED'
}

export const FormCreateMeterMark = () => {
  const [modalInfo, setModalInfo] = useState<IModalState>({ open: false, label: '', illustration: null, type: null })
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableMeterModelsSelected, HandleTableMeterModelsSelected] = useState<RowSelectionState>({})
  const [fullDataMeterModelsSelected, setFullDataMeterModelsSelected] = useState([])
  const [showComparisons, setShowComparisons] = useState({ markImage: false })
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const formMeterMark = useForm<ICreateMeterMark>({ defaultValues })
  const formMeterModel = useForm<ICreateMeterMark>({ defaultValues })
  const [modelImage, setModelImage] = useState(initialImageValues)
  const [markImage, setMarkImage] = useState(initialImageValues)
  const router = useRouter()

  const { data, error, isLoading: isLoadingMeterModels, fetcher } = useFetch<IFetchDataTable<IMeterModel>>('/api/meter-models')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Modelos', singularItem: 'Modelo' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlUserGroups({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  const onChangeImageMeterMark = async (imageList, addUpdateIndex) => {
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

  const onChangeImageMeterModel = async (imageList, addUpdateIndex) => {
    const imageFile: File = imageList[0]?.file

    if (!imageFile) {
      setModelImage(prevState => ({
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

    setModelImage(prevState => ({
      original: [{ data_url: imageList[0]?.data_url, file: imageList[0]?.file }],
      compressed: [{ data_url: data_url?.toString(), file }]
    }))
  }

  const getFullDataSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataMeterModelsSelected(fullDataSelection)
  }

  const handleCloseComparisons = () => {
    if (showComparisons.markImage === true) {
      setShowComparisons(prevState => ({ ...prevState, markImage: false }))
    }
  }

  const handleOpenCreateModelMarkModal = (value: boolean) => setModalInfo(prevState => ({ ...prevState, type: 'CREATE_METER_MODEL', open: value }))
  const toggleOpenCreateModelMarkModal = () => setModalInfo(prevState => ({ ...prevState, type: 'CREATE_METER_MODEL', open: !prevState.open }))

  const onSubmitFormMeterMark = async (data) => {
    if (!fullDataMeterModelsSelected?.length) {
      toast.error('El modelo es requerido')
      setLoading({ meessage: '', value: false })
      return
    }

    if (fullDataMeterModelsSelected?.length > 1) {
      toast.error('Seleccione solo 1 modelo')
      setLoading({ meessage: '', value: false })
      return
    }

    if (!markImage.compressed[0]?.data_url) {
      toast.error('La foto de la marca es requerida')
      setLoading({ meessage: '', value: false })
      return
    }

    if (markImage.compressed[0].file?.size > APP_CONFIG.FILES_RULES.LIMIT_SIZE['4MB']) {
      toast.error('Solo archivos menos de 4MB')
      setLoading({ meessage: '', value: false })
      return
    }

    setLoading(({ meessage: 'Creando Marca de Medidor', value: true }))
    setModalInfo((prevState) => ({ ...prevState, label: 'Creando Marca', open: true, type: 'CREATING_METER_MARK' }))
    await simulateFetch(3000)

    const meterMarkImageFile = markImage.compressed[0]?.file
    const meterModelImageFile = modelImage.compressed[0]?.file

    console.log({
      ...data,
      image: meterMarkImageFile,
      model: {
        ...fullDataMeterModelsSelected[0].original,
        image: meterModelImageFile
      }
    })

    setModalInfo(prevState => ({ ...prevState, type: 'METER_MARK_CREATED', label: 'Marca Creada', illustration: <Congratulations className='h-72' /> }))
    toast.success('Marca Creada Exitosamente')
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false, type: null })
    setLoading({ meessage: '', value: false })

    // router.push('/ajustes/marcas-de-medidores')
  }

  const onSubmitFormMterModel = async (data: ICreateMeterModel) => {
    if (!modelImage.compressed[0]?.data_url) {
      toast.error('La imagen del modelo es requerida')
      setLoading({ meessage: '', value: false })
      return
    }

    if (modelImage.compressed[0].file?.size > APP_CONFIG.FILES_RULES.LIMIT_SIZE['4MB']) {
      toast.error('Solo archivos menos de 4MB')
      setLoading({ meessage: '', value: false })
      return
    }

    setLoading(({ meessage: 'Creando Modelo de Medidor', value: true }))
    setModalInfo((prevState) => ({ ...prevState, label: 'Creando Modelo', open: true, type: 'CREATING_METER_MODEL' }))
    await simulateFetch(3000)

    const meterModelImageFile = modelImage.compressed[0]?.file

    console.log({ ...data, image: meterModelImageFile })

    setModalInfo(prevState => ({ ...prevState, type: 'METER_MODEL_CREATED', label: 'Modelo Creado', illustration: <Congratulations className='h-72' /> }))
    toast.success('Modelo Creado Exitosamente')
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false, type: null })
    setLoading({ meessage: '', value: false })

    // router.push('/ajustes/marcas-de-medidores')
  }

  return (
    <>
      <Dialog modal open={modalInfo.open}>
        <DialogContent aria-modal>
          <DialogHeader>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              {loading.value && <WomanLoading className='w-72' />}
              {modalInfo.illustration}

              <div className='flex flex-col justify-center text-center items-center'>
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

      <Dialog open={modalInfo.type === 'CREATE_METER_MODEL' && modalInfo.open} onOpenChange={handleOpenCreateModelMarkModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear Modelo de Medidor</DialogTitle>

            <DialogDescription>
              Crea el modelo de un medidor para asignarlo a una marca de medidor.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={formMeterModel.handleSubmit(onSubmitFormMterModel)} autoFocus className='w-full'>
            <section className='w-full space-y-4'>
              <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <Input
                  id='title'
                  type='text'
                  register={formMeterModel.register}
                  label='Nombre'
                  placeholder='Pekkin'
                  messageErrors={formMeterModel.formState.errors}
                  inputErrors={meterModelRules.title}
                  tabIndex={1}
                />

                <GenericSelect
                  id='isActive'
                  label='Estado'
                  placeholder='Seleccione un Estado'
                  defaultValue='true'
                  tabIndex={2}
                  fieldControlled={{ control: formMeterModel.control, rules: meterModelRules.isActive }}
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

              <TextArea
                id='description'
                rows={5}
                tabIndex={3}
                label='Descripción'
                register={formMeterModel.register}
                placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit quo laudantium ipsum natus.'
                messageErrors={formMeterModel.formState.errors}
                inputErrors={meterModelRules.description}
              />
            </section>

            <div className='mt-4'>
              <UploadImage
                zoom
                label='Imagen del Modelo'
                emptyClassName='h-[200px]'
                onChange={onChangeImageMeterModel}
                imageToUpload={modelImage.compressed}
                uploadLabel='Cargar Imagen del Modelo'
                tabIndexs={{ upload: 4, change: 4, delete: 5 }}
                icons={{ placeholder: <IconRouter className='text-zinc-400 w-14 h-14' strokeWidth={1.5} /> }}
              />
            </div>
          </form>

          <section>
            <GenericSelect
              id='type'
              label='Tipo de Modelo'
              placeholder='Seleccione un Estado'
              defaultValue='pepito'
              tabIndex={6}
              fieldControlled={{ control: formMeterModel.control, rules: meterModelRules.isActive }}
              items={[
                {
                  label: 'Pepito',
                  value: 'pepito'
                },
                {
                  label: 'Cocacola',
                  value: 'cocacola'
                }
              ]}
            />
          </section>

          <DialogFooter className='flex flex-col gap-y-4'>
            <Button
              type='button'
              variant='outline'
              isLoading={loading.value}
              onClick={() => handleOpenCreateModelMarkModal(false)}
            >
              Cancelar
            </Button>

            <Button
              type='button'
              isLoading={loading.value}
              onClick={formMeterModel.handleSubmit(onSubmitFormMterModel)}
            >
              Crear Modelo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardHeader>
              {
                markImage?.compressed[0]?.data_url
                  ? (
                    <img
                      src={markImage?.compressed[0]?.data_url}
                      alt='image'
                      className='rounded-md w-140 max-h-[400px] object-contain mx-auto'
                    />
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
                  <span className='dark:text-gray-300'>{formMeterMark.watch('title')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Descripción:</strong>&nbsp;
                    {formMeterMark.watch('description')}
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
          <form onSubmit={formMeterMark.handleSubmit(onSubmitFormMeterMark)} autoFocus className='w-full'>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
              <Card className='p-4 w-full'>
                <CardTitle>Informacion Basica</CardTitle>

                <Separator className='my-4' />

                <section className='w-full space-y-4'>
                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <Input
                      id='title'
                      type='text'
                      register={formMeterMark.register}
                      label='Nombre'
                      placeholder='Pekkin'
                      messageErrors={formMeterMark.formState.errors}
                      inputErrors={meterMarkRules.title}
                      tabIndex={1}
                    />

                    <GenericSelect
                      id='isActive'
                      label='Estado'
                      placeholder='Seleccione un Estado'
                      defaultValue='true'
                      tabIndex={2}
                      fieldControlled={{ control: formMeterMark.control, rules: meterMarkRules.isActive }}
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

                  <TextArea
                    id='description'
                    rows={5}
                    tabIndex={3}
                    label='Descripción'
                    register={formMeterMark.register}
                    placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium ipsum natus possimus amet reprehenderit veritatis eum deserunt labore quidem.'
                    messageErrors={formMeterMark.formState.errors}
                    inputErrors={meterMarkRules.description}
                  />
                </section>
              </Card>
            </div>
          </form>

          <Card className='p-4 mt-6 w-full'>
            <section className='w-full flex flex-row justify-between items-center'>
              <div>
                <CardTitle>Modelos de Medidores</CardTitle>
                <CardDescription>Seleccione un modelo</CardDescription>
              </div>

              <Button onClick={toggleOpenCreateModelMarkModal}>
                Crear Modelo
              </Button>
            </section>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={data?.results}
              pagination={pagination}
              columns={meterModelColumns}
              itemsToFilter={meterModelColumnsToFilter}
              queryInfo={{ isFetching: isLoadingMeterModels, error }}
              inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Modelo de Medidores' }}
              selection={{
                rowSelection: tableMeterModelsSelected,
                setRowSelection: HandleTableMeterModelsSelected,
                getFullDataSelection
              }}
            />
          </Card>

          <div className='w-full h-full mt-6 flex justify-center items-start'>
            <Card className='p-4 w-full col-span-6 md:col-span-4'>
              <CardTitle>Foto de la Marca</CardTitle>

              <Separator className='my-4' />

              <CardContent className='mt-0 pb-0'>
                <UploadImage
                  zoom
                  emptyClassName='h-[285px]'
                  onChange={onChangeImageMeterMark}
                  imageToUpload={markImage.compressed}
                  uploadLabel='Cargar Foto de la Marca'
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
              onClick={formMeterMark.handleSubmit(onSubmitFormMeterMark)}
            >
              Crear Marca
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
