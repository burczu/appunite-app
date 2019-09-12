import React from 'react';

import cn from 'classnames';
import Select, { Option } from 'react-dropdown';
import { IDropDownProps } from './DropDown';
import styles from './DropDown.module.scss';

const DropDown = ({
  className,
  options,
  onSelect,
  placeholder,
  value,
}: IDropDownProps) => {
  const handleChange = (option: Option) => {
    onSelect(option.value);
  };

  return (
    <Select
      className={cn(styles.dropDown, className)}
      placeholderClassName={styles.placeholder}
      menuClassName={styles.menu}
      options={options}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default DropDown;
