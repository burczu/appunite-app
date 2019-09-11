import React, { FC } from 'react';

import styles from './PageWrapper.module.scss';

const PageWrapper: FC = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default PageWrapper;
