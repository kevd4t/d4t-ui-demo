import { CommingSoonIllustration } from '@/components/common/comming-soon/CommingSoon'
import { siteConfig } from '@/config'
import { AuthenticatedLayout } from '@/layouts/Authenticated'
import type { ReactElement } from '@/lib/types'

const { ROUTES } = siteConfig

const CreateGPSMonitoringPage = () => {
  return (
    <div className='w-full h-[calc(100vh_-_100px)] flex justify-center items-center'>
      <div className='w-full max-w-3xl mx-auto flex flex-col justify-center items-center -mt-32'>
        <CommingSoonIllustration />

        <h5 className='text-5xl font-black -mt-10 text-gray-800 dark:text-white'>Proximamente</h5>
      </div>
    </div>
  )
}

CreateGPSMonitoringPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.MONITORING.ROUTES.CREATE.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default CreateGPSMonitoringPage
