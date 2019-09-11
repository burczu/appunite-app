import React from 'react';

import { shallow } from 'enzyme';
import Grid from './Grid.component';

describe('Grid component', () => {
  it('should wrap children with div with class "grid"', () => {
    const wrapper = shallow(
      <Grid>
        <div>test</div>
      </Grid>,
    );

    expect(wrapper.hasClass('grid')).toEqual(true);
  });

  it('should render children', () => {
    const wrapper = shallow(
      <Grid>
        <div id="test">test</div>
      </Grid>,
    );

    expect(wrapper.find('#test')).toHaveLength(1);
  });
});
