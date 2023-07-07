import { IconAdOff, IconBadgeAd, IconClipboard, IconDots, IconEdit, IconEye, IconEyeOff, IconRouter, IconSortAscending, IconSortDescending, IconStatusChange } from '@tabler/icons-react'
import { Column, ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { ICreateMeterModel, IFormRules, IItemToFilter, IMeterModel } from '@/lib/types'
import { useFetch } from '@/lib/hooks/useFetch'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, Badge, Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Label } from '@/components/ui'
import { Spinner } from '@/components/common/loaders/Spinner'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/common/inputs/Input'
import { GenericSelect } from '@/components/common/selects'
import { TextArea } from '@/components/common/textarea'
import { UploadImage } from '@/components/common/uploadImages'
import { convertBytes } from '../formaters'
import { compressImage } from '../handleCompressionImage'
import { APP_CONFIG } from '@/config'
import { simulateFetch } from '../simulateFetch'
import JSConfetti from 'js-confetti'

type TMeterModelFields = 'title' | 'description' | 'isActive'
export const meterModelRules: IFormRules<TMeterModelFields> = {
  title: {
    minLength: { value: 2, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 50, message: 'Maximo 50 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  description: {
    minLength: { value: 2, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 250, message: 'Maximo 250 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  isActive: {
    required: { value: true, message: 'Requerido' }
  }
}

export const MeterModelRowActions = ({ meterModel }: { meterModel: IMeterModel }) => {
  const initialImageValues = {
    original: [{ data_url: meterModel.image, file: null }],
    compressed: [{ data_url: meterModel.image, file: null }]
  }

  const defaultValues: ICreateMeterModel = {
    title: meterModel.title,
    description: meterModel.description,
    isActive: meterModel.isActive.toString() as 'true' | 'false',
    type: meterModel.type
  }

  const [loading, setLoading] = useState({ meessage: '', value: false })
  const formMeterModel = useForm<ICreateMeterModel>({ defaultValues })
  const [modelImage, setModelImage] = useState(initialImageValues)
  const [openEditModel, setOpenEditModal] = useState(false)
  const [openViewModel, setOpenViewModel] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const { isLoading, error, fetcher } = useFetch()

  const blockUser = async () => {
    const data: any = await fetcher(`/api/meter-models/${meterModel.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`${meterModel.title} ha sido bloqueado`)
    setOpenAlert(false)
  }

  const handleOpenCreateModelMarkModal = (value: boolean) => setOpenEditModal(value)

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
    setOpenEditModal(false)
    await simulateFetch(3000)

    const meterModelImageFile = modelImage.compressed[0]?.file

    console.log({ ...data, image: meterModelImageFile })

    toast.success('Modelo Creado Exitosamente')
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setOpenEditModal(false)
    setLoading({ meessage: '', value: false })

    // router.push('/ajustes/marcas-de-medidores')
  }

  return (
    <>
      <AlertDialog open={openAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear este modelo de medidor?</AlertDialogTitle>
            <AlertDialogDescription>
                Se bloqueara la marca de medidor {meterModel.title}
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

      {/* Edit */}
      <Dialog open={openEditModel} onOpenChange={setOpenEditModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Modelo de Medidor</DialogTitle>

            <DialogDescription>
              Editar el modelo de un medidor para asignarlo a una marca de medidor.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={formMeterModel.handleSubmit(onSubmitFormMterModel)} autoFocus className='w-full'>
            <section className='w-full space-y-4'>
              <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <Input
                  id='title'
                  type='text'
                  value={meterModel.title}
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
                  defaultValue={String(meterModel.isActive)}
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

            <section>
              <GenericSelect
                id='type'
                label='Tipo de Modelo'
                placeholder='Seleccione un Estado'
                defaultValue={meterModel.type}
                tabIndex={6}
                fieldControlled={{ control: formMeterModel.control, rules: meterModelRules.isActive }}
                items={[
                  {
                    label: 'Litros',
                    value: 'litros'
                  },
                  {
                    label: 'Gasolina',
                    value: 'gasolina'
                  }
                ]}
              />
            </section>

            <section className='mt-4'>
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
            </section>
          </form>

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
              Editar Modelo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View */}
      <Dialog open={openViewModel} onOpenChange={setOpenViewModel}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modelo de Medidor</DialogTitle>

            <DialogDescription>Vista de detalle del model de medidor</DialogDescription>
          </DialogHeader>

          <section className='w-full space-y-4'>
            <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                tabIndex={1}
                id='title'
                type='text'
                value={meterModel.title}
                label='Titulo'
                placeholder='Pekkin'
                readOnly
              />

              <Input
                tabIndex={2}
                id='isActive'
                type='text'
                value={meterModel.isActive ? 'Activo' : 'Bloqueado'}
                label='EStado'
                placeholder='Pekkin'
                readOnly
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

          <section>
            <GenericSelect
              id='type'
              label='Tipo de Modelo'
              placeholder='Seleccione un Estado'
              defaultValue={meterModel.type}
              tabIndex={6}
              fieldControlled={{ control: formMeterModel.control, rules: meterModelRules.isActive }}
              items={[
                {
                  label: 'Litros',
                  value: 'litros'
                },
                {
                  label: 'Gasolina',
                  value: 'gasolina'
                }
              ]}
            />
          </section>

          <section className='mt-4'>
            <Label>Foto del Modelo</Label>

            {
              modelImage?.compressed[0]?.data_url
                ? (
                  <img
                    src={modelImage?.compressed[0]?.data_url}
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

          <DropdownMenuItem onClick={() => setOpenViewModel(true)}>
            <IconEye className='mr-2 h-4 w-4' />
            Ver Modelo
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOpenEditModal(true)}>
            <IconEdit className='mr-2 h-4 w-4' />
            Editar Modelo
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOpenAlert(true)}>
            <IconAdOff className='mr-2 h-4 w-4' />
            Bloquear Modelo
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(meterModel.id.toString())}>
            <IconClipboard className='h-4 w-4 mr-2' />
            Copiar ID
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export const ColumnSort = ({ column, columnLabel }: { column: Column<IMeterModel>, columnLabel: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          { columnLabel }
          <ChevronsUpDown className='h-4 w-4' />
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

export const meterModelColumns: ColumnDef<IMeterModel>[] = [
  {
    id: 'ID',
    accessorKey: 'id',
    header: ({ column }) => <ColumnSort column={column} columnLabel='ID' />,
    cell: ({ row: { original } }) => (
      <div className='font-medium pl-4'>
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
    id: 'Descripcion',
    accessorKey: 'description',
    header: 'Descripcion'
  },
  {
    id: 'Estado',
    accessorKey: 'isActive',
    header: ({ column }) => <ColumnSort column={column} columnLabel='Estado' />,
    cell: ({ row: { original } }) => {
      return (
        <Badge className='ml-3' variant={original.isActive ? 'success' : 'red'}>
          {original.isActive ? 'Activo' : 'Bloqueado'}
        </Badge>
      )
    }
  },
  {
    id: 'Acciones',
    accessorKey: 'actions',
    header: () => <div className='w-full text-right'>Acciones</div>,
    cell: ({ row }) => (
      <div className='w-full text-right'>
        <MeterModelRowActions meterModel={row.original} />
      </div>
    )
  }
]

export const meterModelColumnsToFilter: IItemToFilter[] = [
  {
    queryFilterColumnID: 'isActive',
    columnID: 'Estado',
    label: 'Estado',
    icon: <IconStatusChange className='h-4 w-4 mr-2' />,
    options: [
      {
        label: 'Activo',
        value: true
      },
      {
        label: 'Bloqueado',
        value: false
      }
    ]
  }
]
