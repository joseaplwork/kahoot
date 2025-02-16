import { useEffect, useRef, useState } from 'react'

import './Audio.css'

interface Props {
  url: string
}

export function Audio({ url }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleAudioEnd = () => {
    setIsPlaying(false)
  }

  useEffect(() => {
    const audio = audioRef.current

    if (audio) {
      audio.addEventListener('ended', handleAudioEnd)

      return () => {
        audio.removeEventListener('ended', handleAudioEnd)
      }
    }
  }, [])

  const handlePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (audioRef.current) {
      setIsPlaying(true)
      audioRef.current.play()
    }
  }

  return (
    <button className="audio-button" onClick={handlePlay}>
      {isPlaying ? (
        <div className="audio-button__playing"></div>
      ) : (
        <div className="audio-button__play-button"></div>
      )}
      <audio ref={audioRef} src={url} />
    </button>
  )
}
