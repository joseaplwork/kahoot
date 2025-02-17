import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactNode } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import PokemonDetailPage from './PokemonDetailPage'
import { PokemonDTO } from './interfaces/pokemon-dto'

function renderWithRouter(ui: ReactNode, { route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]} initialIndex={0}>
      <Routes>
        <Route path="/pokemon/:id" element={ui} />
      </Routes>
    </MemoryRouter>,
  )
}

const mockPokemon: Partial<PokemonDTO> = {
  id: 1,
  name: 'bulbasaur',
  height: 7,
  weight: 69,
  cries: {
    latest: 'https://example.com/cry/1.ogg',
    legacy: null,
  },
  sprites: {
    front_default: null,
    back_default: null,
    front_female: null,
    back_female: null,
    front_shiny: null,
    back_shiny: null,
    front_shiny_female: null,
    back_shiny_female: null,
    other: {
      home: {
        front_default: 'https://example.com/home/1.png',
        front_female: null,
        front_shiny: null,
        front_shiny_female: null,
      },
      'official-artwork': {
        front_default: null,
        front_shiny: null,
      },
      dream_world: {
        front_default: null,
        front_female: null,
      },
    },
  },
  types: [
    {
      slot: 1,
      type: { name: 'grass', url: 'type/12/' },
    },
    {
      slot: 2,
      type: { name: 'poison', url: 'type/4/' },
    },
  ],
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: { name: 'hp', url: 'stat/1/' },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: { name: 'attack', url: 'stat/2/' },
    },
  ],
}

describe('PokemonDetailPage', () => {
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

    renderWithRouter(<PokemonDetailPage />, { route: '/pokemon/1' })

    expect(
      await screen.findByLabelText('loading pokemon detail'),
    ).toBeInTheDocument()
  })

  it('renders error state when there is an error', async () => {
    fetchMock.mockRejectedValue(new Error('Failed to fetch data'))

    renderWithRouter(<PokemonDetailPage />, { route: '/pokemon/1' })

    expect(
      await screen.findByText('Ops something went wrong'),
    ).toBeInTheDocument()
  })

  it('renders pokemon details when data is available', async () => {
    fetchMock.mockResolvedValue({
      json: () => Promise.resolve(mockPokemon),
    })

    renderWithRouter(<PokemonDetailPage />, { route: '/pokemon/1' })

    expect(await screen.findByText('Bulbasaur')).toBeInTheDocument()
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

    fetchMock.mockResolvedValue({
      json: () => Promise.resolve(mockPokemon),
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
