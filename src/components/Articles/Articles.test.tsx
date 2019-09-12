import React from 'react';

import { shallow } from 'enzyme';
import Articles from './Articles.component';

describe('Articles component', () => {
  it('should render h1', () => {
    const wrapper = shallow(<Articles />);

    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render correct title', () => {
    const wrapper = shallow(<Articles />);

    expect(wrapper.find('h1').text()).toEqual('Articles');
  });
});
