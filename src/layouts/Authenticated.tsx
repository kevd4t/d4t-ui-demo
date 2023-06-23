import { IconMenu2 } from '@tabler/icons-react'
import Head from 'next/head'

import { useSidebarStore } from '@/lib/store/sidebar'
import type { ReactNode } from '@/lib/types'

import { GlobalCommandMenu } from '@/components/layout/authenticated/GlobalCommandMenu'
import { Sidebar } from '@/components/layout/authenticated'
import { Button } from '@/components/ui'

export const AuthenticatedLayout = ({ children, title, mainClassName }: { children: ReactNode, title: string, mainClassName?: string }) => {
  const { openSidebar } = useSidebarStore()

  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>

      <GlobalCommandMenu />

      <div className='authLayout-container overflow-x-hidden'>
        <Sidebar />

        <Button
          onClick={openSidebar}
          variant='secondary'
          color='blue'
          className='block md:hidden px-1.5 absolute top-3 right-3'
        >
          <IconMenu2 size={18} />
        </Button>

        <main className={`p-6 sm:p-10 min-h-screen h-full w-full max-w-[1440px] mx-auto ${mainClassName}`}>
          {children}
        </main>
      </div>
    </>
  )
}
