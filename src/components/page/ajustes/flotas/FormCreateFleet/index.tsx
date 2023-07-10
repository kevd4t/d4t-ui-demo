import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import { IconRouter } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { toast } from 'sonner'

import type { IFetchDataTable, IFormCreateFleet, IFormCreateTruck, ITruck, ReactNode } from '@/lib/types'
import { compressImage } from '@/lib/utils/handleCompressionImage'
import { handleFetchUrlUserGroups } from '@/lib/services/users'
import { convertBytes } from '@/lib/utils/formaters'
import { truckRules, fleetRules } from './rules'
import { useFetch } from '@/lib/hooks/useFetch'
import { APP_CONFIG } from '@/config'

import { Badge, Button, Card, CardContent, CardDescription, CardTitle, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Separator } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { MultipleImages } from '@/components/common/uploadImages/MultipleImages'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { truckColumns } from '@/lib/utils/tableColumns/trucks'
import { GenericSelect } from '@/components/common/selects'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

const defaultValues: IFormCreateFleet = {
  title: '',
  description: '',
  status: 'Operativo'
}

const initialImageValues = { original: [], compressed: [] }

interface IModalState {
  open: boolean
  label: string
  illustration?: ReactNode
  type: 'CREATE_TRUCK' | 'COMPARISON_TRUCK_IMAGE' | 'CREATING_FLEET' | 'METER_FLEET_CREATED' | 'CREATING_TRUCK_MODEL' | 'METER_TRUCK_CREATED'
}

export const FormCreateFleet = () => {
  const [modalInfo, setModalInfo] = useState<IModalState>({ open: false, label: '', illustration: null, type: null })
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableMeterModelsSelected, HandleTableMeterModelsSelected] = useState<RowSelectionState>({})
  const [fullDataMeterModelsSelected, setFullDataMeterModelsSelected] = useState([])
  const [showComparisons, setShowComparisons] = useState({ markImage: false })
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const [truckImages, setTruckImages] = useState(initialImageValues)
  const formFleet = useForm<IFormCreateFleet>({ defaultValues })
  const formTruck = useForm<IFormCreateTruck>({ defaultValues })
  const [multipleImages, setMultipleImages] = useState([])

  const { data, error, isLoading: isLoadingMeterModels, fetcher } = useFetch<IFetchDataTable<ITruck>>('/api/trucks')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Unidades', singularItem: 'Unidad' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlUserGroups({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  const onChangeImageTruck = async (imageList, addUpdateIndex) => {
    const imageFile: File = imageList[0]?.file

    if (!imageFile) {
      setTruckImages(prevState => ({
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

    setTruckImages(prevState => ({
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

  const onChangeMultipleImages = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex)
    setMultipleImages(imageList)
  }

  const handleOpenCreateModelMarkModal = (value: boolean) => setModalInfo(prevState => ({ ...prevState, type: 'CREATE_TRUCK', open: value }))
  const toggleOpenCreateModelMarkModal = () => setModalInfo(prevState => ({ ...prevState, type: 'CREATE_TRUCK', open: !prevState.open }))

  const onSubmitFormMeterMark = async (data) => {
    if (!fullDataMeterModelsSelected?.length) {
      toast.error('La unidad es requerido')
      setLoading({ meessage: '', value: false })
      return
    }

    if (fullDataMeterModelsSelected?.length > 1) {
      toast.error('Seleccione solo 1 unidad')
      setLoading({ meessage: '', value: false })
      return
    }

    setLoading(({ meessage: 'Creando Marca de Medidor', value: true }))
    setModalInfo((prevState) => ({ ...prevState, label: 'Creando Marca', open: true, type: 'CREATING_FLEET' }))
    await simulateFetch(3000)

    const meterModelImageFile = truckImages.compressed[0]?.file

    console.log({
      ...data,
      model: {
        ...fullDataMeterModelsSelected[0].original,
        image: meterModelImageFile
      }
    })

    setModalInfo(prevState => ({ ...prevState, type: 'METER_FLEET_CREATED', label: 'Marca Creada', illustration: <Congratulations className='h-72' /> }))
    toast.success('Marca Creada Exitosamente')
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false, type: null })
    setLoading({ meessage: '', value: false })

    // router.push('/ajustes/marcas-de-medidores')
  }

  const onSubmitFormTruck = async (data: IFormCreateTruck) => {
    if (!truckImages.compressed[0]?.data_url) {
      toast.error('La imagen del unidad es requerida')
      setLoading({ meessage: '', value: false })
      return
    }

    if (truckImages.compressed[0].file?.size > APP_CONFIG.FILES_RULES.LIMIT_SIZE['4MB']) {
      toast.error('Solo archivos menos de 4MB')
      setLoading({ meessage: '', value: false })
      return
    }

    setLoading(({ meessage: 'Creando Unidad', value: true }))
    setModalInfo((prevState) => ({ ...prevState, label: 'Creando Unidad', open: true, type: 'CREATING_TRUCK_MODEL' }))
    await simulateFetch(3000)

    const meterModelImageFile = truckImages.compressed[0]?.file

    console.log({ ...data, image: meterModelImageFile })

    setModalInfo(prevState => ({ ...prevState, type: 'METER_TRUCK_CREATED', label: 'Unidad Creada', illustration: <Congratulations className='h-72' /> }))
    toast.success('Unidad Creada Exitosamente')
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

      {/* Crear Unidad */}
      <Dialog open={modalInfo.type === 'CREATE_TRUCK' && modalInfo.open} onOpenChange={handleOpenCreateModelMarkModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear Unidad</DialogTitle>

            <DialogDescription>
              Crea una unidad para asignarlo a una flota
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={formTruck.handleSubmit(onSubmitFormTruck)} autoFocus className='w-full'>
            <section className='w-full space-y-4'>
              <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <Input
                  id='title'
                  type='text'
                  tabIndex={1}
                  label='Nombre'
                  placeholder='Pekkin'
                  register={formTruck.register}
                  inputErrors={truckRules.title}
                  messageErrors={formTruck.formState.errors}
                />

                <GenericSelect
                  id='status'
                  tabIndex={2}
                  label='Estado'
                  defaultValue='true'
                  placeholder='Seleccione un Estado'
                  fieldControlled={{ control: formTruck.control, rules: truckRules.status }}
                  items={[
                    {
                      label: 'Operativo',
                      value: 'Operativo'
                    },
                    {
                      label: 'En Mantenimiento',
                      value: 'Mantenimiento'
                    }
                  ]}
                />
              </div>

              <TextArea
                id='description'
                rows={5}
                tabIndex={3}
                label='Descripción'
                register={formTruck.register}
                placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit quo laudantium ipsum natus.'
                messageErrors={formTruck.formState.errors}
                inputErrors={truckRules.description}
              />
            </section>

            <div className='mt-4'>
              <MultipleImages
                zoom
                label='Imagen del Unidad'
                emptyClassName='h-[200px]'
                onChange={onChangeMultipleImages}
                imageToUpload={multipleImages}
                uploadLabel='Cargar Fotos de la Unidad'
                tabIndexs={{ upload: 4, change: 4, delete: 5 }}
                icons={{ placeholder: <IconRouter className='text-zinc-400 w-14 h-14' strokeWidth={1.5} /> }}
              />
            </div>
          </form>

          <section>
            <GenericSelect
              id='type'
              label='Tipo de Unidad'
              placeholder='Seleccione un Estado'
              defaultValue='pepito'
              tabIndex={6}
              fieldControlled={{ control: formTruck.control, rules: truckRules.status }}
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
              onClick={formTruck.handleSubmit(onSubmitFormTruck)}
            >
              Crear Unidad
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardContent className='pt-6'>
              <h6 className='font-semibold'>Informacion Basica</h6>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Nombre:</span> &nbsp;
                  <span className='dark:text-gray-300'>{formFleet.watch('title')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Descripción:</strong>&nbsp;
                    {formFleet.watch('description')}
                  </p>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className={'w-full text-sm h-full py-1.5'}>
                {formFleet.watch('status')}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className='w-full pt-6'>
          <form onSubmit={formFleet.handleSubmit(onSubmitFormMeterMark)} autoFocus className='w-full'>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
              <Card className='p-4 w-full'>
                <CardTitle>Informacion Basica</CardTitle>

                <Separator className='my-4' />

                <section className='w-full space-y-4'>
                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <Input
                      id='title'
                      type='text'
                      register={formFleet.register}
                      label='Nombre'
                      placeholder='Pekkin'
                      messageErrors={formFleet.formState.errors}
                      inputErrors={fleetRules.title}
                      tabIndex={1}
                    />

                    <GenericSelect
                      id='isActive'
                      label='Estado'
                      placeholder='Seleccione un Estado'
                      defaultValue='Operativo'
                      tabIndex={2}
                      fieldControlled={{ control: formFleet.control, rules: fleetRules.status }}
                      items={[
                        {
                          label: 'Operativo',
                          value: 'Operativo'
                        },
                        {
                          label: 'En Mantenimiento',
                          value: 'Mantenimiento'
                        }
                      ]}
                    />
                  </div>

                  <TextArea
                    rows={5}
                    tabIndex={3}
                    id='description'
                    label='Descripción'
                    register={formFleet.register}
                    inputErrors={fleetRules.description}
                    messageErrors={formFleet.formState.errors}
                    placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium ipsum natus possimus amet reprehenderit veritatis eum deserunt labore quidem.'
                  />
                </section>
              </Card>
            </div>
          </form>

          <Card className='p-4 mt-6 w-full'>
            <section className='w-full flex flex-row justify-between items-center'>
              <div>
                <CardTitle>Unidades</CardTitle>
                <CardDescription>Seleccione una unidad</CardDescription>
              </div>

              <Button onClick={toggleOpenCreateModelMarkModal}>
                Crear Unidad
              </Button>
            </section>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={data?.results}
              pagination={pagination}
              columns={truckColumns}
              queryInfo={{ isFetching: isLoadingMeterModels, error }}
              inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Unidad' }}
              selection={{
                rowSelection: tableMeterModelsSelected,
                setRowSelection: HandleTableMeterModelsSelected,
                getFullDataSelection
              }}
            />
          </Card>

          <section className='w-full flex justify-between items-start mt-6 gap-x-6'>
            <Button variant='outline' tabIndex={15} type='button' className='w-full py-2 text-sm'>
              Cancelar
            </Button>

            <Button
              type='submit'
              tabIndex={16}
              className='w-full py-2 text-sm'
              isLoading={loading.value}
              onClick={formFleet.handleSubmit(onSubmitFormMeterMark)}
            >
              Crear Flota
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
