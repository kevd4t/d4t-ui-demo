import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

import { useLoadingPage } from '@/lib/hooks/useLoadingPage'
import { AppPropsWithLayout } from '@/lib/types'
import { APP_CONFIG } from '@/config'

import { LoadingPage } from '@/components/layout/common/LoadingPage'
import '@/styles/globals.css'

export default function EcommerceAdminApp ({ Component, pageProps }: AppPropsWithLayout) {
  const { isRouteChanging, loadingKey } = useLoadingPage()

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider attribute='class'>
      <LoadingPage isRouteChanging={isRouteChanging} key={loadingKey} />
      <Toaster richColors />

      { getLayout(<Component {...pageProps} />) }

      { APP_CONFIG.ENV.IS_PRODUCTION && <Analytics /> }
    </ThemeProvider>
  )
}
