import React from 'react';

import styles from './Articles.module.scss';
import TopicDropDown from './components/TopicDropDown';

const Articles = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Articles</h1>
      <section className={styles.filters}>
        <TopicDropDown />
      </section>
    </div>
  );
};

export default Articles;
