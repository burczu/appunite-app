import React, { FC } from 'react';

import styles from './Grid.module.scss';

const Grid: FC = ({ children }) => (
  <div className={styles.grid}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Grid;
