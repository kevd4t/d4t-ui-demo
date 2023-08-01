import Head from 'next/head'

import { useSidebarStore } from '@/lib/store/sidebar'
import type { ReactNode } from '@/lib/types'

import { GlobalCommandMenu } from '@/components/layout/authenticated/GlobalCommandMenu'
// import { BottomNavigation } from '@/components/layout/authenticated/BottomNavigation'
import { Sidebar } from '@/components/layout/authenticated'

export const AuthenticatedLayout = ({ children, title, mainClassName, noPageTransition = false }: { children: ReactNode, title: string, mainClassName?: string, noPageTransition?: boolean }) => {
  const { isOpen } = useSidebarStore()
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
        ${(!isOpen) ? 'grid-cols-sidebar-collapsed' : ''} 
        transition-[grid-template-columns] duration-300 ease-in-out`
      }
      >
        <Sidebar />
        {/* <BottomNavigation /> */}

        <div className='md:hidden fixed top-0 rounded-l-md right-0 h-[90vh] w-20 bg-white z-[60]'>
          EPALE
        </div>

        <main className={`px-6 pt-6 pb-14 sm:p-10 min-h-screen h-full w-full max-w-[1440px] mx-auto ${mainClassName}`}>
          {children}

          {/* {
            noPageTransition
              ? (<>{ children }</>)
              : (
                <PageTransition>
                  {children}
                </PageTransition>
              )
          } */}
        </main>
      </div>
    </>
  )
}
