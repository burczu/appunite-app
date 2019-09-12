import React from 'react';

import Filters from '@Compo/Filters';
import styles from './Articles.module.scss';

const Articles = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Articles</h1>
      <Filters />
    </div>
  );
};

export default Articles;
