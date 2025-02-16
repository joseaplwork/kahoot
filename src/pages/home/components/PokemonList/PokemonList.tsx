import { Link } from 'react-router'

import { Card, ErrorViewState } from '@/shared/components'

import { Pokemon } from '../../interfaces/pokemon-list'

import { Audio } from './Audio'
import { EmptyViewState } from './EmptyViewState'
import { Skeleton } from './Skeleton'

import './PokemonList.css'

interface Props {
  list: Pokemon[]
  error: string | null
  loading: boolean
}

export function PokemonList({ list, error, loading }: Props) {
  if (loading) {
    return <Skeleton />
  }

  if (error) {
    return <ErrorViewState />
  }

  if (list.length === 0) {
    return <EmptyViewState />
  }

  return (
    <div className="pokemon-list">
      {list.map(pokemon => (
        <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
          <Card>
            <div className="pokemon-list__item">
              <div className="pokemon-list__audio">
                <Audio url={pokemon.soundUrl} />
              </div>
              <div className="pokemon-list__info">
                <span className="pokemon-list__title">{pokemon.name}</span>
                <span>N° {pokemon.id.toString().padStart(3, '0')}</span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
