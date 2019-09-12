import React from 'react';

import { IGetMoreProps } from './GetMore';
import styles from './GetMore.module.scss';

const GetMore = ({ getMore }: IGetMoreProps) => (
  <div className={styles.getMore}>
    <button className={styles.button} onClick={getMore}>
      Get more
    </button>
  </div>
);

export default GetMore;
