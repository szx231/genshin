import React, { useEffect, useRef, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import onCanPlay from 'react-audio-player'
import { IoVolumeMedium, IoVolumeMute } from 'react-icons/io5'
import soundfile from './Music/genshin.mp3'
import styles from './Sound.module.scss'

export const Sound: React.FC = () => {
  const [sound, setSound] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const soundToggle = () => {
    setSound((curr) => curr === false)
  }

  const MusicPlay = () => {
    if (audioRef.current) {
      sound === false ? audioRef.current.play() : audioRef.current.pause()
    }
  }

  return (
    <>
      <button
        onClick={() => {
          soundToggle()
          MusicPlay()
        }}
        className={styles.Sound}
      >
        {sound ? <IoVolumeMedium /> : <IoVolumeMute />}
      </button>
      <audio ref={audioRef} loop={true} controls style={{ display: 'none' }}>
        <source src={soundfile} type="audio/mp3" />
      </audio>
    </>
  )
}
