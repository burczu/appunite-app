import React from 'react';

import { IClearFiltersProps } from './ClearFilters';
import styles from './ClearFilters.module.scss';

const ClearFilters = ({ clearFilters }: IClearFiltersProps) => (
  <div className={styles.container}>
    <button className={styles.clearButton} type="button" onClick={clearFilters}>
      Clear filters
    </button>
  </div>
);

export default ClearFilters;
