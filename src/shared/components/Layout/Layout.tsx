import { PropsWithChildren } from 'react'

import { Background, Header } from '@/shared/components'

import './Layout.css'

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Background />
      <Header />
      <div className="layout">{children}</div>
    </>
  )
}
