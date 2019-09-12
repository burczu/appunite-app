import React from 'react';

import { shallow } from 'enzyme';
import ClearFilters from './ClearFilters.component';

describe('ClearFilters', () => {
  it('should call clearFilters when clicked', () => {
    const functions = {
      clearFilters: jest.fn(),
    };

    const wrapper = shallow(
      <ClearFilters clearFilters={functions.clearFilters} />,
    );
    wrapper.find('button').simulate('click');

    expect(functions.clearFilters.mock.calls.length).toEqual(1);
  });
});
