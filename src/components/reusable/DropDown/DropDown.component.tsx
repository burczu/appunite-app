import React, { ChangeEvent } from 'react';

import Select, { Option } from 'react-dropdown';
import { IDropDownProps } from './DropDown';
import styles from './DropDown.module.scss';

const DropDown = ({ options, onSelect, value }: IDropDownProps) => {
  const handleChange = (option: Option) => {
    onSelect(option.value);
  };

  return (
    <Select
      className={styles.dropDown}
      placeholderClassName={styles.placeholder}
      menuClassName={styles.menu}
      options={options}
      onChange={handleChange}
      value={value}
    />
  );
};

export default DropDown;
