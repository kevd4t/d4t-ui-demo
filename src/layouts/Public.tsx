import Head from 'next/head'
import type { ReactNode } from '@/lib/types'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const BackgroundLayout = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div className='w-full h-full fixed z-10' style={{
      backgroundImage: 'url("/images/public-layout-bg.png")',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      opacity: '0.4',
      visibility: theme === 'dark' ? 'hidden' : 'visible'
    }}>
    </div>
  )
}

export const PublicLayout = ({ children, title, mainClassName }: { children: ReactNode, title: string, mainClassName?: string }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>

      <main className={`h-screen w-full flex justify-start items-start overflow-hidden ${mainClassName}`}>
        <div className='w-full h-full z-20'>
          {children}
        </div>

        <BackgroundLayout />

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
