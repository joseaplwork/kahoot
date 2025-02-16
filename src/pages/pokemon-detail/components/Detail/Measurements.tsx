import './Measurements.css'

interface Props {
  height: number | null
  weight: number | null
}

export function Measurements({ height, weight }: Props) {
  return (
    <div className="pokemon-detail-measurements">
      <div>
        <span className="pokemon-detail-measurements__label">Height:</span>
        <span>{height}</span>
      </div>
      <div>
        <span className="pokemon-detail-measurements__label">Weight:</span>
        <span>{weight}</span>
      </div>
    </div>
  )
}
