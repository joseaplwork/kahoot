import { Card, ErrorViewState, PokemonNumber } from '@/shared/components'

import { Pokemon } from '../../interfaces/pokemon'
import { ImageContainer } from '../ImageContainer/ImageContainer'

import { FloatingAudio } from './FloatingAudio'
import { Measurements } from './Measurements'
import { PokemonStats } from './PokemonStats'
import { PokemonTypes } from './PokemonTypes'
import { Skeleton } from './Skeleton'

import './Detail.css'

interface Props {
  pokemon: Pokemon | null
  error: string | null
  loading: boolean
}

export function Detail({ pokemon, error, loading }: Props) {
  if (loading) {
    return (
      <>
        <ImageContainer />
        <Skeleton />
      </>
    )
  }

  if (error || !pokemon) {
    return <ErrorViewState />
  }

  return (
    <>
      <ImageContainer url={pokemon.image} name={pokemon.name} />
      <div className="pokemon-detail__info">
        <Card>
          <FloatingAudio url={pokemon?.audio || ''} />
          <h2 className="pokemon-detail__name">{pokemon?.name}</h2>
          <PokemonNumber id={pokemon?.id} />
          <Measurements height={pokemon?.height} weight={pokemon?.weight} />
          <PokemonTypes types={pokemon?.types} />
          <PokemonStats stats={pokemon?.stats} />
        </Card>
      </div>
    </>
  )
}
