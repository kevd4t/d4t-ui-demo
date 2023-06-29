import Link from 'next/link'
import { TModuleRoutes } from '@/lib/types'
import { buttonVariants } from '@/components/ui'
import { IconCirclePlus } from '@tabler/icons-react'
import { cn } from '@/lib/utils'

type TCreateItem = { title: string, href: TModuleRoutes }

interface IHeaderPageProps {
  title: string
  createItems?: TCreateItem[]
  containerClassName?: string
}

export const HeaderPage = ({ title, createItems, containerClassName }: IHeaderPageProps) => {
  return (
    <div className={cn('w-full flex justify-between items-center pt-4 pb-6', containerClassName)}>
      <h4 className='w-full font-bold text-3xl'>
        {title}
      </h4>

      {
        createItems?.length > 0 && (
          <ul className='flex justify-end items-center gap-x-4'>
            {
              createItems.map(createItem => (
                <li key={createItem.href}>
                  <Link
                    href={createItem.href}
                    className={
                      buttonVariants({
                        variant: 'default',
                        className: 'flex justify-between items-center whitespace-nowrap'
                      })
                    }
                  >
                    <IconCirclePlus className='h-5 w-5 mr-2' />

                    { createItem.title }
                  </Link>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}
