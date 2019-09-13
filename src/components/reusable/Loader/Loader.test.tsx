import React from 'react';

import { shallow } from 'enzyme';
import Loader from './Loader.component';

describe('Loader component', () => {
  it('should render img tag', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper.find('img')).toHaveLength(1);
  });
});
