import { CommingSoonIllustration } from '@/components/common/comming-soon/CommingSoon'
import { AuthenticatedLayout } from '@/layouts/Authenticated'
import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

const { ROUTES } = siteConfig

const MyAccountPage = () => {
  return (
    <div className='w-full h-[calc(100vh_-_100px)] flex justify-center items-center'>
      <div className='w-full max-w-3xl mx-auto flex flex-col justify-center items-center -mt-32'>
        <CommingSoonIllustration />

        <h5 className='text-5xl font-black -mt-10 text-gray-800 dark:text-white'>Proximamente</h5>
      </div>
    </div>
  )
}

MyAccountPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.MY_ACCOUNT.TITLE} | ${siteConfig.TITLE}`} mainClassName='p-0 sm:p-0'>
      {page}
    </AuthenticatedLayout>
  )
}

export default MyAccountPage
