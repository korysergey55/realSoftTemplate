import React from 'react'
import { useHistory } from 'react-router'
import { paths } from 'utils/paths'
import styles from './styles.module.scss'
import sprite from 'sources/icons/sprite.svg'

interface IProps {
  icon?: string
}

const Icon: React.FC<IProps> = ({ icon = '#icon-home' }) => {
  const history = useHistory()
  return (
    <div className={styles.container}>
      <a className={styles.link} onClick={() => history.push(paths.home)}>
        <svg className={styles.icon}>
          <use href={sprite + icon} />
        </svg>
      </a>
    </div>
  )
}

export default Icon
