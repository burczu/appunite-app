import React from 'react';

import { shallow } from 'enzyme';
import Articles from './Articles.component';
import SortByDropDown from './components/SortByDropDown';
import TopicDropDown from './components/TopicDropDown';

describe('Articles component', () => {
  it('should render h1', () => {
    const wrapper = shallow(<Articles />);

    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render correct title', () => {
    const wrapper = shallow(<Articles />);

    expect(wrapper.find('h1').text()).toEqual('Articles');
  });

  it('should render TopicDropDown', () => {
    const wrapper = shallow(<Articles />);

    expect(wrapper.find(TopicDropDown)).toHaveLength(1);
  });

  it('should render SortByDropDown', () => {
    const wrapper = shallow(<Articles />);

    expect(wrapper.find(SortByDropDown)).toHaveLength(1);
  });
});
