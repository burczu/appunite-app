import React from 'react';

import styles from './Articles.module.scss';
import ClearFilters from './components/ClearFilters';
import DateDropDown from './components/DateDropDown';
import SortByDropDown from './components/SortByDropDown';
import TopicDropDown from './components/TopicDropDown';

const Articles = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Articles</h1>
      <section className={styles.filters}>
        <TopicDropDown />
        <SortByDropDown />
        <DateDropDown />

        <ClearFilters />
      </section>
    </div>
  );
};

export default Articles;
