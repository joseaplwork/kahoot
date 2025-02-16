import './PokemonNumber.css'

interface Props {
  id: number
}

export function PokemonNumber({ id }: Props) {
  return <p className="pokemon-number">N° {id.toString().padStart(3, '0')}</p>
}
