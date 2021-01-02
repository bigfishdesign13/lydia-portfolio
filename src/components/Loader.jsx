import React from 'react';
import styles from './Loader.module.scss'; // Import css modules stylesheet as styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

function Loader() {
  return (
    <div className={ styles.loader }>
      <FontAwesomeIcon icon={faCog} spin size="7x" />
    </div>
  );
}

export default Loader;