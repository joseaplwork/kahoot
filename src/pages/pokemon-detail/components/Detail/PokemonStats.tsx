import './PokemonStats.css'

interface Props {
  stats: { name: string; value: number }[]
}

export function PokemonStats({ stats }: Props) {
  return (
    <div className="pokemon-detail-stats">
      {stats.map(stat => (
        <div className="pokemon-detail-stats__stat" key={stat.name}>
          <span>{stat.name}</span>
          <span>{stat.value}</span>
        </div>
      ))}
    </div>
  )
}
