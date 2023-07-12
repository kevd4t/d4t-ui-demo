import { IconClipboard, IconDots, IconEdit, IconEye, IconEyeOff, IconSortAscending, IconSortDescending, IconTruck, IconTruckOff } from '@tabler/icons-react'
import { Column, ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import JSConfetti from 'js-confetti'
import { toast } from 'sonner'

import { IFormEditTruck, IFormRules, ITruck } from '@/lib/types'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, Badge, Button, Checkbox, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Label, ScrollArea } from '@/components/ui'
import { ImagesSlider } from '@/components/common/sliders/ImagesSlider'
import { Input } from '@/components/common/inputs/Input'
import { Spinner } from '@/components/common/loaders/Spinner'
import { useFetch } from '@/lib/hooks/useFetch'
import { GenericSelect } from '@/components/common/selects'
import { UploadImage } from '@/components/common/uploadImages'
import { convertBytes } from '../formaters'
import { compressImage } from '../handleCompressionImage'
import { simulateFetch } from '../simulateFetch'
import { APP_CONFIG } from '@/config'
import { MultipleImages } from '@/components/common/uploadImages/MultipleImages'

type TMeterModelFields = 'title' | 'numberPlate' | 'status' | 'station' | 'gps'
export const meterModelRules: IFormRules<TMeterModelFields> = {
  title: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 50, message: 'Maximo 50 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  numberPlate: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 50, message: 'Maximo 50 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  status: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 50, message: 'Maximo 50 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  station: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 50, message: 'Maximo 50 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  gps: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 50, message: 'Maximo 50 Caracteres' },
    required: { value: true, message: 'Requerido' }
  }
}

export const TruckRowActions = ({ truck }: { truck: ITruck }) => {
  const initialImageValues = {
    original: [{ data_url: truck.images, file: null }],
    compressed: [{ data_url: truck.images, file: null }]
  }

  const defaultValues: IFormEditTruck = {
    title: truck.title,
    fleetId: truck?.fleet?.id,
    gpsId: truck.gps.id,
    type: truck.type,
    status: truck.status,
    stationId: truck.station.id,
    numberPlate: truck.numberPlate
  }

  const [loading, setLoading] = useState({ meessage: '', value: false })
  const [multipleTruckImages, setMultipleTruckImages] = useState([{ data_url: truck.images, file: null }])
  const formEditTruck = useForm<IFormEditTruck>({ defaultValues })
  const [modelImage, setModelImage] = useState(initialImageValues)
  const [openViewTruck, setOpenViewTruck] = useState(false)
  const [openEditModel, setOpenEditModal] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const { isLoading, error, fetcher } = useFetch()
  const router = useRouter()

  const blockUser = async () => {
    const data: any = await fetcher(`/api/users/${truck.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`${truck.title} ha sido bloqueado`)
    setOpenAlert(false)
  }

  const handleOpenCreateModelMarkModal = (value: boolean) => setOpenEditModal(value)

  const onSubmitFormEditTruck = async (data: IFormEditTruck) => {
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
    toast.message('Creando Unidad')
    await simulateFetch(3000)

    const meterModelImageFile = modelImage.compressed[0]?.file

    console.log({ ...data, image: meterModelImageFile })

    toast.success('Unidad Editada Exitosamente')
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setLoading({ meessage: '', value: false })

    // router.push('/ajustes/marcas-de-medidores')
  }

  const onChangeMultipleTruckImages = (imageList, addUpdateIndex) => {
    console.log(imageList)
    setMultipleTruckImages(imageList)
  }

  return (
    <>
      <AlertDialog open={openAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear este usuario?</AlertDialogTitle>

            <AlertDialogDescription>
                Se bloqueara la unidad {truck.title}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction disabled={isLoading} onClick={blockUser} className='w-[89px]'>
              { isLoading ? <Spinner /> : 'Bloquear' }
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Detalle */}
      <Dialog open={openViewTruck} onOpenChange={setOpenViewTruck}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Unidad</DialogTitle>

            <DialogDescription>Vista de detalle de la unidad</DialogDescription>
          </DialogHeader>

          <section>
            <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                tabIndex={1}
                id='title'
                type='text'
                value={truck.title}
                label='Título'
                placeholder='Título'
                readOnly
                autoFocus={false}
              />

              <Input
                tabIndex={2}
                id='numberPlate'
                type='text'
                value={truck.numberPlate}
                label='Matrícula'
                placeholder='Matricula'
                readOnly
              />
            </div>
          </section>

          <section className='w-full'>
            <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                tabIndex={3}
                id='status'
                type='text'
                value={truck.status}
                label='Estatus'
                placeholder='Estatus'
                readOnly
              />

              <Input
                tabIndex={4}
                id='numberPlate'
                type='text'
                value={truck.numberPlate}
                label='Matrícula'
                placeholder='Matricula'
                readOnly
              />
            </div>
          </section>

          <section className='w-full'>
            <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                tabIndex={5}
                id='station'
                type='text'
                value={truck.station.title}
                label='Estación'
                placeholder='Estación'
                readOnly
              />

              <Input
                tabIndex={6}
                id='gps'
                type='text'
                value={truck.gps.serial}
                label='GPS'
                placeholder='GPS'
                readOnly
              />
            </div>
          </section>

          <section>
            <Label>Fotos de la Unidad</Label>

            <div className='my-2'></div>

            <div className='w-full'>
              <ImagesSlider
                images={[1, 2, 3, 4].flatMap(() => truck.images)}
              />
            </div>
          </section>

          <DialogFooter>
            <Button
              type='button'
              variant='outline'
              onClick={() => setOpenViewTruck(false)}
            >
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Editar */}
      <Dialog open={openEditModel} onOpenChange={setOpenEditModal}>
        <DialogContent>
          <ScrollArea className='h-[70vh] px-2'>
            <DialogHeader>
              <DialogTitle>Editar Unidad</DialogTitle>

              <DialogDescription>
              Editar la unidad de una flota.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={formEditTruck.handleSubmit(onSubmitFormEditTruck)} autoFocus className='w-full'>
              <section className='w-full space-y-4'>
                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <Input
                    id='title'
                    type='text'
                    value={truck.title}
                    register={formEditTruck.register}
                    label='Nombre'
                    placeholder='Pekkin'
                    messageErrors={formEditTruck.formState.errors}
                    inputErrors={meterModelRules.title}
                    tabIndex={1}
                  />

                  <Input
                    type='text'
                    tabIndex={2}
                    id='numberPlate'
                    label='Matrícula'
                    value={truck.title}
                    placeholder='Pekkin'
                    register={formEditTruck.register}
                    inputErrors={meterModelRules.numberPlate}
                    messageErrors={formEditTruck.formState.errors}
                  />
                </div>
              </section>

              <section className='w-full space-y-4 mt-4'>
                <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                  <GenericSelect
                    id='status'
                    label='Estatus'
                    placeholder='Seleccione un Estatus'
                    defaultValue={'operativo'}
                    tabIndex={2}
                    fieldControlled={{ control: formEditTruck.control, rules: meterModelRules.status }}
                    items={[
                      {
                        label: 'Operativo',
                        value: 'Operativo'
                      },
                      {
                        label: 'En Mantenimiento',
                        value: 'mantenimiento'
                      }
                    ]}
                  />

                  <GenericSelect
                    id='gps'
                    label='GPS'
                    placeholder='Seleccione un Estado'
                    defaultValue={'J-454NX2'}
                    tabIndex={2}
                    fieldControlled={{ control: formEditTruck.control, rules: meterModelRules.gps }}
                    items={[
                      {
                        label: 'J-454NX2',
                        value: 'J-454NX2'
                      },
                      {
                        label: 'X-159AX7',
                        value: 'X-159AX7'
                      }
                    ]}
                  />
                </div>
              </section>

              <section className='mt-4'>
                <MultipleImages
                  zoom
                  label='Imagen del Unidad'
                  emptyClassName='h-[200px]'
                  onChange={onChangeMultipleTruckImages}
                  imageToUpload={multipleTruckImages.map(truckImage => truckImage.data_url)}
                  uploadLabel='Cargar Fotos de la Unidad'
                  tabIndexs={{ upload: 4, change: 4, delete: 5 }}
                  icons={{ placeholder: <IconTruck className='text-zinc-400 w-14 h-14' strokeWidth={1.5} /> }}
                />
              </section>
            </form>

            <DialogFooter className='flex flex-col gap-y-4'>
              <Button
                type='button'
                variant='outline'
                disabled={loading.value}
                onClick={() => handleOpenCreateModelMarkModal(false)}
              >
              Cancelar
              </Button>

              <Button
                type='button'
                isLoading={loading.value}
                onClick={formEditTruck.handleSubmit(onSubmitFormEditTruck)}
              >
              Editar Unidad
              </Button>
            </DialogFooter>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Abrir menu</span>
            <IconDots className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Acciones</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => setOpenViewTruck(true)}>
            <IconEye className='mr-2 h-4 w-4' />
            Ver Unidad
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOpenEditModal(true)}>
            <IconEdit className='mr-2 h-4 w-4' />
            Editar Unidad
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOpenAlert(true)}>
            <IconTruckOff className='mr-2 h-4 w-4' />
            Bloquear Unidad
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(truck.id.toString())}>
            <IconClipboard className='h-4 w-4 mr-2' />
            Copiar ID
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export const ColumnSort = ({ column, columnLabel }: { column: Column<ITruck>, columnLabel: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          { columnLabel }
          <ChevronsUpDown className='ml-2 h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Ordenar</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => column.toggleSorting(true)}
        >
          <IconSortAscending className='mr-2 h-4 w-4' />
          Ascendente
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => column.toggleSorting(false)}
        >
          <IconSortDescending className='mr-2 h-4 w-4' />
          Descendente
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => column.toggleVisibility(false) }>
          <IconEyeOff className='h-4 w-4 mr-2' />
          Ocultar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const truckColumns: ColumnDef<ITruck>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row, table }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    id: 'ID',
    accessorKey: 'id',
    header: ({ column }) => <ColumnSort column={column} columnLabel='ID' />,
    cell: ({ row: { original } }) => (
      <div className='font-medium pl-6'>
        { original.id }
      </div>
    )
  },
  {
    id: 'Titulo',
    accessorKey: 'title',
    header: 'Titulo',
    cell: ({ row: { original } }) => {
      return <div className='w-full'>{original.title}</div>
    }
  },
  {
    id: 'Matrícula',
    accessorKey: 'numberPlate',
    header: 'Matrícula',
    cell: ({ row: { original } }) => {
      return <div className='w-full'>{original.numberPlate}</div>
    }
  },
  {
    id: 'Tipo',
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row: { original } }) => (
      <Badge>
        {original.type}
      </Badge>
    )
  },
  {
    id: 'Estatus',
    accessorKey: 'status',
    header: ({ column }) => <ColumnSort column={column} columnLabel='Estatus' />,
    cell: ({ row }) => (
      <Badge className='ml-4'>
        {row.original.status}
      </Badge>
    )
  },
  {
    id: 'Acciones',
    accessorKey: 'actions',
    header: () => <div className='w-full text-right'>Acciones</div>,
    cell: ({ row }) => (
      <div className='w-full text-right'>
        <TruckRowActions truck={row.original} />
      </div>
    )
  }
]
