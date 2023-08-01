import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import { IconBusStop, IconUser, IconUserPlus } from '@tabler/icons-react'
// import ReactCompareImage from 'react-compare-image'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import JSConfetti from 'js-confetti'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { EStationType, IStation, type IFetchDataTable, type IFormCreateStation, type IFormCreateStationContact, type IMeterDevice, EHydrocarbon } from '@/lib/types'
import { handleOnlyNumbers } from '@/lib/utils/handleOnlyNumbers'
import { handleFetchUrlUserGroups } from '@/lib/services/users'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { formatCI, formatCITypes, formatPhoneNumber, formatRIF } from '@/lib/utils/formaters'
import { useFetch } from '@/lib/hooks/useFetch'
import { stationContactRules, stationRules } from './rules'
import { APP_CONFIG } from '@/config'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  ScrollArea,
  Separator
} from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { MultipleImages } from '@/components/common/uploadImages/MultipleImages'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { GenericCombobox } from '@/components/common/combox'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'
import { UploadImage } from '@/components/common/uploadImages'
import { useStationFlow } from '@/lib/store/stationFlow'

const { CI_TYPES, IS_ACTIVE, PHONE_LINE_CODES } = APP_CONFIG
const BasicMapNoSSR = dynamic(() => import('@/components/common/gps/BasicMap'), { ssr: false })

export const FormEditStation = ({ station }: { station: IStation }) => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableStationIslandsSelected, setTableStationIslandsSelected] = useState<RowSelectionState>({})
  const [tableMeterDevicesSelected, setTableMeterDevicesSelected] = useState<RowSelectionState>({})
  // const [showComparisons, setShowComparisons] = useState({ userPhoto: false, ciImage: false })
  const [modalInfo, setModalInfo] = useState({ open: false, label: '', illustration: null, type: '' })
  const [fullDataStationIslandsSelected, setFullDataStationIslandsSelected] = useState([])
  const [fullDataMeterDevicesSelected, setFullDataMeterDevicesSelected] = useState([])
  const [multipleStationImages, setMultipleStationImages] = useState([])
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const [stationContactImage, setStationContactImage] = useState([])
  const formStationContact = useForm<IFormCreateStationContact>()
  const [contactsCreated, setContactsCreated] = useState([])
  const { setTypeStationToCreate } = useStationFlow()
  const formStation = useForm<IFormCreateStation>()
  const router = useRouter()

  const { data, error, isLoading: isLoadingMeterModels, fetcher } = useFetch<IFetchDataTable<IMeterDevice>>('/api/meter-devices')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Medidores', singularItem: 'Medidor' }
  }

  const handleOnKeyUpCI = (event) => {
    const { value } = event.target

    const ciFormmated = formatCI(value)

    formStationContact.setValue('ciNumber', ciFormmated)
  }

  const handleOnKeyUpPhoneNumber = (event) => {
    const { value } = event.target

    const phoneNumberFormated = formatPhoneNumber(value)

    formStationContact.setValue('phone', phoneNumberFormated)
  }

  const onChangeStationContactImage = (imageList, addUpdateIndex) => {
    console.log(imageList)
    setStationContactImage(imageList)
  }

  const onChangeStationImages = (imageList, addUpdateIndex) => {
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

  // const handleCloseComparisons = () => {
  //   if (showComparisons.ciImage === true) {
  //     setShowComparisons(prevState => ({ ...prevState, ciImage: false }))
  //   }

  //   if (showComparisons.userPhoto === true) {
  //     setShowComparisons(prevState => ({ ...prevState, userPhoto: false }))
  //   }
  // }

  const formatCodePhoneLines = () => {
    const allCodeLines = [...PHONE_LINE_CODES.DIGITAL, ...PHONE_LINE_CODES.MOVILNET, ...PHONE_LINE_CODES.MOVISTAR]
    return allCodeLines
  }

  const handleColsGrid = () => {
    let colCount = Math.min(3, contactsCreated.length + 1) // Limitar a un máximo de 3 columnas
    if (contactsCreated.length > 3) {
      colCount = 3 // Mostrar siempre 3 columnas si hay más elementos que la cantidad permitida
    }

    return colCount
  }

  const onSubmitStation = async (data: IFormCreateStation) => {
    // if (!fullDataMeterDevicesSelected?.length) {
    //   toast.error('Los medidores son requeridos')
    //   setLoading({ meessage: '', value: false })
    //   return
    // }

    // if (fullDataMeterDevicesSelected?.length > 50) {
    //   toast.error('Seleccione solo hasta 50 medidores')
    //   setLoading({ meessage: '', value: false })
    //   return
    // }

    // if (!fullDataStationIslandsSelected?.length) {
    //   toast.error('Las islas son requerida')
    //   setLoading({ meessage: '', value: false })
    //   return
    // }

    // if (fullDataStationIslandsSelected?.length > 20) {
    //   toast.error('Seleccione solo hasta 20 islas')
    //   setLoading({ meessage: '', value: false })
    //   return
    // }

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
      }
      // meterDevice: { ...fullDataMeterDevicesSelected[0].original }
    })

    setModalInfo(prevState => ({ label: 'Estación Creada', open: true, illustration: <Congratulations className='h-72' />, type: '' }))
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false, type: '' })
    setLoading({ meessage: '', value: false })
    // allowTabsToComplete()

    if (data.type === EStationType.PUMP) {
      router.push('/estaciones/e190f96d-d703-4c6d-816f-1fafee68273b/islas/crear')
    }

    if (data.type === EStationType.STOCKAGE) {
      router.push('/estaciones/e190f96d-d703-4c6d-816f-1fafee68273b/another/crear')
    }
  }

  const onSubmitStationContact = async (data: IFormCreateStationContact) => {
    setModalInfo({ illustration: null, label: '', open: false, type: '' })
    setLoading(({ meessage: 'Creando Contacto', value: true }))
    setModalInfo(prevState => ({ ...prevState, label: 'Creando Contacto', open: true }))
    await simulateFetch(3000)

    setContactsCreated(prevState => ([...prevState, { ...data, phone: `(${data.phoneCode}) ${data.phoneNumber}` }]))

    setModalInfo({ label: 'Contacto Creado', open: true, illustration: <Congratulations className='h-72' />, type: '' })
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false, type: '' })
    setLoading({ meessage: '', value: false })
    formStationContact.reset()
  }

  const handleOpenCreateTruckModal = (value: boolean) => setModalInfo(prevState => ({ ...prevState, type: 'CREATE_STATION_CONTACT', open: value }))

  useEffect(() => {
    const subscription = formStation.watch((value, { name, type }) => {
      console.log(value, name, type)
      if (name === 'type') {
        setTypeStationToCreate(value.type as EStationType)
      }
    })
    return () => subscription.unsubscribe()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formStation.watch])

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

      {/* Crear Contacto de la Estacion */}
      <Dialog open={modalInfo.type === 'CREATE_STATION_CONTACT' && modalInfo.open} onOpenChange={handleOpenCreateTruckModal}>
        <DialogContent>
          <ScrollArea className='px-2'>
            <DialogHeader>
              <DialogTitle>Crear Contacto</DialogTitle>

              <DialogDescription>
                Crea contacto para asignarlo a una estación
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={formStationContact.handleSubmit(onSubmitStationContact)} autoFocus className='w-full mt-4'>
              <section className='w-full space-y-4'>
                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    id='names'
                    type='text'
                    tabIndex={1}
                    label='Nombres'
                    placeholder='Kevin Daniel'
                    register={formStationContact.register}
                    inputErrors={stationContactRules.names}
                    messageErrors={formStationContact.formState.errors}
                  />

                  <Input
                    id='surnames'
                    type='text'
                    tabIndex={1}
                    label='Apellidos'
                    placeholder='Blanco Ortiz'
                    register={formStationContact.register}
                    inputErrors={stationContactRules.surnames}
                    messageErrors={formStationContact.formState.errors}
                  />
                </div>

                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <div className='w-full flex justify-start items-end gap-x-2'>
                    <GenericCombobox
                      id='ciType'
                      form={formStationContact}
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
                      onKeyUp={handleOnKeyUpCI}
                      onKeyPress={handleOnlyNumbers}
                      register={formStationContact.register}
                      inputErrors={stationContactRules.ciNumber}
                      messageErrors={formStationContact.formState.errors}
                    />
                  </div>

                  <div className='w-full flex justify-start items-end gap-x-2'>
                    <GenericCombobox
                      id='phoneCode'
                      tabIndex={4}
                      label='Telefono'
                      defaultValue='0412'
                      placeholder='Buscar...'
                      ctaPlaceholder='Codigo'
                      form={formStationContact}
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
                      onKeyPress={handleOnlyNumbers}
                      onKeyUp={handleOnKeyUpPhoneNumber}
                      register={formStationContact.register}
                      inputErrors={stationContactRules.phoneNumber}
                      messageErrors={formStationContact.formState.errors}
                    />
                  </div>
                </div>
              </section>

              <div className='mt-4'>
                <UploadImage
                  zoom
                  label='Imagen del Unidad'
                  emptyClassName='h-[200px]'
                  onChange={onChangeStationContactImage}
                  imageToUpload={stationContactImage}
                  uploadLabel='Cargar Foto'
                  tabIndexs={{ upload: 4, change: 4, delete: 5 }}
                  icons={{ placeholder: <IconUserPlus className='text-zinc-400 w-10 h-10' strokeWidth={1.5} /> }}
                />
              </div>
            </form>

            <DialogFooter className='flex flex-col gap-y-4 mt-4'>
              <Button
                type='button'
                variant='outline'
                isLoading={loading.value}
                onClick={() => handleOpenCreateTruckModal(false)}
              >
                Cancelar
              </Button>

              <Button
                type='button'
                isLoading={loading.value}
                onClick={formStationContact.handleSubmit(onSubmitStationContact)}
              >
                Crear Contacto
              </Button>
            </DialogFooter>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <div className='w-full h-full flex justify-start items-start'>
        <div className='w-full'>
          <form onSubmit={formStation.handleSubmit(onSubmitStation)} autoFocus className='w-full'>
            <Card className='p-4 w-full'>
              <CardTitle>Informacion Basica</CardTitle>

              <Separator className='my-4' />

              <section className='w-full space-y-4'>
                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    id='name'
                    type='text'
                    tabIndex={1}
                    label='Nombre'
                    placeholder='Estacion Pepito'
                    register={formStation.register}
                    inputErrors={stationRules.name}
                    messageErrors={formStation.formState.errors}
                    defaultValue={station.name}
                  />

                  <div className='w-full flex justify-start items-end gap-x-2'>
                    <GenericCombobox
                      id='rifType'
                      form={formStation}
                      tabIndex={2}
                      label='RIF'
                      defaultValue='J'
                      placeholder='Buscar...'
                      ctaPlaceholder='Tipo'
                      buttonClassName='w-[80px]'
                      popoverClassName='w-[90px]'
                      notFoundLabel='Codigo No Encontrado'
                      items={[
                        {
                          label: 'J',
                          value: 'J'
                        },
                        {
                          label: 'G',
                          value: 'G'
                        }
                      ]}
                    />

                    <Input
                      id='rifNumber'
                      type='text'
                      tabIndex={3}
                      maxLength={10}
                      placeholder='00.000.000'
                      defaultValue={station.rif}
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
                    tabIndex={4}
                    label='Modalidad'
                    defaultValue={station.modality}
                    placeholder='Seleccione un Modalidad'
                    fieldControlled={{ control: formStation.control, rules: stationRules.modality }}
                    items={[
                      {
                        label: 'Subsidiada',
                        value: 'Subsidiada'
                      },
                      {
                        label: 'Internacional',
                        value: 'Internacional'
                      },
                      {
                        label: 'Integral',
                        value: 'Integral'
                      }
                    ]}
                  />

                  <GenericSelect
                    id='type'
                    label='Tipo'
                    placeholder='Seleccione un Tipo'
                    defaultValue={APP_CONFIG.STATION_TYPE.PUMP.value === station.type ? APP_CONFIG.STATION_TYPE.PUMP.value : APP_CONFIG.STATION_TYPE.STOCKAGE.value}
                    tabIndex={5}
                    fieldControlled={{ control: formStation.control, rules: stationRules.type }}
                    items={[
                      {
                        label: 'Bomba',
                        value: EStationType.PUMP
                      },
                      {
                        label: 'Almacenamiento',
                        value: EStationType.STOCKAGE
                      }
                    ]}
                  />
                </div>

                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <GenericSelect
                    id='logo'
                    label='Logo'
                    placeholder='PDV'
                    defaultValue={station.logo}
                    tabIndex={6}
                    fieldControlled={{ control: formStation.control, rules: stationRules.logo }}
                    items={[
                      {
                        label: 'PDV',
                        value: 'Pdv'
                      },
                      {
                        label: 'Exmayoristas Blancas',
                        value: 'Exmayoristas Blancas'
                      }
                    ]}
                  />

                  <GenericSelect
                    id='cadenaSum'
                    label='Cadena de Suministros'
                    placeholder='SAAM'
                    defaultValue={station.chain_supply}
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
                    defaultValue={station.provider_services.includes(EHydrocarbon.DIESEL) ? 'true' : 'false'}
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
                    defaultValue={station.provider_services.includes(EHydrocarbon.GASOLINE) ? 'true' : 'false'}
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
                  defaultValue={station.social_reason}
                  inputErrors={stationRules.socialReason}
                  messageErrors={formStation.formState.errors}
                  placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit quo laudantium ipsum natus.'
                />
              </section>
            </Card>

            <Card className='p-4 mt-6 w-full'>
              <CardTitle>Estados</CardTitle>

              <Separator className='my-4' />
              <GenericSelect
                id='status'
                tabIndex={12}
                label='Estatus'
                defaultValue={station.state}
                placeholder='Seleccione un Estado'
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
            </Card>

            <Card className='p-4 mt-6 w-full'>
              <CardTitle>Dirección</CardTitle>

              <Separator className='my-4' />

              <section className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <GenericSelect
                  id='directionState'
                  label='Estado'
                  placeholder='Caracas'
                  defaultValue={station.location.state}
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
                  defaultValue={station.location.city}
                  tabIndex={14}
                  fieldControlled={{ control: formStation.control, rules: stationRules.directionCity }}
                  items={[
                    {
                      label: 'Gran Caracas',
                      value: 'Gran Caracas'
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
                defaultValue={station.location.address}
                inputErrors={stationRules.directionReference}
                messageErrors={formStation.formState.errors}
                placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit quo laudantium ipsum natus.'
              />
            </Card>

            <Card className='p-4 mt-6 w-full'>
              <CardTitle>Contactos</CardTitle>

              <Separator className='my-4' />
              <div className={
                `w-full grid grid-cols-1 grid-rows-2 sm:grid-rows-1 gap-y-3 gap-x-5 sm:grid-cols-${handleColsGrid()}`
              }>
                {
                  contactsCreated.map(contact => (
                    <Card key={contact.id}>
                      <CardHeader>
                        <Avatar className='w-16 h-16 rounded-full mx-auto'>
                          <AvatarImage src={contact?.photo || 'https://via.placeholder.com/200/ff4d4d'} className='object-contain' />

                          <AvatarFallback className='rounded-full'>
                            <IconUser className='text-zinc-500 w-6 h-6' />
                          </AvatarFallback>
                        </Avatar>
                      </CardHeader>

                      <Separator />

                      <CardContent className='pt-4'>
                        <Input
                          id='name'
                          type='text'
                          tabIndex={14}
                          label='Nombre'
                          readOnly
                          value={contact.name || 'Sin Nombre'}
                        />

                        <div className='space-y-2 mt-4'>
                          <Input
                            id='email'
                            type='text'
                            tabIndex={14}
                            label='Correo Electrónico'
                            readOnly
                            value={contact.email || 'Sin Correo'}
                          />

                          <Input
                            id='phone'
                            type='text'
                            tabIndex={14}
                            label='Teléfono'
                            readOnly
                            value={contact.phone || 'Sin Teléfono'}
                          />

                          <Input
                            id='ci'
                            type='text'
                            tabIndex={14}
                            label='Cedula de Identidad'
                            readOnly
                            value={contact.ci || 'Sin Cedula'}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))
                }

                <div className ='imagen-container h-full'>
                  <div
                    className={`w-full ${!contactsCreated.length ? 'h-64' : 'h-full'} border-slate-50 flex flex-col justify-center items-center border-dashed border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`}>
                    <Button
                      type='button'
                      variant='outline'
                      className='p-2 h-min'
                      onClick={() => setModalInfo(prevState => ({ ...prevState, open: true, type: 'CREATE_STATION_CONTACT' }))}
                    >
                      <IconUserPlus className='w-6 h-6 mr-2'/>
                      Agregar Contacto
                    </Button>
                  </div>
                </div>

              </div>
            </Card>
          </form>

          {/* <Card className='p-4 mt-6 w-full'>
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
          </Card> */}

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
              onChange={onChangeStationImages}
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
              onClick={formStation.handleSubmit(onSubmitStation)}
            >
              Crear Estación
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
