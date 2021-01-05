import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import PageTitle from '../PageTitle'
import PageMeta from '../../utils/PageMeta'
import styles from "./Splash.module.scss";

const Splash = (props) => {
  const state = {
    showImage: true
  }
  const name = props.name;
  const photo = props.photo;

  return (
    <div>
      <PageMeta pageTitle="Lydia Brutvan | New Paltz High School Class of 2021" />
      <PageTitle pagetitle={name} styles={styles} />

      <Container fluid="lg" float="right">
        <Row>
          <Col sm={12} md={8} xl={{span:4, offset: 4}}>
            <h3>New Paltz High School</h3>
            <h4 className="normal">Class of 2021</h4>
            <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          </Col>
          <Col s={{order: 'first'}} sm={{span: 12, order: 'first'}} md={{span: 4, order: 'last'}}>
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
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default Splash;