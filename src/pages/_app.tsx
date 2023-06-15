import { Toaster } from 'sonner'
import { ThemeProvider } from 'next-themes'

import { AppPropsWithLayout } from '@/lib/types'
import { useLoadingPage } from '@/lib/hooks/useLoadingPage'

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
    </ThemeProvider>
  )
}
