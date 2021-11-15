import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'

const Time = () => {
  const [time, setTime] = useState<string>('')
  const [timeOfDay, setTimeOfDay] = useState<string>('')

  useEffect(() => {
    const intervalTime = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    )
    return () => {
      clearInterval(intervalTime)
    }
  }, [])

  useEffect(() => {
    const welcome = () => {
      const hours = new Date().getHours()
      if (hours < 12) {
        setTimeOfDay('morning')
      } else if (hours >= 12 && hours < 17) {
        setTimeOfDay('afternoon')
      } else {
        setTimeOfDay('night')
      }
    }
    welcome()
  }, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.welcome}>Good {timeOfDay}!</h2>
      <h2 className={styles.time}>{time}</h2>
    </div>
  )
}

export default Time
