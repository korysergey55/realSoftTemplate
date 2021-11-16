import React from 'react'
import { useHistory } from 'react-router'
import { paths } from 'utils/paths'

import styles from './styles.module.scss'
import sprite from 'sources/icons/sprite.svg'
import { ReactComponent as Icon } from 'sources/icons/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

interface IProps {
  icon?: string
}

const Icons: React.FC<IProps> = ({ icon = '#icon-home' }) => {
  const history = useHistory()
  return (
    <div className={styles.container}>
      <a className={styles.link} onClick={() => history.push(paths.home)}>
        <svg className={styles.logoIcon}>
          <use href={sprite + icon} />
        </svg>
      </a>
      <FontAwesomeIcon
        className={styles.iconAwesome}
        icon={faReact}
        color="red"
        size="3x"
      />
      <Icon className={styles.iconAsComponent} />
    </div>
  )
}

export default Icons
