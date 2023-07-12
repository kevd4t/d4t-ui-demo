import type { ReactNode, ReactElement, HTMLAttributes, Dispatch } from 'react'
import type { Session } from 'next-auth'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'

export type { RequestInit } from 'next/dist/server/web/spec-extension/request'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  session: Session
}

export {
  AppProps,
  NextPage,
  ReactElement,
  ReactNode,
  HTMLAttributes,
  Dispatch
}
