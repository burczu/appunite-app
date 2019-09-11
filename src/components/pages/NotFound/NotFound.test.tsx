import React from 'react';

import { shallow } from 'enzyme';
import NotFound from './NotFound.component';

describe('NotFount component', () => {
  it('should render h1', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render suitable message', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.find('h1').text()).toEqual('404 - page not found');
  });
});
