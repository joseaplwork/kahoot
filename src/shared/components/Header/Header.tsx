import { PropsWithChildren } from 'react'

import './Header.css'

export function Header({ children }: PropsWithChildren) {
  return (
    <header className="header">
      <div className="header-content">{children}</div>
    </header>
  )
}
