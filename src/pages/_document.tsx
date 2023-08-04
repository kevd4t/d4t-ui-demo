import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='es' suppressHydrationWarning>
      <Head>
        <meta name='robots' content='noindex,nofollow' />
        <meta charSet='UTF-8' />
        <meta name='description' content='ERP - D4T Platform' />
        <meta name='author' content='D4T Technologies' />
        <meta name='copyright' content='D4T Technologies' />
        <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests' />
      </Head>

      <body className='overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
