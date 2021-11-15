import React from 'react'
import Time from 'utils/Time/Time'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'

interface Iprops {
  logo?: string
  title?: string
}

const Header: React.FC<Iprops> = ({ logo = '', title = 'Shipping-Fast' }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <FontAwesomeIcon
          icon={faShippingFast}
          color="blue"
          size="3x"
          className={styles.icon}
        />
        {logo && <img src="logo" alt="logo" />}
        <h2 className={styles.title}>{title}</h2>
        <Time />
      </div>
    </header>
  )
}

export default Header
