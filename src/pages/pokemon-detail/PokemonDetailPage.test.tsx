import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactNode } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { useFetch } from '@/shared/hooks'

import PokemonDetailPage from './PokemonDetailPage'

jest.mock('@/shared/hooks', () => ({
  useFetch: jest.fn(),
}))

const mockUseFetch = useFetch as jest.MockedFunction<typeof useFetch>

function renderWithRouter(ui: ReactNode, { route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]} initialIndex={0}>
      <Routes>
        <Route path="/pokemon/:id" element={ui} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('PokemonDetailPage', () => {
  it('renders loading state initially', () => {
    mockUseFetch.mockReturnValue({
      data: null,
      error: null,
      loading: true,
    })

    renderWithRouter(<PokemonDetailPage />, { route: '/pokemon/1' })

    const skeletonLoaders = screen.getAllByLabelText('loading pokemon detail')

    expect(skeletonLoaders.length).toBeGreaterThan(0)
  })

  it('renders error state when there is an error', () => {
    mockUseFetch.mockReturnValue({
      data: null,
      error: 'Failed to fetch data',
      loading: false,
    })

    renderWithRouter(<PokemonDetailPage />, { route: '/pokemon/1' })

    expect(screen.getByText('Ops something went wrong')).toBeInTheDocument()
  })

  it('renders pokemon details when data is available', () => {
    const mockPokemon = {
      id: 1,
      name: 'Bulbasaur',
      image: 'bulbasaur.png',
      height: 7,
      weight: 69,
      audio: 'bulbasaur.ogg',
      types: ['grass', 'poison'],
      stats: [
        { name: 'hp', value: 45 },
        { name: 'attack', value: 49 },
      ],
    }

    mockUseFetch.mockReturnValue({
      data: mockPokemon,
      error: null,
      loading: false,
    })

    renderWithRouter(<PokemonDetailPage />, { route: '/pokemon/1' })

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
    expect(screen.getByText('Height:')).toBeInTheDocument()
    expect(screen.getByText('Weight:')).toBeInTheDocument()
    expect(screen.getByText('grass')).toBeInTheDocument()
    expect(screen.getByText('poison')).toBeInTheDocument()
    expect(screen.getByText('hp')).toBeInTheDocument()
    expect(screen.getByText('attack')).toBeInTheDocument()
    expect(screen.getByText('N° 001')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
    expect(screen.getByText('69')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('49')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /play audio/i }),
    ).toBeInTheDocument()
  })

  it('navigates back when the back button is clicked', async () => {
    const user = userEvent.setup()

    mockUseFetch.mockReturnValue({
      data: null,
      error: null,
      loading: false,
    })

    render(
      <MemoryRouter initialEntries={['/', '/pokemon/1']} initialIndex={1}>
        <Routes>
          <Route path="/" element={<div>Pokemon List</div>} />
          <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
        </Routes>
      </MemoryRouter>,
    )

    const backButton = screen.getByRole('button', { name: /go back/i })

    await user.click(backButton)

    expect(screen.getByText('Pokemon List')).toBeInTheDocument()
  })
})
