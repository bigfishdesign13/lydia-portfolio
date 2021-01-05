import React from 'react';
// import { CSSTransition } from 'react-transition-group';
import styles from './Photo.module.scss'
import Popup from 'reactjs-popup';

const Photo = ({slide, callback}) => {
  // const state = {
  //   showTitle: true
  // }

  return (
    // <CSSTransition
    //   in={state.showTitle}
    //   timeout={1500}
    //   classNames={{
    //     appearActive: styles.appearActive,
    //     appearDone: styles.appearDone,
    //     enterActive: styles.enterActive,
    //     enterDone: styles.enterDone,
    //     exitActive: styles.exit,
    //     exitDone: styles.exitActive
    //   }}
    //   unmountOnExit
    //   appear>
    //   <h1 className={ styles.example }>{pagetitle}</h1>
    // </CSSTransition>
    
    <div className={styles.pod}>
      {/* <div className={styles.innards}>
        <h3 className={styles.title}>{slide.title}</h3>
        <h4 className={styles.date}>{slide.date}</h4>
        <img src={'img/' + slide.thumb} alt={slide.title} className={styles.photo} />
      </div> */}
      <Popup trigger={
        <div className={styles.innards}>
          <h3 className={styles.title}>{slide.title}</h3>
          <h4 className={styles.date}>{slide.date}</h4>
          <img src={'img/' + slide.thumb} alt={slide.title} className={styles.photo} />
        </div>
      } modal>
        <img src={'img/' + slide.photo} alt={slide.title} />
      </Popup>
    </div>
  );
};

export default Photo;