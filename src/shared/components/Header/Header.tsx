import { PropsWithChildren } from 'react'

import './Header.css'

export function Header({ children }: PropsWithChildren) {
  return (
    <header className="header">
      <div className="header__content">{children}</div>
    </header>
  )
}
