import { useRef, useState } from 'react'

import './Audio.css'

interface Props {
  url: string
}

export function Audio({ url }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)

  const handlePlay = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    try {
      if (!audioRef.current) {
        audioRef.current = new window.Audio(url)
        audioRef.current.addEventListener('ended', () => setPlaying(false))
      }

      await audioRef.current.play()
      setPlaying(true)
    } catch {
      setError(true)
    }
  }

  return (
    <button
      aria-label="play audio"
      className="audio-button"
      disabled={error}
      onClick={handlePlay}
    >
      {playing ? (
        <div className="audio-button__playing" />
      ) : (
        <div className="audio-button__play-button" />
      )}
    </button>
  )
}
