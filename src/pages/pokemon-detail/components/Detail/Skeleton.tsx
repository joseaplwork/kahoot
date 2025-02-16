import { Card } from '@/shared/components'

import './Skeleton.css'

export function Skeleton() {
  return (
    <div className="pokemon-detail-skeleton">
      <Card>
        <div className="pokemon-detail-skeleton__audio"></div>
        <div className="pokemon-detail-skeleton__name"></div>
        <div className="pokemon-detail-skeleton__number"></div>
        <div className="pokemon-detail-skeleton__measurements-container">
          <div className="pokemon-detail-skeleton__measurement"></div>
          <div className="pokemon-detail-skeleton__measurement"></div>
        </div>
      </Card>
    </div>
  )
}
