import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useTableStore } from './store'
import { TableSubmit } from './types'
import { Button, Form, Spinner } from 'd4t-ui-demo'
import { IconSearch } from '@tabler/icons-react'
import { TableToolbar } from './Toolbar'

interface TableSearchProps {
  onSubmitTable: TableSubmit
  loading: boolean
}

export const TableSearch = ({ onSubmitTable, loading }: TableSearchProps) => {
  const { queries, getFiltersWithOptionsSelected, filters, pagination: { page, limit } } = useTableStore()
  const form = useForm<any>({
    defaultValues: queries.reduce((obj, item) => {
      obj[item.id] = ''
      return obj
    }, {}),

    resolver: zodResolver(z.object(
      queries.reduce((obj, item) => {
        obj[item.id] = z.string().optional()
        return obj
      }, {})
    ))
  })

  const onSubmit = async (data) => {
    const queries = []
    const filtersSelected = getFiltersWithOptionsSelected()

    Object.entries(data)?.forEach(query => {
      if (!query[1]) return

      queries.push({
        field: query[0],
        text: query[1]
      })
    })

    onSubmitTable({ queries, filters: filtersSelected, limit, page })
  }

  return (
    <Form {...form}>
      <div className='w-full flex flex-wrap justify-between items-end gap-y-2'>
        {
          (queries.length || filters.length) && (
            <TableToolbar form={form} onSubmit={onSubmit} />
          )
        }

        <div className='w-fit flex flex-col gap-y-2'>
          <Button
            type='submit'
            onClick={form.handleSubmit(onSubmit)}
            disabled={loading}
            className='ml-auto py-5 whitespace-nowrap'
          >
            {
              loading
                ? <Spinner />
                : (
                  <>
                    <IconSearch className='dark:border-white h-5 w-5 mr-2' />
                    Buscar
                  </>
                )
            }
          </Button>

          {/* {visibilityColumns && <SettingsColumns table={table} />} */}
        </div>
      </div>
    </Form>
  )
}
