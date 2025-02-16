interface PokemonDTO {
  name: string
  url: string
}

export interface PokemonListDTO {
  count: number
  next: string | null
  previous: string | null
  results: PokemonDTO[]
}
