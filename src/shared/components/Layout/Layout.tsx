import { BackButton, Background, Header } from '@/shared/components'

import './Layout.css'

interface Props {
  children: React.ReactNode
  onNavigateBack?: () => void
}

export function Layout({ children, onNavigateBack }: Props) {
  return (
    <>
      <Background />
      <Header>
        {onNavigateBack && <BackButton onClick={onNavigateBack} />}
        <h3>Pokemon</h3>
      </Header>
      <div className="layout">{children}</div>
    </>
  )
}
