import type { ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { CommingSoonIllustration } from '@/components/common/comming-soon/CommingSoon'

const { ROUTES } = siteConfig

const GPSMarksSettingsPage = () => {
  return (
    <div className='w-full h-[calc(100vh_-_100px)] flex justify-center items-center'>
      <div className='w-full max-w-3xl mx-auto flex flex-col justify-center items-center -mt-32'>
        <CommingSoonIllustration />

        <h5 className='text-5xl font-black -mt-10 text-gray-800 dark:text-white'>Proximamente</h5>
      </div>
    </div>
  )
}

GPSMarksSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.GPS_MARKS.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default GPSMarksSettingsPage
