interface NameUrlPair {
  name: string
  url: string
}

interface PokemonStat {
  base_stat: number
  effort: number
  stat: NameUrlPair
}

interface PokemonType {
  slot: number
  type: NameUrlPair
}

interface PokemonSprites {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
  other: {
    dream_world: {
      front_default: string | null
      front_female: string | null
    }
    home: {
      front_default: string | null
      front_female: string | null
      front_shiny: string | null
      front_shiny_female: string | null
    }
    'official-artwork': {
      front_default: string | null
      front_shiny: string | null
    }
  }
}

export interface PokemonDTO {
  id: number
  name: string
  height: number
  weight: number
  cries: {
    latest: string | null
    legacy: string | null
  }
  stats: PokemonStat[]
  types: PokemonType[]
  sprites: PokemonSprites
}
