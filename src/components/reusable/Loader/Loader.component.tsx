import React from 'react';

import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.loader}>
    <img className={styles.image} src="/loader.svg" alt="" />
  </div>
);

export default Loader;
