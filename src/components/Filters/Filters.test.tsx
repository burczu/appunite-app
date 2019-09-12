import React from 'react';

import { shallow } from 'enzyme';
import DateDropDown from './components/DateDropDown';
import SortByDropDown from './components/SortByDropDown';
import TopicDropDown from './components/TopicDropDown';
import Filters from './Filters.comonent';

describe('Filters', () => {
  it('should render TopicDropDown', () => {
    const wrapper = shallow(<Filters />);

    expect(wrapper.find(TopicDropDown)).toHaveLength(1);
  });

  it('should render SortByDropDown', () => {
    const wrapper = shallow(<Filters />);

    expect(wrapper.find(SortByDropDown)).toHaveLength(1);
  });

  it('should render DateDropDown', () => {
    const wrapper = shallow(<Filters />);

    expect(wrapper.find(DateDropDown)).toHaveLength(1);
  });
});
