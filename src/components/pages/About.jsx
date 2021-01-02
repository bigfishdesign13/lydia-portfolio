import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PageMeta from '../../utils/PageMeta'
import styles from "./Splash.module.scss";

const About = (props) => {
  const state = {
    showImage: true
  }

  return (
    <div>
      <PageMeta pageTitle="About Lydia Brutvan" />
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
        <h1 className={ styles.example }>About</h1>
      </CSSTransition>
    </div>
  );
};

export default About