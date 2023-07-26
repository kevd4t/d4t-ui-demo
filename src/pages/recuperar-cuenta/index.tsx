import dynamic from 'next/dynamic'

import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { PublicLayout } from '@/layouts/Public'
import { FormRecoverAccount } from '@/components/page/recuperar-cuenta'

const { ROUTES } = siteConfig

const RecoverAccountPage = () => {
  const ToggleThemeNoSSR = dynamic(() =>
    import('@/components/layout/common/ToggleTheme')
      .then((component) => component.ToggleTheme), { ssr: false }
  )

  return (
    <div className='w-full h-full flex flex-col justify-center items-center relative'>
      <FormRecoverAccount />

      <div className='absolute bottom-8 left-8'>
        <ToggleThemeNoSSR />
      </div>
    </div>
  )
}

RecoverAccountPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <PublicLayout title={`${ROUTES.RECOVER_ACCOUNT.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </PublicLayout>
  )
}

export default RecoverAccountPage
