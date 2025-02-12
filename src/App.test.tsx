import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('renders App works!', () => {
    render(<App />)

    expect(screen.getByText('App works!')).toBeInTheDocument()
  })
})
