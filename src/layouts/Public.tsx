import Head from 'next/head'
import type { ReactNode } from '@/lib/types'

import { GlobalCommandMenu } from '@/components/layout/authenticated/GlobalCommandMenu'
import { useTheme } from 'next-themes'

export const PublicLayout = ({ children, title, mainClassName }: { children: ReactNode, title: string, mainClassName?: string }) => {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>

      <GlobalCommandMenu />

      <main className={`h-screen w-full flex justify-start items-start overflow-hidden ${mainClassName}`}>
        <div className='w-full h-full z-20'>
          {children}
        </div>

        <div className='w-full h-full fixed z-10' style={{
          backgroundImage: 'url("/images/public-layout-bg.png")',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: '0.4',
          visibility: theme === 'dark' ? 'hidden' : 'visible'
        }}>
        </div>

        <div className='w-full h-full relative z-10' style={{
          backgroundImage: 'url("/static/bg-signin.svg")',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <img
            src='/images/signin-asset-1.png'
            alt='asset1'
            className='absolute bottom-16 left-0'
            width={360}
          />

          <img
            src='/images/signin-asset-2.png'
            alt='asset1'
            className='absolute top-24 left-24'
            width={446}
          />

          <img
            src='/images/signin-asset-3.png'
            alt='asset1'
            className='absolute top-96 left-[31rem]'
            width={216}
          />
        </div>
      </main>
    </>
  )
}
