import { Card } from '@/shared/components'

import './Skeleton.css'

export function Skeleton() {
  return (
    <div
      className="pokemon-detail-skeleton"
      aria-label="loading pokemon detail"
    >
      <Card>
        <div className="pokemon-detail-skeleton__audio" />
        <div className="pokemon-detail-skeleton__name" />
        <div className="pokemon-detail-skeleton__number" />
        <div className="pokemon-detail-skeleton__measurements-container">
          <div className="pokemon-detail-skeleton__measurement" />
          <div className="pokemon-detail-skeleton__measurement" />
        </div>
      </Card>
    </div>
  )
}
