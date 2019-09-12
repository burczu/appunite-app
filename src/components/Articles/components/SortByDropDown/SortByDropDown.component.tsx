import React from 'react';

import DropDown from '@Compo/reusable/DropDown';
import { IFiltersSortBy } from '@Model/filters/types';
import { ISortByDropDownProps } from './SortByDropDown';

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
      options={sortBys}
      onSelect={handleOnSelect}
      placeholder="Time"
      value={selectedSortBy}
    />
  );
};

export default SortByDropDown;
