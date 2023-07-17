import { PaginationState } from '@tanstack/react-table'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { toast } from 'sonner'

import type { IFormCreateStatus, IFormCreateStatusType, IFormCreateSubcategory, ReactNode } from '@/lib/types'
import { getSubcategoryColumns } from '@/lib/utils/tableColumns/subcategories'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { convertHexToRGBA } from '@/lib/utils/hexToRGB'
import { cityRules, stateRules } from './rules'

import { Badge, Button, Card, CardContent, CardDescription, CardTitle, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Label, Separator } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { PopoverPicker } from '@/components/common/date-picker/PopoverPicker'
import { ColorSquare } from '@/components/common/date-picker/ColorSquare'
import { Table } from '@/components/common/tables/GenericTable'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'

interface IModalState {
  open: boolean
  label: string
  illustration?: ReactNode
  type: 'CREATE_CITY' | 'CREATING_STATE' | 'CREATING_CITY' | 'STATE_CREATED' | 'CITY_CREATED'
}

export const FormCreateState = () => {
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

  const handleOpenCreateStatusModal = (value: boolean) => setModalInfo(prevState => ({ ...prevState, type: 'CREATE_CITY', open: value }))

  const onSubmitFormTypeStatus = async (data) => {
    setLoading(({ meessage: 'Creando Estado', value: true }))
    setModalInfo((prevState) => ({ ...prevState, label: 'Creando Estado', open: true, type: 'CREATING_STATE' }))
    await simulateFetch(3000)

    setModalInfo(prevState => ({ ...prevState, type: 'STATE_CREATED', label: 'Estado Creado', illustration: <Congratulations className='h-72' /> }))
    toast.success('Estado Creado Exitosamente')
    setLoading({ meessage: '', value: false })
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()

    await simulateFetch(4000)
    setModalInfo({ illustration: null, label: '', open: false, type: null })
    setLoading({ meessage: '', value: false })
    formTypeStatus.reset()
    setStatusToCreate([])

    router.push('/ajustes/ubicaciones/estado')
  }

  const onSubmitFormStatus = async (data: IFormCreateSubcategory) => {
    setLoading(({ meessage: 'Agregando Ciudad', value: true }))
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
    toast.success('Ciudad Agregada Exitosamente')
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

      {/* Crear Ciudad */}
      <Dialog open={modalInfo.type === 'CREATE_CITY' && modalInfo.open} onOpenChange={handleOpenCreateStatusModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear Ciudad</DialogTitle>

            <DialogDescription>
              Crea una ciudad para asignarlo a un estado
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
                  inputErrors={cityRules.title}
                  messageErrors={formStatus.formState.errors}
                />

                <GenericSelect
                  id='isActive'
                  tabIndex={5}
                  label='Estado'
                  defaultValue='true'
                  placeholder='Seleccione un Estado'
                  fieldControlled={{ control: formStatus.control, rules: cityRules.isActive }}
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
            </section>
          </form>

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
              Crear Ciudad
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
                      inputErrors={stateRules.title}
                      tabIndex={1}
                    />

                    <GenericSelect
                      id='isActive'
                      label='Estado'
                      placeholder='Seleccione un Estado'
                      defaultValue='true'
                      tabIndex={2}
                      fieldControlled={{ control: formTypeStatus.control, rules: stateRules.isActive }}
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
                </section>
              </Card>
            </div>
          </form>

          <Card className='p-4 mt-6 w-full'>
            <section className='w-full flex flex-row justify-between items-center'>
              <div>
                <CardTitle>Ciudades</CardTitle>
                <CardDescription>Crear Ciudades</CardDescription>
              </div>

              <Button onClick={() => handleOpenCreateStatusModal(true)}>
                Agregar Ciudad
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
              Crear Estado
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
