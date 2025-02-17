import { render, screen } from '@testing-library/react'

import { PokemonNumber } from './PokemonNumber'

describe('PokemonNumber', () => {
  it('renders pokemon number with leading zeros for single digit', () => {
    render(<PokemonNumber id={1} />)
    expect(screen.getByText('N° 001')).toBeInTheDocument()
  })

  it('renders pokemon number with leading zeros for double digit', () => {
    render(<PokemonNumber id={25} />)
    expect(screen.getByText('N° 025')).toBeInTheDocument()
  })

  it('renders pokemon number with leading zero for triple digit', () => {
    render(<PokemonNumber id={150} />)
    expect(screen.getByText('N° 150')).toBeInTheDocument()
  })

  it('renders pokemon number for four digit number', () => {
    render(<PokemonNumber id={1000} />)
    expect(screen.getByText('N° 1000')).toBeInTheDocument()
  })
})
