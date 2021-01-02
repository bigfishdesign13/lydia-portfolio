import React from 'react';
import {
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from "./Nav.module.scss";

const Nav = (props) => {
  return (
    <nav className={styles.topnav}>
      <Container>
        <Row className={styles.row}>
          <Col sm={6}>
            <a href="mailto:lydia@brutvan.com">lydia@brutvan.com</a>
          </Col>
          <Col sm={2} className={styles.col}>
            <Link to="/about">About</Link>
          </Col>
          <Col sm={2} className={styles.col}>
            <Link to="/photos">Photos</Link>
          </Col>
          <Col sm={2} className={styles.col}>
            <Link to="/">Home</Link>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Nav;