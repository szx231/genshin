import styles from './Loader.module.scss';
import React from 'react';

const  Loader:React.FC = () => {
  return(
    <>
      <div className={styles.Loader__wrapper}>
        <div className={styles.loader}></div>
        <div className={styles.loader__text}>Loading....</div>
      </div>
    </>
  )
}

export default Loader;