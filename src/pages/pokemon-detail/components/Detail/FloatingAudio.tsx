import { Audio } from '@/shared/components'

import './FloatingAudio.css'

interface Props {
  url: string
}

export function FloatingAudio({ url }: Props) {
  return (
    <div className="pokemon-detail-floating-audio">
      <Audio url={url} />
    </div>
  )
}
