import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import { IconDeviceIpadPin } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'

import type { IFetchDataTable, ReactNode, ICreateGPSMark, IGPSMark, IGPSModel, ITruck, IFormCreateGPSDevice, IFleet, IGPSDevice } from '@/lib/types'
import { getGpsModelColumns } from '@/lib/utils/tableColumns/gpsModels'
import { handleFetchUrlUserGroups } from '@/lib/services/users'
import { truckColumns } from '@/lib/utils/tableColumns/trucks'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { useFetch } from '@/lib/hooks/useFetch'
import { gpsDeviceRules } from './rules'
// import { APP_CONFIG } from '@/config'

import { AvatarFallback, AvatarImage, Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Dialog, DialogContent, DialogHeader, Separator, Skeleton } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { MultipleImages } from '@/components/common/uploadImages/MultipleImages'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { Avatar } from '@radix-ui/react-avatar'
import { CardSkeleton } from '@/components/common/skeletons/CardSkeleton'

interface IModalState {
  open: boolean
  label: string
  illustration?: ReactNode
  type: 'CREATING_GPS_DEVICE' | 'GPS_DEVICE_CREATED' | 'GPS_DEVICE_CREATED'
}

export const FormEditGpsDevice = ({ gpsDevice }: { gpsDevice: IGPSDevice }) => {
  const [modalInfo, setModalInfo] = useState<IModalState>({ open: false, label: '', illustration: null, type: null })
  const [gpsMarkPagitationPagesInfo, setGpsMarkPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [stationPagitationPagesInfo, setStationPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableGpsModelsSelected, setTableGpsModelsSelected] = useState<RowSelectionState>({})
  const [tableTrucksSelected, setTableTrucksSelected] = useState<RowSelectionState>({})
  const [fullDataGpsModelsSelected, setFullDataGpsModelsSelected] = useState([])
  const [fullDataTrucksSelected, setFullDataTrucksSelected] = useState([])
  const [multipleGpsDeviceImages, setMultipleGpsDeviceImages] = useState([])
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const [showGpsModelsTable, setShowGpsModelsTable] = useState(false)
  const [showTrucksTable, setShowTrucksTable] = useState(false)
  const [isEditGpsModel, setIsEditGpsModel] = useState(false)
  const formGpsDevice = useForm<IFormCreateGPSDevice>()

  const { data: gpsModelsData, error: gpsModelsError, isLoading: isLoadingGpsModels, fetcher: gpsModelsfetcher } = useFetch<IFetchDataTable<IGPSModel>>(null, true)
  const { data: trucksData, error: trucksError, isLoading: isLoadingTrucks, fetcher: trucksfetcher } = useFetch<IFetchDataTable<ITruck>>(null, true)
  const { data: gpsMarksData, isLoading: isLoadingGpsMarks } = useFetch<IFetchDataTable<IGPSMark>>('/api/gps-marks')
  const { data: fleetsData, isLoading: isLoadingFleets } = useFetch<IFetchDataTable<IFleet>>('/api/fleets')

  const gpsMarkPagination = {
    setPagination: setGpsMarkPagination,
    pageSize: gpsMarkPagitationPagesInfo.pageSize,
    pageIndex: gpsMarkPagitationPagesInfo.pageIndex,
    labels: { pluralItem: 'Marcas', singularItem: 'Marca' }
  }

  const trucksPagination = {
    pageSize: stationPagitationPagesInfo.pageSize,
    pageIndex: stationPagitationPagesInfo.pageIndex,
    setPagination: setStationPagination,
    labels: { pluralItem: 'Estaciones', singularItem: 'Estación' }
  }

  const handleFetchGpsModelsByGpsMarkId = async (gpsMarkId: number) => {
    setShowGpsModelsTable(true)
    await gpsModelsfetcher(`/api/gps-marks/${gpsMarkId}/models`)
  }

  const handleFetchTrucksByStationId = async (stationId: number) => {
    setShowTrucksTable(true)
    await trucksfetcher(`/api/stations/${stationId}/trucks`)
  }

  const handleCancelSelectGpsModel = () => {
    setTableGpsModelsSelected({})
    setShowGpsModelsTable(false)
  }

  const handleCancelSelectTruck = () => {
    setTableTrucksSelected({})
    setShowTrucksTable(false)
  }

  const handleSearchGpsModelsWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlUserGroups({
      search,
      filters,
      pageSize: gpsMarkPagitationPagesInfo.pageSize,
      pageIndex: gpsMarkPagitationPagesInfo.pageIndex
    })
    gpsModelsfetcher(url)
  }

  const handleSearchTrucksWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlUserGroups({
      search,
      filters,
      pageSize: gpsMarkPagitationPagesInfo.pageSize,
      pageIndex: gpsMarkPagitationPagesInfo.pageIndex
    })
    trucksfetcher(url)
  }

  const getFullGpsModelDataSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataGpsModelsSelected(fullDataSelection.map(dataSelected => dataSelected.original))
  }

  const getFullTruckDataSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataTrucksSelected(fullDataSelection.map(dataSelected => dataSelected.original))
  }

  const onChangeMultipleGpsDeviceImages = (imageList, addUpdateIndex) => {
    console.log(imageList)
    setMultipleGpsDeviceImages(imageList)
  }

  const onSubmitFormGpsDevice = async (data: ICreateGPSMark) => {
    if (!fullDataGpsModelsSelected?.length) {
      toast.error('El modelo es requerido')
      setLoading({ meessage: '', value: false })
      return
    }

    if (fullDataGpsModelsSelected?.length > 1) {
      toast.error('Seleccione solo 1 modelo')
      setLoading({ meessage: '', value: false })
      return
    }

    if (!fullDataTrucksSelected?.length) {
      toast.error('La unidad es requerida')
      setLoading({ meessage: '', value: false })
      return
    }

    if (fullDataTrucksSelected?.length > 1) {
      toast.error('Seleccione solo 1 unidad')
      setLoading({ meessage: '', value: false })
      return
    }

    if (!multipleGpsDeviceImages.length) {
      toast.error('La imagen del dispositivo es requerida')
      setLoading({ meessage: '', value: false })
      return
    }

    setLoading(({ meessage: 'Creando Dispositivo', value: true }))
    setModalInfo((prevState) => ({ ...prevState, label: 'Creando Dispositivo', open: true, type: 'CREATING_GPS_DEVICE' }))
    await simulateFetch(3000)

    const gpsMarkToCreate: ICreateGPSMark = {
      title: data.title,
      description: data.title,
      gpsModels: data.gpsModels,
      image: '',
      isActive: data.isActive
    }

    console.log({ meterDeviceToCreate: gpsMarkToCreate })

    setModalInfo(prevState => ({ ...prevState, type: 'GPS_DEVICE_CREATED', label: 'Dispositivo Creado', illustration: <Congratulations className='h-72' /> }))
    toast.success('Dispositivo Creado Exitosamente')
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
                  <span className='dark:text-gray-300'>{formGpsDevice.watch('serial')}</span>
                </li>
              </ul>

              <Separator className='my-2' />
              <Badge className={'w-full text-sm h-full py-1.5'}>
                {formGpsDevice.watch('status')}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className='w-full pt-6'>
          <form onSubmit={formGpsDevice.handleSubmit(onSubmitFormGpsDevice)} autoFocus className='w-full'>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
              <Card className='p-4 w-full'>
                <CardTitle>Informacion Basica</CardTitle>

                <Separator className='my-4' />

                <section className='w-full space-y-4'>
                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <Input
                      id='serial'
                      type='text'
                      register={formGpsDevice.register}
                      label='Serial'
                      placeholder='Pekkin'
                      messageErrors={formGpsDevice.formState.errors}
                      inputErrors={gpsDeviceRules.serial}
                      tabIndex={1}
                    />

                    <GenericSelect
                      id='status'
                      label='Estado'
                      placeholder='Seleccione un Estado'
                      defaultValue='Operativo'
                      tabIndex={2}
                      fieldControlled={{ control: formGpsDevice.control, rules: gpsDeviceRules.status }}
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
                </section>
              </Card>
            </div>
          </form>

          <Card className='p-4 mt-6 w-full'>
            <section className='w-full flex flex-row justify-between items-center'>
              <div>
                <CardTitle>
                  {
                    showGpsModelsTable
                      ? 'Modelos de GPS'
                      : 'Marcas de GPS'
                  }
                </CardTitle>
                <CardDescription>
                  {
                    showGpsModelsTable
                      ? 'Seleccione un modelo'
                      : 'Seleccione primero una marca y luego un modelo asociado a esa marca'
                  }
                </CardDescription>
              </div>

              {
                isEditGpsModel
                  ? (
                    <>
                      {
                        showGpsModelsTable && (
                          <Button onClick={handleCancelSelectGpsModel}>
                            Regresar
                          </Button>
                        )
                      }
                    </>
                  )
                  : (
                    <Button onClick={handleCancelSelectGpsModel}>
                      Editar Modelos
                    </Button>
                  )
              }
            </section>

            <Separator className='my-4' />

            {
              isEditGpsModel
                ? (
                  <>
                    {
                      !showGpsModelsTable
                        ? (
                          <div className={(gpsMarksData?.results.length > 1 && !isLoadingGpsMarks) ? 'grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4' : ''}>
                            {
                              isLoadingGpsMarks
                                ? (
                                  <div>
                                    <CardSkeleton className='mx-auto' />
                                  </div>
                                )
                                : (
                                  <>
                                    {
                                      gpsMarksData?.results.map((gpsMark, idx) => (
                                        <Card key={gpsMark.id} className={`w-full ${gpsMarksData.results.length > 1 ? '' : 'mx-auto'}`}>
                                          <CardHeader>
                                            <section className='flex w-full justify-between items-end'>
                                              <CardTitle>Marca: {gpsMark.title}</CardTitle>

                                              <Badge className=' wmin text-sm'>
                                                {gpsMark.isActive ? 'Activo' : 'Bloqueado'}
                                              </Badge>
                                            </section>

                                            <CardDescription>Referencia: {gpsMark.description}</CardDescription>
                                          </CardHeader>

                                          <CardContent>
                                            <div className='w-full rounded-md p-4 bg-gray-100 dark:bg-slate-50 dark:bg-opacity-5'>
                                              <Avatar>
                                                <AvatarImage
                                                  width={100}
                                                  height={100}
                                                  src={gpsMark.image}
                                                  alt={gpsMark.title}
                                                  className='mx-auto rounded-md w-[100px] h-[100px]'
                                                />

                                                <AvatarFallback className='rounded-md h-[100px] w-[100px] mx-auto'>
                                                  <Skeleton className='h-[100px] w-[100px]' />
                                                </AvatarFallback>
                                              </Avatar>
                                            </div>

                                            <Button
                                              onClick={() => handleFetchGpsModelsByGpsMarkId(gpsMark.id)}
                                              className='w-full mt-4'
                                            >
                                              Seleccionar
                                            </Button>
                                          </CardContent>
                                        </Card>
                                      ))
                                    }
                                  </>
                                )
                            }
                          </div>
                        )
                        : (
                          <Table
                            visibilityColumns
                            data={gpsModelsData?.results}
                            pagination={gpsMarkPagination}
                            columns={getGpsModelColumns({ selection: true })}
                            queryInfo={{ isFetching: isLoadingGpsModels, error: gpsModelsError }}
                            inputSearch={{ handleSearchWithParams: handleSearchGpsModelsWithParams, placeholder: 'Buscar Modelo' }}
                            selection={{
                              rowSelection: tableGpsModelsSelected,
                              setRowSelection: setTableGpsModelsSelected,
                              getFullDataSelection: getFullGpsModelDataSelection
                            }}
                          />
                        )
                    }
                  </>
                )
                : (
                  <Card key={gpsDevice.gpsModel.id} className={`w-full ${gpsMarksData?.results.length > 1 ? '' : 'mx-auto'}`}>
                    <CardHeader>
                      <section className='flex w-full justify-between items-end'>
                        <CardTitle>Marca: {gpsDevice.gpsModel.title}</CardTitle>

                        <Badge className=' wmin text-sm'>
                          {gpsDevice.gpsModel.isActive ? 'Activo' : 'Bloqueado'}
                        </Badge>
                      </section>

                      <CardDescription>Referencia: {gpsDevice.gpsModel.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className='w-full rounded-md p-4 bg-gray-100 dark:bg-slate-50 dark:bg-opacity-5'>
                        <Avatar>
                          <AvatarImage
                            width={100}
                            height={100}
                            src={gpsDevice.gpsModel.image}
                            alt={gpsDevice.gpsModel.title}
                            className='mx-auto rounded-md w-[100px] h-[100px]'
                          />

                          <AvatarFallback className='rounded-md h-[100px] w-[100px] mx-auto'>
                            <Skeleton className='h-[100px] w-[100px]' />
                          </AvatarFallback>
                        </Avatar>
                      </div>

                      <Button
                        onClick={() => handleFetchGpsModelsByGpsMarkId(gpsDevice.gpsModel.id)}
                        className='w-full mt-4'
                      >
                        Editar
                      </Button>
                    </CardContent>
                  </Card>
                )
            }

          </Card>

          <Card className='p-4 mt-6 w-full'>
            <section className='w-full flex flex-row justify-between items-center'>
              <div>
                <CardTitle>Unidades</CardTitle>
                <CardDescription>
                  {
                    showTrucksTable
                      ? 'Seleccione una unidad'
                      : 'Seleccione primero una flota y luego un unidad asociado a esa flota'
                  }
                </CardDescription>
              </div>

              {
                showTrucksTable && (
                  <Button onClick={handleCancelSelectTruck}>
                    Regresar
                  </Button>
                )
              }
            </section>

            <Separator className='my-4' />

            {
              !showTrucksTable
                ? (
                  <>
                    {
                      isLoadingFleets
                        ? (
                          <div>
                            <CardSkeleton className='mx-auto' image={false} />
                          </div>
                        )
                        : (
                          <>
                            {
                              fleetsData?.results.map((fleet, idx) => (
                                <Card key={fleet.id} className={`w-full max-w-xs ${fleetsData.results.length > 1 ? '' : 'mx-auto'}`}>
                                  <CardHeader className='pb-0'>
                                    <section className='flex w-full justify-between items-end'>
                                      <CardTitle>Flota: {fleet.title}</CardTitle>

                                      <Badge className='w-min text-sm'>
                                        {fleet.status}
                                      </Badge>
                                    </section>

                                    <CardDescription>Descripción: {fleet.description}</CardDescription>
                                  </CardHeader>

                                  <CardContent>
                                    <Button
                                      className='w-full mt-4'
                                      onClick={() => handleFetchTrucksByStationId(fleet.id)}
                                    >
                                      Seleccionar
                                    </Button>
                                  </CardContent>
                                </Card>
                              ))
                            }
                          </>
                        )
                    }
                  </>
                )
                : (
                  <Table
                    visibilityColumns
                    columns={truckColumns}
                    data={trucksData?.results}
                    pagination={trucksPagination}
                    queryInfo={{ isFetching: isLoadingTrucks, error: trucksError }}
                    inputSearch={{ handleSearchWithParams: handleSearchTrucksWithParams, placeholder: 'Buscar Unidad' }}
                    selection={{
                      rowSelection: tableTrucksSelected,
                      setRowSelection: setTableTrucksSelected,
                      getFullDataSelection: getFullTruckDataSelection
                    }}
                  />
                )
            }
          </Card>

          <Card className='p-4 w-full col-span-6 md:col-span-4 mt-6'>
            <CardTitle>Imagenes del Dispositivo GPS</CardTitle>

            <Separator className='my-4' />

            <CardContent className='mt-0 pb-0'>

              <MultipleImages
                zoom
                emptyClassName='h-[300px]'
                onChange={onChangeMultipleGpsDeviceImages}
                imageToUpload={multipleGpsDeviceImages}
                uploadLabel='Cargar Fotos del Dispositivo'
                tabIndexs={{ upload: 4, change: 4, delete: 5 }}
                icons={{ placeholder: <IconDeviceIpadPin className='text-zinc-400 w-14 h-14' strokeWidth={1.5} /> }}
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
              onClick={formGpsDevice.handleSubmit(onSubmitFormGpsDevice)}
            >
              Crear Medidor
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
