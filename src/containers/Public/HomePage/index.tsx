import React from 'react'
import Header from 'components/Header'
import styles from './styles.module.scss'
import MapComponent from '../../../components/commons/MapComponent/index'
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>HomePage</h2>
        <MapComponent />
      </div>
    </div>
  )
}

export default HomePage
