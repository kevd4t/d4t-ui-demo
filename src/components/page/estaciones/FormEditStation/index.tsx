import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import { IconBusStop, IconUser, IconUserPlus } from '@tabler/icons-react'
// import ReactCompareImage from 'react-compare-image'
import { useForm } from 'react-hook-form'
// import { useRouter } from 'next/router'
import JSConfetti from 'js-confetti'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { toast } from 'sonner'

import type { IFetchDataTable, IFormCreateStation, IFormCreateStationContact, IMeterDevice, IStation } from '@/lib/types'
import { getMeterDeviceColumns } from '@/lib/utils/tableColumns/meterDevices'
import { handleOnlyNumbers } from '@/lib/utils/handleOnlyNumbers'
import { handleFetchUrlUserGroups } from '@/lib/services/users'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { formatCI, formatPhoneNumber, formatRIF } from '@/lib/utils/formaters'
import { useFetch } from '@/lib/hooks/useFetch'
import { stationContactRules, stationRules } from './rules'
import { APP_CONFIG } from '@/config'

import { Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, ScrollArea, Separator } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { MultipleImages } from '@/components/common/uploadImages/MultipleImages'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { GenericCombobox } from '@/components/common/combox'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'
import { UploadImage } from '@/components/common/uploadImages'

const { CI_TYPES, IS_ACTIVE, PHONE_LINE_CODES } = APP_CONFIG
const BasicMapNoSSR = dynamic(() => import('@/components/common/gps/BasicMap'), { ssr: false })

export const FormEditStation = ({ station }: { station: IStation }) => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableStationIslandsSelected, setTableStationIslandsSelected] = useState<RowSelectionState>({})
  const [modalInfo, setModalInfo] = useState({ open: false, label: '', illustration: null, type: '' })
  const [tableMeterDevicesSelected, setTableMeterDevicesSelected] = useState<RowSelectionState>({})
  // const [showComparisons, setShowComparisons] = useState({ userPhoto: false, ciImage: false })
  const [fullDataStationIslandsSelected, setFullDataStationIslandsSelected] = useState([])
  const [fullDataMeterDevicesSelected, setFullDataMeterDevicesSelected] = useState([])
  const [multipleStationImages, setMultipleStationImages] = useState([])
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const [stationContactImage, setStationContactImage] = useState([])
  const formStationContact = useForm<IFormCreateStationContact>()
  const [contactsCreated, setContactsCreated] = useState([])
  const formStation = useForm<IFormCreateStation>()
  // const router = useRouter()

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

  const formatCITypes = () => {
    const allCITypes = [CI_TYPES.VENEZUELAN, CI_TYPES.JURIDICAL, CI_TYPES.FOREIGN, CI_TYPES.PASSPORT, CI_TYPES.GOVERNMENTAL]
    const allTypesCIFormated = allCITypes.map(ciType => ({ label: ciType.key, value: ciType.key.toLowerCase() }))
    return allTypesCIFormated
  }

  const formatCodePhoneLines = () => {
    const allCodeLines = [...PHONE_LINE_CODES.DIGITAL, ...PHONE_LINE_CODES.MOVILNET, ...PHONE_LINE_CODES.MOVISTAR]
    return allCodeLines
  }

  const handleColsGrid = () => {
    let colCount = Math.min(3, station.contacts.length + 1) // Limitar a un máximo de 3 columnas
    if (station.contacts.length > 3) {
      colCount = 3 // Mostrar siempre 3 columnas si hay más elementos que la cantidad permitida
    }

    return colCount
  }

  const onSubmitStation = async (data: IFormCreateStation) => {
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

    setModalInfo(prevState => ({ label: 'Estación Creada', open: true, illustration: <Congratulations className='h-72' />, type: '' }))
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false, type: '' })
    setLoading({ meessage: '', value: false })

    // router.push('/estaciones')
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

      <div className='w-full h-full flex justify-start items-start gap-x-10'>
        <div className='hidden max-w-xs w-full lg:flex flex-col justify-start items-start sticky pt-6 top-0 left-0'>
          <Card className='w-full sticky top-0 left-0'>
            <CardHeader>
              <Avatar className='w-full h-32 rounded-sm mx-auto'>
                <AvatarImage src={station?.images[0]} className='object-contain w-full h-full' />
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
          <form onSubmit={formStation.handleSubmit(onSubmitStation)} autoFocus className='w-full'>
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
                      defaultValue={station.title}
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
                        defaultValue={station.rif}
                        onKeyUp={handleOnKeyUpRIF}
                        onKeyPress={handleOnlyNumbers}
                        register={formStation.register}
                        inputErrors={stationRules.rifNumber}
                        messageErrors={formStation.formState.errors}
                      />
                    </div>
                  </div>

                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <GenericSelect
                      id='modality'
                      label='Modalidad'
                      placeholder='Seleccione un Modalidad'
                      defaultValue={station.modality}
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
                      tabIndex={5}
                      defaultValue={station.type}
                      placeholder='Seleccione un Tipo'
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
                      tabIndex={6}
                      label='Bandera'
                      placeholder='PDV'
                      defaultValue={station.nbBandera}
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
                      tabIndex={7}
                      placeholder='SAAM'
                      label='Cadena de Suministros'
                      defaultValue={station.cadenaSum}
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
                      tabIndex={8}
                      placeholder='Si o No'
                      label='Despacha Disel'
                      defaultValue={station.isDiselDispatch ? 'true' : 'false'}
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
                      tabIndex={9}
                      placeholder='Si o No'
                      label='Despacha Gasolina'
                      defaultValue={station.isGasolineDispatch ? 'true' : 'false'}
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
                    defaultValue={station.socialReason}
                    inputErrors={stationRules.socialReason}
                    messageErrors={formStation.formState.errors}
                    placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit quo laudantium ipsum natus.'
                  />
                </section>
              </Card>
            </div>

            <Card className='p-4 mt-6 w-full'>
              <CardTitle>Contactos</CardTitle>

              <Separator className='my-4' />
              <div className={
                `w-full grid grid-cols-1 grid-rows-2 sm:grid-rows-1 gap-y-3 gap-x-5 sm:grid-cols-${handleColsGrid()}`
              }>
                {
                  station.contacts.map(contact => (
                    <Card key={contact.id}>
                      <CardHeader>
                        <Avatar className='w-16 h-16 rounded-full mx-auto'>
                          <AvatarImage src={contact.photo || 'https://via.placeholder.com/200/ff4d4d'} className='object-contain' />

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
                    className={`w-full ${!contactsCreated.length ? 'h-[475px]' : 'h-full'} border-slate-50 flex flex-col justify-center items-center border-dashed border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`}>
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

            <Card className='p-4 mt-6 w-full'>
              <CardTitle>Estados</CardTitle>

              <Separator className='my-4' />
              <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <GenericSelect
                  id='isActive'
                  label='Estado'
                  tabIndex={11}
                  placeholder='Seleccione un Estado'
                  defaultValue={station.isActive ? 'true' : 'false'}
                  fieldControlled={{ control: formStation.control, rules: stationRules.isActive }}
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

                <GenericSelect
                  id='status'
                  label='Estatus'
                  tabIndex={12}
                  defaultValue={station.status}
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
              </div>
            </Card>

            <Card className='p-4 mt-6 w-full'>
              <CardTitle>Dirección</CardTitle>

              <Separator className='my-4' />

              <section className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <GenericSelect
                  id='directionState'
                  label='Estado'
                  tabIndex={13}
                  placeholder='Caracas'
                  defaultValue={station.direction.state}
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
                  tabIndex={14}
                  placeholder='Caracas'
                  defaultValue={station.direction.city}
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
                defaultValue={station.direction.reference}
                messageErrors={formStation.formState.errors}
                inputErrors={stationRules.directionReference}
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
