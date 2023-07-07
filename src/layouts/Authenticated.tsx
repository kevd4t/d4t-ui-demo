import { IconMenu2 } from '@tabler/icons-react'
import Head from 'next/head'

import { useSidebarStore } from '@/lib/store/sidebar'
import type { ReactNode } from '@/lib/types'

import { GlobalCommandMenu } from '@/components/layout/authenticated/GlobalCommandMenu'
import { PageTransition } from '@/components/layout/common/PageTransition'
// import DocslyClient from '@/components/layout/authenticated/DocslyClient'
import { Sidebar } from '@/components/layout/authenticated'
import { Button } from '@/components/ui'
import { BottomNavigation } from '@/components/layout/authenticated/BottomNavigation'

export const AuthenticatedLayout = ({ children, title, mainClassName, noPageTransition = false }: { children: ReactNode, title: string, mainClassName?: string, noPageTransition?: boolean }) => {
  const { isOpen, toggleSidebar } = useSidebarStore()

  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>

      {/* <DocslyClient /> */}

      <GlobalCommandMenu />

      <div className={
        `authLayout-container grid 
        ${isOpen ? ' grid-cols-1 xl:grid-cols-sidebar' : ''}
        ${!isOpen ? 'grid-cols-sidebar-collapsed' : ''} 
        transition-[grid-template-columns] duration-300 ease-in-out`
      }
      >
        <Sidebar />
        <BottomNavigation />

        <Button
          onClick={toggleSidebar}
          variant='secondary'
          color='blue'
          className='block md:hidden px-1.5 absolute top-3 right-3'
        >
          <IconMenu2 size={18} />
        </Button>

        <main className={`p-6 sm:p-10 min-h-screen h-full w-full max-w-[1440px] mx-auto ${mainClassName}`}>
          {
            noPageTransition
              ? (<>{ children }</>)
              : (
                <PageTransition>
                  {children}
                </PageTransition>
              )
          }
        </main>
      </div>
    </>
  )
}
