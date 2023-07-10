import { Analytics } from '@vercel/analytics/react'
// import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { useLoadingPage } from '@/lib/hooks/useLoadingPage'
import { AppPropsWithLayout } from '@/lib/types'
import { APP_CONFIG } from '@/config'

import { LoadingPage } from '@/components/layout/common/LoadingPage'
import 'react-medium-image-zoom/dist/styles.css'
import 'swiper/css/pagination'
import 'swiper/css'

import '@/styles/globals.css'

export default function D4TErpApp ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const { isRouteChanging, loadingKey } = useLoadingPage()
  const getLayout = Component.getLayout ?? ((page) => page)
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {/* <SessionProvider session={session}> */}
      <ThemeProvider attribute='class'>
        <LoadingPage isRouteChanging={isRouteChanging} key={loadingKey} />

        { getLayout(<Component {...pageProps} />) }

        { APP_CONFIG.ENV.IS_PRODUCTION && <Analytics /> }

        <Toaster richColors />
      </ThemeProvider>
      {/* </SessionProvider> */}
    </QueryClientProvider>
  )
}
