import React from 'react'
import { useHistory } from 'react-router'
import { paths } from 'utils/paths'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import Icon from 'components/Icon'

interface Iprops {
  logo?: string
  title?: string
}

const Header: React.FC<Iprops> = ({ logo = '', title = 'Header' }) => {
  const history = useHistory()
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {logo && (
          <a className={styles.link} onClick={() => history.push(paths.home)}>
            <img className={styles.logo} src={logo} alt="logo" />
          </a>
        )}
        <h2 className={styles.title}>{title}</h2>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faReact}
          color="red"
          size="3x"
        />
      </div>
    </header>
  )
}

export default Header
