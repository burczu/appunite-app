import React from 'react';

import { shallow } from 'enzyme';
import Select from 'react-dropdown';
import DropDown from './DropDown.component';

describe('DropDown', () => {
  const testOptions = ['test1', 'test2', 'test'];
  // tslint:disable-next-line:no-empty
  const testOnSelect = () => {};
  const testValue = testOptions[0];

  it('should render the select element', () => {
    const wrapper = shallow(
      <DropDown
        options={testOptions}
        onSelect={testOnSelect}
        value={testValue}
      />,
    );

    expect(wrapper.find(Select)).toHaveLength(1);
  });
});
