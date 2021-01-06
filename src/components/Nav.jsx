import React from 'react';
import {
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styles from "./Nav.module.scss";

const Nav = (props) => {
  return (
    <nav className={styles.topnav}>
      <Container>
        <Row className={styles.row}>
          <Col sm={2} md={8}>
            <a href="mailto:lydia@brutvan.com" className={styles.email}>
              <span>lydia@brutvan.com</span>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </Col>
          <Col xs={5} md={2} className={styles.col}>
            <Link to="/">About</Link>
          </Col>
          <Col xs={4} md={2} className={styles.col}>
            <Link to="/photos">Photos</Link>
          </Col>
          {/* <Col sm={2} className={styles.col}>
            <Link to="/">Home</Link>
          </Col> */}
        </Row>
      </Container>
    </nav>
  );
};

export default Nav;