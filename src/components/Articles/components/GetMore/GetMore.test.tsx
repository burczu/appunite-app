import React from 'react';

import { shallow } from 'enzyme';
import GetMore from './GetMore.component';

describe('ClearFilters', () => {
  it('should call clearFilters when clicked', () => {
    const functions = {
      getMore: jest.fn(),
    };

    const wrapper = shallow(<GetMore getMore={functions.getMore} />);
    wrapper.find('button').simulate('click');

    expect(functions.getMore.mock.calls.length).toEqual(1);
  });
});
