export interface PokemonStat {
  name: string
  value: number
}

export interface Pokemon {
  id: number
  name: string
  image: string | null
  height: number | null
  weight: number | null
  audio: string | null
  types: string[]
  stats: PokemonStat[]
}
