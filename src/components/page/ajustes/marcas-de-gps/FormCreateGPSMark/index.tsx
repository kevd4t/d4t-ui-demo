import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import { IconAd } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'

import type { IFetchDataTable, IMeterModel, ReactNode, ICreateGPSMark } from '@/lib/types'
import { handleFetchUrlUserGroups } from '@/lib/services/users'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { useFetch } from '@/lib/hooks/useFetch'
import { gpsMarkRules } from './rules'

import { Badge, Button, Card, CardContent, CardDescription, CardTitle, Dialog, DialogContent, DialogHeader, Separator } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { getMeterModelColumns } from '@/lib/utils/tableColumns/meterModels'
import { compressImage } from '@/lib/utils/handleCompressionImage'
import { TextArea } from '@/components/common/textarea'
import { UploadImage } from '@/components/common/uploadImages'
import { convertBytes } from '@/lib/utils/formaters'
import { APP_CONFIG } from '@/config'

interface IModalState {
  open: boolean
  label: string
  illustration?: ReactNode
  type: 'CREATE_GPS_MODEL' | 'COMPARISON_GPS_MODEL_IMAGE' | 'CREATING_GPS_MARK' | 'GPS_MARK_CREATED' | 'CREATING_GPS_MODEL' | 'GPS_MARK_CREATED'
}

const initialImageValues = { original: [], compressed: [] }

export const FormCreateGPSMark = () => {
  const [modalInfo, setModalInfo] = useState<IModalState>({ open: false, label: '', illustration: null, type: null })
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableTrucksSelected, HandleTableTrucksSelected] = useState<RowSelectionState>({})
  const [fullDataMeterModelsSelected, setFullDataMeterModelsSelected] = useState([])
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const [markImage, setMarkImage] = useState(initialImageValues)
  const formGpsMark = useForm<ICreateGPSMark>()

  const { data: meterModelData, error: meterModelError, isLoading: isLoadingMeterModels, fetcher: meterModelfetcher } = useFetch<IFetchDataTable<IMeterModel>>('/api/meter-models')

  const meterModelpagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Modelos', singularItem: 'Modelo' }
  }

  const handleSearchMeterModelsWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlUserGroups({ pageSize, pageIndex, search, filters })
    meterModelfetcher(url)
  }

  const getFullMeterModelDataSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataMeterModelsSelected(fullDataSelection.map(dataSelected => dataSelected.original))
  }

  const onChangeImageMeterModel = async (imageList, addUpdateIndex) => {
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

  const onSubmitFormGpsMark = async (data: ICreateGPSMark) => {
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

    setLoading(({ meessage: 'Creando Marca', value: true }))
    setModalInfo((prevState) => ({ ...prevState, label: 'Creando Marca', open: true, type: 'CREATING_GPS_MARK' }))
    await simulateFetch(3000)

    const gpsMarkToCreate: ICreateGPSMark = {
      title: data.title,
      description: data.title,
      gpsModels: data.gpsModels,
      image: '',
      isActive: data.isActive
    }

    console.log({ meterDeviceToCreate: gpsMarkToCreate })

    setModalInfo(prevState => ({ ...prevState, type: 'GPS_MARK_CREATED', label: 'Marca Creada', illustration: <Congratulations className='h-72' /> }))
    toast.success('Marca Creada Exitosamente')
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false, type: null })
    setLoading({ meessage: '', value: false })

    // router.push('/ajustes/flotas')
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

      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardContent className='pt-6'>
              <h6 className='font-semibold'>Informacion Basica</h6>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Serial:</span> &nbsp;
                  <span className='dark:text-gray-300'>{formGpsMark.watch('title')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Descripción:</strong>&nbsp;
                    {formGpsMark.watch('description')}
                  </p>
                </li>
              </ul>

              <Separator className='my-2' />
              {/* @ts-nocheck */}
              <Badge className={`w-full text-sm h-full py-1.5 ${formGpsMark.watch('isActive') === 'true' ? 'border-2 bg-green-100 border-green-500 text-green-500' : 'border-2 bg-red-100 border-red-500 text-red-500'}`}>
                {formGpsMark.watch('isActive') === 'true' ? 'Activo' : 'Bloqueado'}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className='w-full pt-6'>
          <form onSubmit={formGpsMark.handleSubmit(onSubmitFormGpsMark)} autoFocus className='w-full'>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
              <Card className='p-4 w-full'>
                <CardTitle>Informacion Basica</CardTitle>

                <Separator className='my-4' />

                <section className='w-full space-y-4'>
                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <Input
                      id='title'
                      type='text'
                      register={formGpsMark.register}
                      label='Serial'
                      placeholder='Pekkin'
                      messageErrors={formGpsMark.formState.errors}
                      inputErrors={gpsMarkRules.title}
                      tabIndex={1}
                    />

                    <GenericSelect
                      id='isActive'
                      label='Estado'
                      placeholder='Seleccione un Estado'
                      defaultValue='true'
                      tabIndex={2}
                      fieldControlled={{ control: formGpsMark.control, rules: gpsMarkRules.isActive }}
                      items={[
                        {
                          label: 'Activo',
                          value: 'true'
                        },
                        {
                          label: 'Bloqueado',
                          value: 'false'
                        }
                      ]}
                    />
                  </div>

                  <TextArea
                    rows={9}
                    tabIndex={3}
                    id='description'
                    label='Descripción'
                    register={formGpsMark.register}
                    inputErrors={gpsMarkRules.description}
                    messageErrors={formGpsMark.formState.errors}
                    placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit quo laudantium ipsum natus.'
                  />
                </section>
              </Card>
            </div>
          </form>

          <Card className='p-4 mt-6 w-full'>
            <section className='w-full flex flex-row justify-between items-center'>
              <div>
                <CardTitle>Modelos de GPS</CardTitle>
                <CardDescription>Seleccione un modelo</CardDescription>
              </div>
            </section>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={meterModelData?.results}
              pagination={meterModelpagination}
              columns={getMeterModelColumns({ selection: true })}
              queryInfo={{ isFetching: isLoadingMeterModels, error: meterModelError }}
              inputSearch={{ handleSearchWithParams: handleSearchMeterModelsWithParams, placeholder: 'Buscar Modelo' }}
              selection={{
                rowSelection: tableTrucksSelected,
                setRowSelection: HandleTableTrucksSelected,
                getFullDataSelection: getFullMeterModelDataSelection
              }}
            />
          </Card>

          <Card className='p-4 w-full col-span-6 md:col-span-4 mt-6'>
            <CardTitle>Imagen de la Marca</CardTitle>

            <Separator className='my-4' />

            <CardContent className='mt-0 pb-0'>
              <UploadImage
                zoom
                emptyClassName='h-[300px]'
                onChange={onChangeImageMeterModel}
                imageToUpload={markImage.compressed}
                uploadLabel='Cargar Imagen de la Marca'
                tabIndexs={{ upload: 4, change: 4, delete: 5 }}
                icons={{ placeholder: <IconAd className='text-zinc-400 w-14 h-14' strokeWidth={1.5} /> }}
              />
            </CardContent>
          </Card>

          <section className='w-full flex justify-between items-start mt-6 gap-x-6'>
            <Button
              asChild
              variant='outline'
              tabIndex={15}
              type='button'
              className='w-full py-2 text-sm'
            >
              <Link href='/ajustes/marcas-de-gps'>
                Cancelar
              </Link>
            </Button>

            <Button
              type='submit'
              tabIndex={16}
              className='w-full py-2 text-sm'
              isLoading={loading.value}
              onClick={formGpsMark.handleSubmit(onSubmitFormGpsMark)}
            >
              Crear Medidor
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
