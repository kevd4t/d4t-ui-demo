import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import { useForm } from 'react-hook-form'
import JSConfetti from 'js-confetti'
import { useState } from 'react'
import { toast } from 'sonner'

import type { IFetchDataTable, IFormCreateMeterDevice, ITruck, ReactNode } from '@/lib/types'
import { handleFetchUrlUserGroups } from '@/lib/services/users'
import { truckColumns } from '@/lib/utils/tableColumns/trucks'
import { simulateFetch } from '@/lib/utils/simulateFetch'
import { useFetch } from '@/lib/hooks/useFetch'
import { fleetRules } from './rules'

import { Badge, Button, Card, CardContent, CardDescription, CardTitle, Dialog, DialogContent, DialogHeader, Separator } from '@/components/ui'
import { Congratulations } from '@/components/common/illustrations/Congratulations'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { Table } from '@/components/common/tables/GenericTable'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

interface IModalState {
  open: boolean
  label: string
  illustration?: ReactNode
  type: 'CREATE_TRUCK' | 'COMPARISON_TRUCK_IMAGE' | 'CREATING_FLEET' | 'FLEET_CREATED' | 'CREATING_TRUCK_MODEL' | 'TRUCK_CREATED'
}

export const FormCreateMeterDevice = () => {
  const [modalInfo, setModalInfo] = useState<IModalState>({ open: false, label: '', illustration: null, type: null })
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableTrucksSelected, HandleTableTrucksSelected] = useState<RowSelectionState>({})
  const [fullDataTrucksSelected, setFullDataTrucksSelected] = useState([])
  const [loading, setLoading] = useState({ meessage: '', value: false })
  const formMeter = useForm<IFormCreateMeterDevice>()

  const { data, error, isLoading: isLoadingTrucks, fetcher } = useFetch<IFetchDataTable<ITruck>>('/api/trucks')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Unidades', singularItem: 'Unidad' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlUserGroups({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  const getFullDataSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataTrucksSelected(fullDataSelection)
  }

  const toggleOpenCreateTruckModal = () => setModalInfo(prevState => ({ ...prevState, type: 'CREATE_TRUCK', open: !prevState.open }))

  const onSubmitFormFleet = async (data) => {
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

    setLoading(({ meessage: 'Creando Flota', value: true }))
    setModalInfo((prevState) => ({ ...prevState, label: 'Creando Flota', open: true, type: 'CREATING_FLEET' }))
    await simulateFetch(3000)

    // console.log({
    //   ...data,
    //   trucks: [{
    //     ...fullDataTrucksSelected[0].original,
    //     image: null
    //   }]
    // })

    setModalInfo(prevState => ({ ...prevState, type: 'FLEET_CREATED', label: 'Flota Creada', illustration: <Congratulations className='h-72' /> }))
    toast.success('Flota Creada Exitosamente')
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
                  <span className='font-semibold dark:text-white'>Nombre:</span> &nbsp;
                  <span className='dark:text-gray-300'>{formMeter.watch('serial')}</span>
                </li>

                <li className='flex justify-start items-center text-sm text-primary-gray'>
                  <p className='dark:text-gray-300'>
                    <strong className='font-semibold dark:text-white'>Modelo:</strong>&nbsp;
                    {formMeter.watch('meterModel')}
                  </p>
                </li>
              </ul>

              <Separator className='my-2' />

              <Badge className={'w-full text-sm h-full py-1.5'}>
                {formMeter.watch('status')}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className='w-full pt-6'>
          <form onSubmit={formMeter.handleSubmit(onSubmitFormFleet)} autoFocus className='w-full'>
            <div className='w-full h-full flex flex-col xl:flex-row justify-start items-start gap-x-6 gap-y-6'>
              <Card className='p-4 w-full'>
                <CardTitle>Informacion Basica</CardTitle>

                <Separator className='my-4' />

                <section className='w-full space-y-4'>
                  <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
                    <Input
                      id='serial'
                      type='text'
                      register={formMeter.register}
                      label='Serial'
                      placeholder='Pekkin'
                      messageErrors={formMeter.formState.errors}
                      inputErrors={fleetRules.title}
                      tabIndex={1}
                    />

                    <GenericSelect
                      id='status'
                      label='Estado'
                      placeholder='Seleccione un Estado'
                      defaultValue='Operativo'
                      tabIndex={2}
                      fieldControlled={{ control: formMeter.control, rules: fleetRules.status }}
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

                  <TextArea
                    rows={5}
                    tabIndex={3}
                    id='description'
                    label='Descripción'
                    register={formMeter.register}
                    inputErrors={fleetRules.description}
                    messageErrors={formMeter.formState.errors}
                    placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium ipsum natus possimus amet reprehenderit veritatis eum deserunt labore quidem.'
                  />
                </section>
              </Card>
            </div>
          </form>

          <Card className='p-4 mt-6 w-full'>
            <section className='w-full flex flex-row justify-between items-center'>
              <div>
                <CardTitle>Unidades</CardTitle>
                <CardDescription>Seleccione una unidad</CardDescription>
              </div>

              <Button onClick={toggleOpenCreateTruckModal}>
                Crear Unidad
              </Button>
            </section>

            <Separator className='my-4' />

            <Table
              visibilityColumns
              data={data?.results}
              pagination={pagination}
              columns={truckColumns}
              queryInfo={{ isFetching: isLoadingTrucks, error }}
              inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Unidad' }}
              selection={{
                rowSelection: tableTrucksSelected,
                setRowSelection: HandleTableTrucksSelected,
                getFullDataSelection
              }}
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
              onClick={formMeter.handleSubmit(onSubmitFormFleet)}
            >
              Crear Flota
            </Button>
          </section>
        </div>
      </div>
    </>
  )
}
