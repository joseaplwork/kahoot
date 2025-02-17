import { Card } from '@/shared/components'

import './Skeleton.css'

export function Skeleton() {
  return (
    <div className="pokemon-list-skeleton">
      {Array.from({ length: 7 }).map((_, index) => (
        <Card key={index}>
          <div className="pokemon-list-skeleton__item">
            <div className="pokemon-list-skeleton__image" />
            <div className="pokemon-list-skeleton__info">
              <div className="pokemon-list-skeleton__name" />
              <div className="pokemon-list-skeleton__type" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
