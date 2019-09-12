import React from 'react';

import DropDown from '@Compo/reusable/DropDown';
import { ITopicDropDownProps } from './TopicDropDown';
import styles from './TopicDropDown.module.scss';

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
      className={styles.dropDown}
      options={categories}
      onSelect={handleOnSelect}
      placeholder="Topic"
      value={selectedCategory}
    />
  );
};

export default TopicDropDown;
