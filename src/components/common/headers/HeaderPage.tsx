import Link from 'next/link'
import { TModuleRoutes } from '@/lib/types'
import { buttonVariants } from '@/components/ui'
import { IconCirclePlus } from '@tabler/icons-react'

interface IHeaderPageProps {
  title: string
  createItem?: {
    title: string
    href: TModuleRoutes
  }
}

export const HeaderPage = ({ title, createItem }: IHeaderPageProps) => {
  return (
    <div className='w-full flex justify-between items-center'>
      <h4 className='w-full font-bold text-3xl py-4'>
        {title}
      </h4>

      {
        createItem && (
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
        )
      }
    </div>
  )
}
