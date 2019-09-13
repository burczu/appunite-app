import React from 'react';

import styles from './Error.module.scss';

const Error = () => (
  <div className={styles.error}>
    <span className={styles.message}>
      An unexpected error occured... Pleas try to reload the page and try again.
    </span>
  </div>
);

export default Error;
