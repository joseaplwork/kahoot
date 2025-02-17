import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactNode } from 'react'
import { MemoryRouter, Route, Routes, useParams } from 'react-router-dom'

import HomePage from './HomePage'
import { PokemonListDTO } from './interfaces/pokemon-list-dto'

const mockPokemons: PokemonListDTO = {
  count: 40,
  next: null,
  previous: null,
  results: Array.from({ length: 10 }, (_, i) => ({
    name: `pokemon-${i + 1}`,
    url: `/api/v2/pokemon/${i + 1}/`,
  })),
}

function renderWithRouter(ui: ReactNode, { route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]} initialIndex={0}>
      <Routes>
        <Route path="/" element={ui} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('HomePage', () => {
  let fetchMock: jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
    window.fetch = jest.fn()
    fetchMock = window.fetch as jest.Mock
  })

  it('renders loading state initially', async () => {
    fetchMock.mockResolvedValue({
      json: () => {
        setTimeout(() => Promise.resolve(null), 1000)
      },
    })

    renderWithRouter(<HomePage />, { route: '/' })

    expect(
      await screen.findByLabelText('loading pokemon list'),
    ).toBeInTheDocument()
  })

  it('renders error state when there is an error', async () => {
    fetchMock.mockRejectedValue(new Error('Failed to fetch data'))

    renderWithRouter(<HomePage />, { route: '/' })

    expect(
      await screen.findByText('Ops something went wrong'),
    ).toBeInTheDocument()
  })

  it('renders pokemon list when data is available', async () => {
    fetchMock.mockResolvedValue({
      json: () => Promise.resolve(mockPokemons),
    })

    renderWithRouter(<HomePage />, { route: '/' })

    expect(await screen.findByText('Pokemon 1')).toBeInTheDocument()
    expect(screen.getByText('Pokemon 10')).toBeInTheDocument()
  })

  it('navigates to detail page when a pokemon is clicked', async () => {
    const user = userEvent.setup()

    function MockDetail() {
      const { id } = useParams()

      return <div>Detail {id}</div>
    }

    fetchMock.mockResolvedValue({
      json: () => Promise.resolve(mockPokemons),
    })

    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<MockDetail />} />
        </Routes>
      </MemoryRouter>,
    )

    const pokemonLink = await screen.findByText('Pokemon 1')

    await user.click(pokemonLink)
    expect(screen.getByText('Detail 1')).toBeInTheDocument()
  })

  it('changes page when pagination buttons are clicked', async () => {
    const user = userEvent.setup()

    fetchMock.mockResolvedValueOnce({
      json: () => Promise.resolve(mockPokemons),
    })

    fetchMock.mockResolvedValue({
      json: () =>
        Promise.resolve({
          count: 40,
          next: null,
          previous: null,
          results: [
            {
              name: `pokemon-11`,
              url: `/api/v2/pokemon/11/`,
            },
          ],
        }),
    })

    renderWithRouter(<HomePage />, { route: '/' })

    expect(await screen.findByText('Pokemon 1')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '>' }))

    expect(await screen.findByText('Pokemon 11')).toBeInTheDocument()

    fetchMock.mockResolvedValue({
      json: () => Promise.resolve(mockPokemons),
    })

    await user.click(screen.getByRole('button', { name: '<' }))

    expect(await screen.findByText('Pokemon 1')).toBeInTheDocument()
  })
})
