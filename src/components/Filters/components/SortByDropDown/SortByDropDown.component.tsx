import React from 'react';

import DropDown from '@Compo/reusable/DropDown';
import { IFiltersSortBy } from '@Model/filters/types';
import { ISortByDropDownProps } from './SortByDropDown';
import styles from './SortByDropDown.module.scss';

const SortByDropDown = ({
  selectedSortBy,
  selectSortBy,
  sortBys,
}: ISortByDropDownProps) => {
  const handleOnSelect = (selectedOption: string) => {
    selectSortBy(selectedOption as IFiltersSortBy);
  };

  return (
    <DropDown
      className={styles.dropDown}
      options={sortBys}
      onSelect={handleOnSelect}
      placeholder="Sort by"
      value={selectedSortBy}
    />
  );
};

export default SortByDropDown;
