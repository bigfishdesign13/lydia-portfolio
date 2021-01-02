import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PageMeta from '../../utils/PageMeta'
import styles from "./Splash.module.scss";

const Photos = (props) => {
  const state = {
    showImage: true
  }

  return (
    <div>
      <PageMeta pageTitle="Photos for Lydia Brutvan" />
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
        <h1 className={ styles.example }>Photos</h1>
      </CSSTransition>
    </div>
  );
};

export default Photos