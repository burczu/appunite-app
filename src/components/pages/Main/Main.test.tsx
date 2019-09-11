import React from 'react';

import Articles from '@Compo/Articles';
import { shallow } from 'enzyme';
import Main from './Main.component';

describe('Main component', () => {
  it('should render Articles component', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.find(Articles)).toHaveLength(1);
  });
});
