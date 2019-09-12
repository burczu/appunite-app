import React from 'react';

import Filters from '@Compo/Filters';
import { shallow } from 'enzyme';
import Articles from './Articles.component';

describe('Articles component', () => {
  it('should render h1', () => {
    const wrapper = shallow(<Articles articles={[]} />);

    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render correct title', () => {
    const wrapper = shallow(<Articles articles={[]} />);

    expect(wrapper.find('h1').text()).toEqual('Articles');
  });

  it('should render SortByDropDown', () => {
    const wrapper = shallow(<Articles articles={[]} />);

    expect(wrapper.find(Filters)).toHaveLength(1);
  });
});
