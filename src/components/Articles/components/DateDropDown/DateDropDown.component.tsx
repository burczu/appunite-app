import React from 'react';

import DropDown from '@Compo/reusable/DropDown';
import { IFiltersDates } from '@Model/filters/types';
import { IDateDropDownProps } from './DateDropDown';

const DateDropDown = ({
  dates,
  selectDate,
  selectedDate,
}: IDateDropDownProps) => {
  const handleOnSelect = (selectedOption: string) => {
    selectDate(selectedOption as IFiltersDates);
  };

  return (
    <DropDown
      options={dates}
      onSelect={handleOnSelect}
      placeholder="Time"
      value={selectedDate}
    />
  );
};

export default DateDropDown;
