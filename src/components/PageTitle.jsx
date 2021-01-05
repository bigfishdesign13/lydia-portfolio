import React from 'react';
import { CSSTransition } from 'react-transition-group';
// import styles from './PageTitle.module.scss';

const PageTitle = ({pagetitle, styles}) => {
  const state = {
    showTitle: true
  }
  return (
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
      <h1 className={ styles.example }>{pagetitle}</h1>
    </CSSTransition>
  );
};

export default PageTitle;