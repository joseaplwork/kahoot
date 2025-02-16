import {
  BackButton,
  Background,
  Header,
  ThemeToggle,
} from '@/shared/components'

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
        <h3 className="layout-header-title">Pokemon</h3>
        <ThemeToggle />
      </Header>
      <div className="layout">{children}</div>
    </>
  )
}
