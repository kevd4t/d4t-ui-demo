import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { z } from 'zod'

import { getGpsModelColumns } from '@/lib/utils/tableColumns/gpsModels'
import { EHydrocarbon, IFetchDataTable, IGPSMark, IGPSModel, IPumpIslandDispenser } from '@/lib/types'
import { handleFetchUrlUserGroups } from '@/lib/services/users'
import { stationIslandSchema } from '@/lib/schemas/stations'
import { useFetch } from '@/lib/hooks/useFetch'

import { Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Separator, Skeleton } from '@/components/ui'
import { CardSkeleton } from '@/components/common/skeletons/CardSkeleton'
import { Table } from '@/components/common/tables/GenericTable'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'

const pumpIslands = [
  {
    id: 'e190f96d-d703-4c6d-816f-1fafee68273b',
    identifier: '1',
    maxDispensersAllowed: 2
  },
  {
    id: 'e190f96d-d703-4c6d-816f-1fafee6827Zb',
    identifier: '2',
    maxDispensersAllowed: 1
  }
]

export const FormEditDispenser = ({ dispenser }: { dispenser: IPumpIslandDispenser }) => {
  const [gpsMarkPagitationPagesInfo, setGpsMarkPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableGpsModelsSelected, setTableGpsModelsSelected] = useState<RowSelectionState>({})
  const [fullDataGpsModelsSelected, setFullDataGpsModelsSelected] = useState([])
  const [showGpsModelsTable, setShowGpsModelsTable] = useState(false)
  const form = useForm<z.infer<typeof stationIslandSchema>>()
  const { push, query } = useRouter()

  const { data: gpsModelsData, error: gpsModelsError, isLoading: isLoadingGpsModels, fetcher: gpsModelsfetcher } = useFetch<IFetchDataTable<IGPSModel>>(null, true)
  const { data: gpsMarksData, isLoading: isLoadingGpsMarks } = useFetch<IFetchDataTable<IGPSMark>>('/api/gps-marks')

  const gpsMarkPagination = {
    setPagination: setGpsMarkPagination,
    pageSize: gpsMarkPagitationPagesInfo.pageSize,
    pageIndex: gpsMarkPagitationPagesInfo.pageIndex,
    labels: { pluralItem: 'Marcas', singularItem: 'Marca' }
  }

  const handleCancelSelectGpsModel = () => {
    setTableGpsModelsSelected({})
    setShowGpsModelsTable(false)
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

  const handleFetchGpsModelsByGpsMarkId = async (gpsMarkId: number) => {
    setShowGpsModelsTable(true)
    await gpsModelsfetcher(`/api/gps-marks/${gpsMarkId}/models`)
  }

  const getFullGpsModelDataSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataGpsModelsSelected(fullDataSelection.map(dataSelected => dataSelected.original))
  }

  const onSubmit = (data: z.infer<typeof stationIslandSchema>) => {
    console.log({ data, fullDataGpsModelsSelected })
    push(`/estaciones/${query?.id}/dispensadores/crear`)
  }

  return (
    <div>
      <Card className='p-4 mt-6 w-full'>
        <CardTitle>Informacion Basica</CardTitle>

        <Separator className='my-4' />

        <CardContent className='p-0'>
          <form onSubmit={form.handleSubmit(onSubmit)} autoFocus className='w-full space-y-4'>
            <div className='w-full flex justify-between items-end gap-x-4'>
              <GenericSelect
                id='island'
                tabIndex={1}
                defaultValue={dispenser.pump_island.identifier}
                label='Isla'
                className='w-full'
                placeholder='Seleccione una isla'
                fieldControlled={{
                  control: form.control,
                  formSelectClassName: 'w-full',
                  rules: {
                    required: { value: true, message: 'Requerido' }
                  }
                }}
                items={pumpIslands.map(island => ({
                  label: `Isla N.${island.identifier}`,
                  value: island.id
                }))}
              />

              <GenericSelect
                id='island'
                tabIndex={1}
                label='Isla'
                className='w-full'
                placeholder='Seleccione una isla'
                defaultValue={dispenser.identifier}
                fieldControlled={{
                  control: form.control,
                  formSelectClassName: 'w-full',
                  rules: { required: { value: true, message: 'Requerido' } }
                }}
                items={pumpIslands.map(island => ({
                  label: `Tanque N.${island.identifier}`,
                  value: island.id
                }))}
              />

              <Input
                id='damaged_beak'
                type='number'
                tabIndex={3}
                label='Picos Dañados'
                className='w-full'
                placeholder='0-6'
                register={form.register}
                messageErrors={form.formState.errors}
                defaultValue={dispenser.damaged_beak}
                inputErrors={{ required: { value: true, message: 'Requerido' } }}
              />
            </div>

            <div className='w-full flex justify-between items-end gap-x-4'>
              <GenericSelect
                id='combustibleType'
                tabIndex={4}
                label='Tipo de Combustible'
                className='w-full'
                placeholder='Seleccione tipo de combustible'
                defaultValue={dispenser.combustibleType || EHydrocarbon.GASOLINE}
                fieldControlled={{
                  control: form.control,
                  formSelectClassName: 'w-full',
                  rules: { required: { value: true, message: 'Requerido' } }
                }}
                items={[
                  {
                    label: 'Gasolina',
                    value: EHydrocarbon.GASOLINE
                  },
                  {
                    label: 'Disel',
                    value: EHydrocarbon.DIESEL
                  },
                  {
                    label: 'Gas',
                    value: EHydrocarbon.GAS
                  }
                ]}
              />

              <GenericSelect
                id='status'
                tabIndex={5}
                label='Estatus'
                className='w-full'
                placeholder='Seleccione una isla'
                defaultValue={dispenser.status || 'OPERATIVE'}
                fieldControlled={{
                  control: form.control,
                  formSelectClassName: 'w-full',
                  rules: {
                    required: { value: true, message: 'Requerido' }
                  }
                }}
                items={[
                  {
                    label: 'Operativo',
                    value: 'OPERATIVE'
                  },
                  {
                    label: 'En Mantenimiento',
                    value: 'IN_MAINTENANCE'
                  }
                ]}
              />
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className='p-4 mt-6 w-full'>
        <section className='w-full flex flex-row justify-between items-center'>
          <div>
            <CardTitle>
              {
                showGpsModelsTable
                  ? 'Modelos de Dispensadores'
                  : 'Marcas de Dispensadores'
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
            showGpsModelsTable && (
              <Button onClick={handleCancelSelectGpsModel}>
                    Regresar
              </Button>
            )
          }
        </section>

        <Separator className='my-4' />

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
                columns={getGpsModelColumns({ selection: true })}
                data={gpsModelsData?.results}
                pagination={gpsMarkPagination}
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
      </Card>

      <Button
        type='submit'
        tabIndex={16}
        className='w-full py-2 text-sm mt-4'
        onClick={form.handleSubmit(onSubmit)}
      >
        Crear Dispensador
      </Button>
    </div>
  )
}
