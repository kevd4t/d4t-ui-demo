import { Analytics } from '@vercel/analytics/react'
// import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

import { useLoadingPage } from '@/lib/hooks/useLoadingPage'
import { AppPropsWithLayout } from '@/lib/types'
import { APP_CONFIG } from '@/config'

import { LoadingPage } from '@/components/layout/common/LoadingPage'
import 'react-medium-image-zoom/dist/styles.css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css'

import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/graphql/client'

export default function D4TErpApp ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const { isRouteChanging, loadingKey } = useLoadingPage()
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ApolloProvider client={client}>
      {/* <SessionProvider session={session}> */}
      <ThemeProvider attribute='class'>
        <LoadingPage isRouteChanging={isRouteChanging} key={loadingKey} />

        { getLayout(<Component {...pageProps} />) }

        { APP_CONFIG.ENV.IS_PRODUCTION && <Analytics /> }

        <Toaster richColors />
      </ThemeProvider>
      {/* </SessionProvider> */}
    </ApolloProvider>
  )
}
