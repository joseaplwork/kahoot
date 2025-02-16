import { useState } from 'react'

import './ImageContainer.css'

interface Props {
  url?: string | null
  name?: string | null
  skeleton?: boolean
}

export function ImageContainer({ url, name, skeleton = false }: Props) {
  const [loading, setLoading] = useState(!!url)

  return (
    <div className="image">
      {(loading || skeleton) && <div className="image__skeleton" />}
      {url && !skeleton && (
        <img
          className="image__img"
          src={url}
          alt={name || ''}
          onLoad={() => setLoading(false)}
          style={{ display: loading ? 'none' : 'block' }}
        />
      )}
      {!loading && !skeleton && <div className="image__empty">No image</div>}
    </div>
  )
}
