import './PokemonTypes.css'

interface Props {
  types: string[]
}

export function PokemonTypes({ types }: Props) {
  return (
    <div className="pokemon-detail-types">
      {types.map(type => (
        <span key={type} className="pokemon-detail-types__type">
          {type}
        </span>
      ))}
    </div>
  )
}
