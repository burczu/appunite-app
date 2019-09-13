import React from 'react';

import { shallow } from 'enzyme';
import Error from './Error.component';

describe('Error component', () => {
  it('should render correct message', () => {
    const expectedText =
      'An unexpected error occured... Pleas try to reload the page and try again.';
    const wrapper = shallow(<Error />);

    expect(wrapper.find('.message').text()).toEqual(expectedText);
  });
});
