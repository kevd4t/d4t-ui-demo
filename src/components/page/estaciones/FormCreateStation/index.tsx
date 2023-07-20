import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import { IconBusStop } from '@tabler/icons-react'
// import ReactCompareImage from 'react-compare-image'
import { useForm } from 'react-hook-form'
// import { useRouter } from 'next/router'
import JSConfetti from 'js-confetti'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { toast } from 'sonner'

import type { IFetchDataTable, IFormCreateStation, IMeterDevice } from '@/lib/types'
import { getMeterDeviceColumns } from '@/lib/utils/tableColumns/meterDevices'
import { handleOnlyNumbers } from '@/lib/utils/handleOnlyNumbers'
import { handleFetchUrlUserGroups } from '@/lib/services/users'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { formatRIF } from '@/lib/utils/formaters'
import { useFetch } from '@/lib/hooks/useFetch'
import { stationRules } from './rules'
import { APP_CONFIG } from '@/config'

import { Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Dialog, DialogContent, DialogHeader, Separator } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { MultipleImages } from '@/components/common/uploadImages/MultipleImages'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { GenericCombobox } from '@/components/common/combox'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

const { CI_TYPES, IS_ACTIVE } = APP_CONFIG
const BasicMapNoSSR = dynamic(() => import('@/components/common/gps/BasicMap'), { ssr: false })

export const FormCreateStation = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableStationIslandsSelected, setTableStationIslandsSelected] = useState<RowSelectionState>({})
  const [tableMeterDevicesSelected, setTableMeterDevicesSelected] = useState<RowSelectionState>({})
  // const [showComparisons, setShowComparisons] = useState({ userPhoto: false, ciImage: false })
  const [modalInfo, setModalInfo] = useState({ open: false, label: '', illustration: null })
  const [fullDataStationIslandsSelected, setFullDataStationIslandsSelected] = useState([])
  const [fullDataMeterDevicesSelected, setFullDataMeterDevicesSelected] = useState([])
  const [multipleStationImages, setMultipleStationImages] = useState([])
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const formStation = useForm<IFormCreateStation>()
  // const router = useRouter()

  const { data, error, isLoading: isLoadingMeterModels, fetcher } = useFetch<IFetchDataTable<IMeterDevice>>('/api/meter-devices')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Medidores', singularItem: 'Medidor' }
  }

  const onChangeMultipleTruckImages = (imageList, addUpdateIndex) => {
    console.log(imageList)
    setMultipleStationImages(imageList)
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlUserGroups({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  const getFullDataMeterDevicesSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataMeterDevicesSelected(fullDataSelection)
  }

  const getFullDataStationIslandsSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataStationIslandsSelected(fullDataSelection)
  }

  const handleOnKeyUpRIF = (event) => {
    const { value } = event.target

    const rifFormmated = formatRIF(value)

    formStation.setValue('rifNumber', rifFormmated)
  }

  const formatCITypes = () => {
    const allCITypes = [CI_TYPES.VENEZUELAN, CI_TYPES.JURIDICAL, CI_TYPES.FOREIGN, CI_TYPES.PASSPORT, CI_TYPES.GOVERNMENTAL]
    const allTypesCIFormated = allCITypes.map(ciType => ({ label: ciType.key, value: ciType.key.toLowerCase() }))
    return allTypesCIFormated
  }

  // const handleCloseComparisons = () => {
  //   if (showComparisons.ciImage === true) {
  //     setShowComparisons(prevState => ({ ...prevState, ciImage: false }))
  //   }

  //   if (showComparisons.userPhoto === true) {
  //     setShowComparisons(prevState => ({ ...prevState, userPhoto: false }))
  //   }
  // }

  const onSubmit = async (data: IFormCreateStation) => {
    if (!fullDataMeterDevicesSelected?.length) {
      toast.error('Los medidores son requeridos')
      setLoading({ meessage: '', value: false })
      return
    }

    if (fullDataMeterDevicesSelected?.length > 50) {
      toast.error('Seleccione solo hasta 50 medidores')
      setLoading({ meessage: '', value: false })
      return
    }

    if (!fullDataStationIslandsSelected?.length) {
      toast.error('Las islas son requerida')
      setLoading({ meessage: '', value: false })
      return
    }

    if (fullDataStationIslandsSelected?.length > 20) {
      toast.error('Seleccione solo hasta 20 islas')
      setLoading({ meessage: '', value: false })
      return
    }

    if (!multipleStationImages.length) {
      toast.error('Las fotos de la estación son requeridas')
      setLoading({ meessage: '', value: false })
      return
    }

    setLoading(({ meessage: 'Creando Estación', value: true }))
    setModalInfo(prevState => ({ ...prevState, label: 'Creando Estación', open: true }))
    await simulateFetch(3000)

    console.log({
      ...data,
      rif: `${data.rifType.toUpperCase()}${data.rifNumber}`.replaceAll('.', ''),
      direction: {
        city: data.directionCity,
        state: data.directionState,
        reference: data.directionReference
      },
      meterDevice: { ...fullDataMeterDevicesSelected[0].original }
    })

    setModalInfo(prevState => ({ label: 'Estación Creada', open: true, illustration: <Congratulations className='h-72' /> }))
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false })
    setLoading({ meessage: '', value: false })

    // router.push('/estaciones')
  }

  return (
    <>
      <Dialog modal open={modalInfo.open}>
        <DialogContent aria-modal>
          <DialogHeader>
            <div className='w-full h-full flex flex-col justify-center items-center'>
              {loading.value && <WomanLoading className='w-72' />}
              {modalInfo.illustration}

              <div className='flex flex-col justify-center items-center'>
                <h5 className='font-bold text-4xl'>{modalInfo.label}</h5>
                {loading.value && <div className='dot-flashing mt-6 ml-5'></div>}
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* <Dialog modal open={showComparisons.ciImage} onOpenChange={handleCloseComparisons}>
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
      </Dialog> */}

      {/* <Dialog modal open={showComparisons.userPhoto} onOpenChange={handleCloseComparisons}>
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
      </Dialog> */}

      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardHeader>
              <Avatar className='w-full h-32 rounded-sm mx-auto'>
                <AvatarImage src={multipleStationImages[0]?.data_url} className='object-contain w-full h-full' />
                <AvatarFallback className='rounded-md'>
                  <IconBusStop className='text-zinc-500 w-10 h-10' />
                </AvatarFallback>
              </Avatar>
            </CardHeader>

            <CardContent>
              <h6 className='font-semibold'>Informacion Basica</h6>

              <ul className='mt-2'>
                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Título:</span> &nbsp;
                  <span className='dark:text-gray-300'>{formStation.watch('title')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>RIF:</span> &nbsp;
                  <span className='dark:text-gray-300'>{formStation.watch('rifType')?.toUpperCase()}-{formStation.watch('rifNumber')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Modalidad:</span> &nbsp;
                  <span className='dark:text-gray-300'>{formStation.watch('modality')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Despacha Gasolina:</span> &nbsp;
                  <span className='dark:text-gray-300'>{formStation.watch('isGasolineDispatch') ? 'Si' : 'No'}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Despacha Disel:</span> &nbsp;
                  <span className='dark:text-gray-300'>{formStation.watch('isDiselDispatch') ? 'Si' : 'No'}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <span className='font-semibold dark:text-white'>Razon Social:</span> &nbsp;
                  <span className='dark:text-gray-300'>{formStation.watch('socialReason')}</span>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge
                className={`w-full text-sm h-full py-1.5 ${IS_ACTIVE[formStation.watch('isActive')]?.value ? 'border-2 bg-green-100 border-green-500 text-green-500' : 'border-2 bg-red-100 border-red-500 text-red-500'}`}
              >
                {formStation.watch('isActive') === 'true' ? 'Activo' : 'Bloqueado'}
              </Badge>

              <Separator className='my-2' />

              <Badge className='w-full text-sm h-full py-1.5'>
                {formStation.watch('status') || 'Vacio'}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className='w-full pt-6'>
          <form onSubmit={formStation.handleSubmit(onSubmit)} autoFocus className='w-full'>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
              <Card className='p-4 w-full'>
                <CardTitle>Informacion Basica</CardTitle>

                <Separator className='my-4' />

                <section className='w-full space-y-4'>
                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <Input
                      id='title'
                      type='text'
                      tabIndex={1}
                      label='Título'
                      placeholder='Estacion Pepito'
                      register={formStation.register}
                      inputErrors={stationRules.title}
                      messageErrors={formStation.formState.errors}
                    />

                    <div className='w-full flex justify-start items-end gap-x-2'>
                      <GenericCombobox
                        id='rifType'
                        form={formStation}
                        tabIndex={2}
                        label='RIF'
                        defaultValue='v'
                        placeholder='Buscar...'
                        ctaPlaceholder='Tipo'
                        buttonClassName='w-[80px]'
                        popoverClassName='w-[90px]'
                        notFoundLabel='Codigo No Encontrado'
                        items={formatCITypes()}
                      />

                      <Input
                        id='rifNumber'
                        type='text'
                        tabIndex={3}
                        maxLength={10}
                        placeholder='00.000.000'
                        register={formStation.register}
                        onKeyUp={handleOnKeyUpRIF}
                        inputErrors={stationRules.rifNumber}
                        onKeyPress={handleOnlyNumbers}
                        messageErrors={formStation.formState.errors}
                      />
                    </div>
                  </div>

                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <GenericSelect
                      id='modality'
                      label='Modalidad'
                      placeholder='Seleccione un Modalidad'
                      defaultValue='Subsidiada'
                      tabIndex={4}
                      fieldControlled={{ control: formStation.control, rules: stationRules.modality }}
                      items={[
                        {
                          label: 'Subsidiada',
                          value: 'Subsidiada'
                        },
                        {
                          label: 'Internacional',
                          value: 'Internacional'
                        }
                      ]}
                    />

                    <GenericSelect
                      id='type'
                      label='Tipo'
                      placeholder='Seleccione un Tipo'
                      defaultValue='Tercero'
                      tabIndex={5}
                      fieldControlled={{ control: formStation.control, rules: stationRules.type }}
                      items={[
                        {
                          label: 'Tercero',
                          value: 'Tercero'
                        },
                        {
                          label: 'Propio',
                          value: 'Propio'
                        }
                      ]}
                    />
                  </div>

                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <GenericSelect
                      id='nbBandera'
                      label='Bandera'
                      placeholder='PDV'
                      defaultValue='PDV'
                      tabIndex={6}
                      fieldControlled={{ control: formStation.control, rules: stationRules.nbBandera }}
                      items={[
                        {
                          label: 'PDV',
                          value: 'PDV'
                        },
                        {
                          label: 'Otro',
                          value: 'Otro'
                        }
                      ]}
                    />

                    <GenericSelect
                      id='cadenaSum'
                      label='Cadena de Suministros'
                      placeholder='SAAM'
                      defaultValue='SAAM'
                      tabIndex={7}
                      fieldControlled={{ control: formStation.control, rules: stationRules.cadenaSum }}
                      items={[
                        {
                          label: 'SAAM',
                          value: 'SAAM'
                        },
                        {
                          label: 'Otro',
                          value: 'Otro'
                        }
                      ]}
                    />
                  </div>

                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <GenericSelect
                      id='isDiselDispatch'
                      label='Despacha Disel'
                      placeholder='Si o No'
                      defaultValue='true'
                      tabIndex={8}
                      fieldControlled={{ control: formStation.control, rules: stationRules.isDiselDispatch }}
                      items={[
                        {
                          label: 'Si',
                          value: 'true'
                        },
                        {
                          label: 'No',
                          value: 'false'
                        }
                      ]}
                    />

                    <GenericSelect
                      id='isGasolineDispatch'
                      label='Despacha Gasolina'
                      placeholder='Si o No'
                      defaultValue='true'
                      tabIndex={9}
                      fieldControlled={{ control: formStation.control, rules: stationRules.isGasolineDispatch }}
                      items={[
                        {
                          label: 'Si',
                          value: 'true'
                        },
                        {
                          label: 'No',
                          value: 'false'
                        }
                      ]}
                    />

                  </div>

                  <TextArea
                    id='socialReason'
                    rows={5}
                    tabIndex={10}
                    label='Razón Social'
                    register={formStation.register}
                    inputErrors={stationRules.socialReason}
                    messageErrors={formStation.formState.errors}
                    placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit quo laudantium ipsum natus.'
                  />
                </section>
              </Card>
            </div>

            <Card className='p-4 mt-6 w-full'>
              <CardTitle>Estados</CardTitle>

              <Separator className='my-4' />
              <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <GenericSelect
                  id='isActive'
                  label='Estado'
                  placeholder='Seleccione un Estado'
                  defaultValue='true'
                  tabIndex={11}
                  fieldControlled={{ control: formStation.control, rules: stationRules.isActive }}
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

                <GenericSelect
                  id='status'
                  label='Estatus'
                  placeholder='Seleccione un Estado'
                  defaultValue='Operativo'
                  tabIndex={12}
                  fieldControlled={{ control: formStation.control, rules: stationRules.status }}
                  items={[
                    {
                      label: 'Operativo',
                      value: 'Operativo'
                    },
                    {
                      label: 'En Mantenimiento',
                      value: 'En Mantenimiento'
                    }
                  ]}
                />
              </div>
            </Card>

            <Card className='p-4 mt-6 w-full'>
              <CardTitle>Dirección</CardTitle>

              <Separator className='my-4' />

              <section className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <GenericSelect
                  id='directionState'
                  label='Estado'
                  placeholder='Caracas'
                  defaultValue='Distrito Capital'
                  tabIndex={13}
                  fieldControlled={{ control: formStation.control, rules: stationRules.directionState }}
                  items={[
                    {
                      label: 'Distrito Capital',
                      value: 'Distrito Capital'
                    },
                    {
                      label: 'Carabobo',
                      value: 'Carabobo'
                    }
                  ]}
                />

                <GenericSelect
                  id='directionCity'
                  label='Ciudad'
                  placeholder='Caracas'
                  defaultValue='Caracas'
                  tabIndex={14}
                  fieldControlled={{ control: formStation.control, rules: stationRules.directionCity }}
                  items={[
                    {
                      label: 'Caracas',
                      value: 'Caracas'
                    },
                    {
                      label: 'Valencia',
                      value: 'Valencia'
                    }
                  ]}
                />
              </section>

              <TextArea
                id='directionReference'
                rows={5}
                tabIndex={15}
                label='Referencia'
                classNameContainer='mt-4'
                register={formStation.register}
                inputErrors={stationRules.directionReference}
                messageErrors={formStation.formState.errors}
                placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit quo laudantium ipsum natus.'
              />
            </Card>
          </form>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Medidores</CardTitle>
            <CardDescription>Seleccione un medidor</CardDescription>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={data?.results}
              pagination={pagination}
              columns={getMeterDeviceColumns({ selection: true })}
              queryInfo={{ isFetching: isLoadingMeterModels, error }}
              inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Medidores' }}
              selection={{
                rowSelection: tableMeterDevicesSelected,
                setRowSelection: setTableMeterDevicesSelected,
                getFullDataSelection: getFullDataMeterDevicesSelection
              }}
            />
          </Card>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Islas</CardTitle>
            <CardDescription>Seleccione la cantidad de islas</CardDescription>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={data?.results}
              pagination={pagination}
              columns={getMeterDeviceColumns({ selection: true })}
              queryInfo={{ isFetching: isLoadingMeterModels, error }}
              inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Medidores' }}
              selection={{
                rowSelection: tableStationIslandsSelected,
                setRowSelection: setTableStationIslandsSelected,
                getFullDataSelection: getFullDataStationIslandsSelection
              }}
            />
          </Card>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Coordenadas</CardTitle>

            <Separator className='my-4' />

            <div className='w-full h-96 bg-slate-50 rounded-md'>
              <BasicMapNoSSR />
            </div>
          </Card>

          <Card className='p-4 mt-6 w-full'>
            <CardTitle>Fotos de la Estación</CardTitle>

            <Separator className='my-4' />

            <MultipleImages
              zoom
              emptyClassName='h-[300px]'
              onChange={onChangeMultipleTruckImages}
              imageToUpload={multipleStationImages}
              uploadLabel='Cargar Fotos de la Estación'
              tabIndexs={{ upload: 16, change: 17, delete: 18 }}
              icons={{ placeholder: <IconBusStop className='text-zinc-400 w-14 h-14' strokeWidth={1.5} /> }}
            />
          </Card>

          <section className='w-full flex justify-between items-start mt-6 gap-x-6'>
            <Button variant='outline' tabIndex={19} type='button' className='w-full py-2 text-base'>
              Cancelar
            </Button>

            <Button
              type='submit'
              tabIndex={20}
              className='w-full py-2 text-base'
              isLoading={loading.value}
              onClick={formStation.handleSubmit(onSubmit)}
            >
              Crear Estación
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
