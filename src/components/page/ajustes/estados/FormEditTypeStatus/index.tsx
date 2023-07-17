import { PaginationState } from '@tanstack/react-table'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { toast } from 'sonner'

import type { IFormCreateStatus, IFormCreateSubcategory, IFormEditStatus, IFormEditStatusType, IStatusType, ReactNode } from '@/lib/types'
import { getStatusColumns } from '@/lib/utils/tableColumns/status'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { subcategoryRules, categoryRules } from './rules'

import { Badge, Button, Card, CardContent, CardTitle, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Separator } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'
import Link from 'next/link'

interface IModalState {
  open: boolean
  label: string
  illustration?: ReactNode
  type: 'CREATE_STATUS' | 'CREATING_TYPE_STATUS' | 'CREATING_STATUS' | 'TYPE_STATUS_CREATED' | 'STATUS_CREATED'
}

export const FormEditTypeStatus = ({ typeStatus }: { typeStatus: IStatusType }) => {
  const defaultTypeStatusValues: IStatusType = {
    id: typeStatus.id,
    title: typeStatus.title,
    status: typeStatus.status,
    isActive: typeStatus.isActive,
    description: typeStatus.description
  }

  const [modalInfo, setModalInfo] = useState<IModalState>({ open: false, label: '', illustration: null, type: null })
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const [localStatus, setLocalStatus] = useState<any[]>(typeStatus.status)
  const formTypeStatus = useForm<IFormEditStatusType>({
    defaultValues: {
      title: defaultTypeStatusValues.title,
      isActive: defaultTypeStatusValues.isActive ? 'true' : 'false',
      description: defaultTypeStatusValues.description
    }
  })
  const formStatus = useForm<IFormEditStatus>()
  const router = useRouter()

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Estados', singularItem: 'Estados' }
  }

  const removeLocalStatus = (idx: string|number) => {
    setLocalStatus(prevState => prevState.filter((_, subCategoryIdx) => (subCategoryIdx !== idx)))
  }

  const handleOpenCreateStatusModal = (value: boolean) => setModalInfo(prevState => ({ ...prevState, type: 'CREATE_STATUS', open: value }))

  const onSubmitFormTypeStatus = async (data) => {
    if (!localStatus?.length) {
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
    setLocalStatus([])

    router.push('/ajustes/estados')
  }

  const onSubmitFormCreateStatus = async (data: IFormCreateSubcategory) => {
    setLoading(({ meessage: 'Agregando Estado', value: true }))
    // setModalInfo((prevState) => ({ ...prevState, label: 'Creando Subcategoria', open: true, type: 'CREATING_SUBCATEGORY' }))
    // await simulateFetch(3000)

    const statusToCreate: IFormCreateStatus = {
      title: data.title,
      description: data.description,
      isActive: data.isActive ? 'true' : 'false',
      color: '#eee'
    }

    console.log({ subcategoryToCreate: statusToCreate })
    setLocalStatus(prevState => [...prevState, { ...statusToCreate }])

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

      {/* Crear Unidad */}
      <Dialog open={modalInfo.type === 'CREATE_STATUS' && modalInfo.open} onOpenChange={handleOpenCreateStatusModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Crear Estado</DialogTitle>

            <DialogDescription>
              Crea una estado para asignarlo a un tipo de estado
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={formStatus.handleSubmit(onSubmitFormCreateStatus)} autoFocus className='w-full mt-4'>
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
              onClick={formStatus.handleSubmit(onSubmitFormCreateStatus)}
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
                {/* <CardDescription>Crear estados</CardDescription> */}
              </div>

              <Button onClick={() => handleOpenCreateStatusModal(true)}>
                Añadir Estado
              </Button>
            </section>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={localStatus}
              pagination={pagination}
              queryInfo={{ isFetching: false, error: null }}
              columns={getStatusColumns({
                selection: false,
                id: false,
                actions: {
                  edit: true,
                  removeLocalItem: removeLocalStatus,
                  delete: true
                }
              })}
            />
          </Card>

          <section className='w-full flex justify-between items-start mt-6 gap-x-6'>
            <Button
              type='button'
              tabIndex={15}
              variant='outline'
              className='w-full py-2 text-sm'
              asChild
            >
              <Link href='/ajustes/estados'>
                Cancelar
              </Link>
            </Button>

            <Button
              type='submit'
              tabIndex={16}
              className='w-full py-2 text-sm'
              isLoading={loading.value}
              onClick={formTypeStatus.handleSubmit(onSubmitFormTypeStatus)}
            >
              Editar Tipo de Estado
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
