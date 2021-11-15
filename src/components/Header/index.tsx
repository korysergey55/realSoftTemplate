import React from 'react'
import { paths } from 'utils/paths'
import { useHistory } from 'react-router'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

interface Iprops {
  logo?: string
  title?: string
}

const Header: React.FC<Iprops> = ({ logo = '', title = 'Header' }) => {
  const history = useHistory()
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button
          className={styles.button}
          type="button"
          onClick={() => history.push(paths.home)}
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={faReact}
            color="red"
            size="3x"
          />
        </button>
        {logo && <img src={logo} alt="logo" />}
        <h2 className={styles.title}>{title}</h2>
      </div>
    </header>
  )
}

export default Header
