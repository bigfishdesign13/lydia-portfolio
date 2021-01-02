import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Image from 'react-bootstrap/Image'
import styles from "./Splash.module.scss";

const Splash = (props) => {
  const state = {
    showImage: true,
    showTitle: true
  }
  const name = props.name;
  const photo = props.photo;

  return (
    <>
    <div>
      <CSSTransition
        in={state.showImage}
        timeout={1500}
        classNames={{
          appearActive: styles.appearActive,
          appearDone: styles.appearDone,
          enterActive: styles.enterActive,
          enterDone: styles.enterDone,
          exitActive: styles.exit,
          exitDone: styles.exitActive
        }}
        unmountOnExit
        appear>
        <Image src={photo} roundedCircle className={ `${styles.example} ${styles.photo}` } />
      </CSSTransition>
      <CSSTransition
        in={state.showTitle}
        timeout={1500}
        classNames={{
          appearActive: styles.appearActive,
          appearDone: styles.appearDone,
          enterActive: styles.enterActive,
          enterDone: styles.enterDone,
          exitActive: styles.exit,
          exitDone: styles.exitActive
        }}
        unmountOnExit
        appear>
        <h1 className={ styles.example }>{name}</h1>
      </CSSTransition>
    </div>
    </>
  );
};

export default Splash;