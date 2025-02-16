import { useState } from 'react'

import './ImageContainer.css'

interface Props {
  url?: string | null
  name?: string | null
}

export function ImageContainer({ url, name }: Props) {
  const [loading, setLoading] = useState(true)

  return (
    <div className="image">
      {loading && <div className="image__skeleton" />}
      {url && (
        <img
          className="image__img"
          src={url}
          alt={name || ''}
          onLoad={() => setLoading(false)}
          style={{ display: loading ? 'none' : 'block' }}
        />
      )}
    </div>
  )
}
