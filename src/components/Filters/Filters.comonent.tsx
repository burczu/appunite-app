import React from 'react';

import ClearFilters from './components/ClearFilters';
import DateDropDown from './components/DateDropDown';
import SortByDropDown from './components/SortByDropDown';
import TopicDropDown from './components/TopicDropDown';
import styles from './Filters.module.scss';

const Filters = () => (
  <section className={styles.filters}>
    <TopicDropDown />
    <SortByDropDown />
    <DateDropDown />

    <ClearFilters />
  </section>
);

export default Filters;
