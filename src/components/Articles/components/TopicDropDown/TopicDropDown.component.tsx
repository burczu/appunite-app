import React from 'react';

import DropDown from '@Compo/reusable/DropDown';
import { ITopicDropDownProps } from './TopicDropDown';

const TopicDropDown = ({
  categories,
  selectCategory,
  selectedCategory,
}: ITopicDropDownProps) => {
  const handleOnSelect = (selectedOption: string) => {
    selectCategory(selectedOption);
  };

  return (
    <DropDown
      options={categories}
      onSelect={handleOnSelect}
      value={selectedCategory}
    />
  );
};

export default TopicDropDown;
