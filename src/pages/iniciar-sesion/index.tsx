import dynamic from 'next/dynamic'

import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { PublicLayout } from '@/layouts/Public'
import { FormSignIn } from '@/components/page/iniciar-sesion/FormSignIn'

const { ROUTES } = siteConfig

const SignInPage = () => {
  const ToggleThemeNoSSR = dynamic(() =>
    import('@/components/layout/common/ToggleTheme')
      .then((component) => component.ToggleTheme), { ssr: false }
  )

  return (
    <div className='w-full h-full flex flex-col justify-center items-center relative'>
      <div className='max-w-md w-full -mt-20 bg-white dark:bg-dark rounded-md p-6 backdrop-blur-sm bg-white/60 border border-slate-300 dark:border-dark'>
        <img
          src='/images/logo.png'
          alt='logo'
          className='mb-4 h-20 mx-auto'
        />

        <FormSignIn />
      </div>

      <div className='absolute bottom-8 left-8'>
        <ToggleThemeNoSSR />
      </div>
    </div>
  )
}

SignInPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <PublicLayout title={`${ROUTES.SIGN_IN.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </PublicLayout>
  )
}

export default SignInPage
