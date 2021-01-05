import React from 'react';
// import { CSSTransition } from 'react-transition-group';
import styles from './Photo.module.scss'

// const Photo = ({slide, callback}) => {
function PhotoAlt({slide, callback, idx}) {
    // console.log('key == '+key)
    return (
      <div className={styles.pod} title={'m'+idx}>
        <div className={styles.innards} onClick={() => callback(idx)}>
          <h3 className={styles.title}>{slide.title}</h3>
          <h4 className={styles.date}>{slide.date}</h4>
          <img src={'img/' + slide.thumb} alt={slide.title} className={styles.photo} />
        </div>
      </div>
    )
  // }
}

export default PhotoAlt;