import { PaginationState } from '@tanstack/react-table'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { toast } from 'sonner'

import type { IFormCreateStatus, IFormCreateStatusType, IFormCreateSubcategory, ReactNode } from '@/lib/types'
import { getSubcategoryColumns } from '@/lib/utils/tableColumns/subcategories'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { subcategoryRules, categoryRules } from './rules'

import { Badge, Button, Card, CardContent, CardDescription, CardTitle, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Label, Separator } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'
import { convertHexToRGBA } from '@/lib/utils/hexToRGB'
import { ColorSquare } from '@/components/common/date-picker/ColorSquare'
import { PopoverPicker } from '@/components/common/date-picker/PopoverPicker'

interface IModalState {
  open: boolean
  label: string
  illustration?: ReactNode
  type: 'CREATE_STATUS' | 'CREATING_TYPE_STATUS' | 'CREATING_STATUS' | 'TYPE_STATUS_CREATED' | 'STATUS_CREATED'
}

export const FormCreateTypeStatus = () => {
  const [modalInfo, setModalInfo] = useState<IModalState>({ open: false, label: '', illustration: null, type: null })
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const [statusToCreate, setStatusToCreate] = useState<any[]>([])
  const formTypeStatus = useForm<IFormCreateStatusType>()
  const formStatus = useForm<IFormCreateStatus>()
  const [statusColor, setStatusColor] = useState('#b32aa9')
  const router = useRouter()

  const presetStatusColors = ['#cd9323', '#1a53d8', '#9a2151', '#0d6416', '#8d2808']

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Estados', singularItem: 'Estados' }
  }

  const removeLocalStatus = (idx: string|number) => {
    setStatusToCreate(prevState => prevState.filter((_, subCategoryIdx) => (subCategoryIdx !== idx)))
  }

  const handleOpenCreateStatusModal = (value: boolean) => setModalInfo(prevState => ({ ...prevState, type: 'CREATE_STATUS', open: value }))

  const onSubmitFormTypeStatus = async (data) => {
    if (!statusToCreate?.length) {
      toast.error('Almenos 1 estado debe ser agregado')
      setLoading({ meessage: '', value: false })
      return
    }

    setLoading(({ meessage: 'Creando Tipo de Estado', value: true }))
    setModalInfo((prevState) => ({ ...prevState, label: 'Creando Tipo de Estado', open: true, type: 'CREATING_TYPE_STATUS' }))
    await simulateFetch(3000)

    setModalInfo(prevState => ({ ...prevState, type: 'TYPE_STATUS_CREATED', label: 'Tipo de Estado Creado', illustration: <Congratulations className='h-72' /> }))
    toast.success('Tipo de Estado Creado Exitosamente')
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false, type: null })
    setLoading({ meessage: '', value: false })
    formTypeStatus.reset()
    setStatusToCreate([])

    router.push('/ajustes/estados')
  }

  const onSubmitFormStatus = async (data: IFormCreateSubcategory) => {
    setLoading(({ meessage: 'Agregando Estado', value: true }))
    // setModalInfo((prevState) => ({ ...prevState, label: 'Creando Subcategoria', open: true, type: 'CREATING_SUBCATEGORY' }))
    // await simulateFetch(3000)

    const subcategoryToCreate: IFormCreateSubcategory = {
      title: data.title,
      description: data.description,
      isActive: data.isActive
    }

    console.log({ ...subcategoryToCreate, color: statusColor })
    setStatusToCreate(prevState => [...prevState, { ...subcategoryToCreate }])

    // setModalInfo(prevState => ({ ...prevState, type: 'CATEGORY_CREATED', label: 'Subcategoria Creada', illustration: <Congratulations className='h-72' /> }))
    toast.success('Estado Agregado Exitosamente')
    setLoading({ meessage: '', value: false })
    setModalInfo({ illustration: null, label: '', open: false, type: null })
    formStatus.reset()
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

      {/* Crear Estado */}
      <Dialog open={modalInfo.type === 'CREATE_STATUS' && modalInfo.open} onOpenChange={handleOpenCreateStatusModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear Estado</DialogTitle>

            <DialogDescription>
              Crea una estado para asignarlo a un tipo de estado
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={formStatus.handleSubmit(onSubmitFormStatus)} autoFocus className='w-full mt-4'>
            <section className='w-full space-y-4'>
              <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                <Input
                  id='title'
                  type='text'
                  tabIndex={4}
                  label='Título'
                  placeholder='Pekkin'
                  register={formStatus.register}
                  inputErrors={subcategoryRules.title}
                  messageErrors={formStatus.formState.errors}
                />

                <GenericSelect
                  id='isActive'
                  tabIndex={5}
                  label='Estado'
                  defaultValue='true'
                  placeholder='Seleccione un Estado'
                  fieldControlled={{ control: formStatus.control, rules: subcategoryRules.isActive }}
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
                id='description'
                rows={5}
                tabIndex={6}
                label='Descripción'
                register={formStatus.register}
                placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit quo laudantium ipsum natus.'
                messageErrors={formStatus.formState.errors}
                inputErrors={subcategoryRules.description}
              />
            </section>
          </form>

          <section className='w-full flex flex-col justify-between'>
            <Label>Color del Estado</Label>

            <div className='my-2'></div>

            <div className='w-full flex flex-col sm:flex-row justify-between gap-x-7 gap-y-5'>
              <div
                style={{ backgroundColor: convertHexToRGBA(statusColor, 0.1) }}
                className={'w-full sm:w-40 h-20 sm:h-full rounded-md bg-opacity-5 flex flex-col justify-center items-center'}
              >
                <Badge
                  style={{ color: statusColor, borderColor: statusColor, backgroundColor: convertHexToRGBA(statusColor, 0.3) }}
                >
                  {statusColor}
                </Badge>
              </div>

              <div className='w-full grid grid-rows-2 grid-cols-5 justify-between items-center gap-4'>
                {
                  presetStatusColors.map(color => (
                    <ColorSquare key={color} color={color} onClick={() => setStatusColor(color)} />
                  ))
                }

                {
                  [presetStatusColors[0], presetStatusColors[1], presetStatusColors[2]].map(color => (
                    <ColorSquare key={color} color={color} onClick={() => setStatusColor(color)} />
                  ))
                }

                <PopoverPicker color={statusColor} onChange={setStatusColor} />
              </div>
            </div>
          </section>

          <DialogFooter className='flex flex-col gap-y-4 mt-4'>
            <Button
              type='button'
              variant='outline'
              isLoading={loading.value}
              onClick={() => handleOpenCreateStatusModal(false)}
            >
              Cancelar
            </Button>

            <Button
              type='button'
              isLoading={loading.value}
              onClick={formStatus.handleSubmit(onSubmitFormStatus)}
            >
              Crear Estado
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
                  <span className='dark:text-gray-300'>{formTypeStatus.watch('title')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Descripción:</strong>&nbsp;
                    {formTypeStatus.watch('description')}
                  </p>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className={'w-full text-sm h-full py-1.5'}>
                {formTypeStatus.watch('isActive') === 'true' ? 'Activo' : 'Bloqueado'}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className='w-full pt-6'>
          <form onSubmit={formTypeStatus.handleSubmit(onSubmitFormTypeStatus)} autoFocus className='w-full'>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
              <Card className='p-4 w-full'>
                <CardTitle>Informacion Basica</CardTitle>

                <Separator className='my-4' />

                <section className='w-full space-y-4'>
                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <Input
                      id='title'
                      type='text'
                      register={formTypeStatus.register}
                      label='Nombre'
                      placeholder='Pekkin'
                      messageErrors={formTypeStatus.formState.errors}
                      inputErrors={categoryRules.title}
                      tabIndex={1}
                    />

                    <GenericSelect
                      id='isActive'
                      label='Estado'
                      placeholder='Seleccione un Estado'
                      defaultValue='true'
                      tabIndex={2}
                      fieldControlled={{ control: formTypeStatus.control, rules: categoryRules.isActive }}
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
                    rows={5}
                    tabIndex={3}
                    id='description'
                    label='Descripción'
                    register={formTypeStatus.register}
                    inputErrors={categoryRules.description}
                    messageErrors={formTypeStatus.formState.errors}
                    placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium ipsum natus possimus amet reprehenderit veritatis labore quidem.'
                  />
                </section>
              </Card>
            </div>
          </form>

          <Card className='p-4 mt-6 w-full'>
            <section className='w-full flex flex-row justify-between items-center'>
              <div>
                <CardTitle>Estados</CardTitle>
                <CardDescription>Crear estados</CardDescription>
              </div>

              <Button onClick={() => handleOpenCreateStatusModal(true)}>
                Crear Estado
              </Button>
            </section>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              pagination={pagination}
              data={statusToCreate}
              columns={getSubcategoryColumns({ selection: false, id: false, actions: { removeLocalItem: removeLocalStatus } })}
              queryInfo={{ isFetching: false, error: null }}
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
              onClick={formTypeStatus.handleSubmit(onSubmitFormTypeStatus)}
            >
              Crear Tipo de Estado
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
