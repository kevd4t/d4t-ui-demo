import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactNode, ReactElement, HTMLAttributes } from 'react'

export type { RequestInit } from 'next/dist/server/web/spec-extension/request'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export {
  AppProps,
  NextPage,
  ReactElement,
  ReactNode,
  HTMLAttributes
}
