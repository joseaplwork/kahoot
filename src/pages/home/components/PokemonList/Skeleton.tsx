import { Card } from '@/shared/components'

import './Skeleton.css'

export function Skeleton() {
  return (
    <div className="skeleton">
      {Array.from({ length: 7 }).map((_, index) => (
        <Card key={index}>
          <div className="skeleton__item">
            <div className="skeleton__image"></div>
            <div className="skeleton__info">
              <div className="skeleton__name"></div>
              <div className="skeleton__type"></div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
