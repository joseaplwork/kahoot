import { useEffect, useRef, useState } from 'react'

import './Audio.css'

interface Props {
  url: string
}

export function Audio({ url }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [canPlay, setCanPlay] = useState<boolean>(!!url)

  const handleAudioEnd = () => {
    setPlaying(false)
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

  useEffect(() => {
    const audio = document.createElement('audio')
    const format = url.split('.').pop()?.toLowerCase()

    if (format) {
      const canPlay = audio.canPlayType(`audio/${format}`)

      setCanPlay(canPlay !== '')
    }
  }, [url])

  const handlePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (audioRef.current) {
      setPlaying(true)
      audioRef.current.play()
    }
  }

  return (
    <button className="audio-button" disabled={!canPlay} onClick={handlePlay}>
      {playing ? (
        <div className="audio-button__playing"></div>
      ) : (
        <div className="audio-button__play-button"></div>
      )}
      {canPlay && (
        <audio ref={audioRef} src={url} onError={() => setCanPlay(false)} />
      )}
    </button>
  )
}
