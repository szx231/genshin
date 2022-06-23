import React from 'react'
import styles from './Loader.module.scss'

export const Loader: React.FC = () => {
  return (
    <>
      <div className={styles.Loader__wrapper}>
        <div className={styles.loader} />
        <div className={styles.loader__text}>Loading....</div>
      </div>
    </>
  )
}
