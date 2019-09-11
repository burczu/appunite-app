import React from 'react';

import { shallow } from 'enzyme';
import PageWrapper from './PageWrapper.component';

describe('PageWrapper component', () => {
  it('should wrap children with div with class "wrapper"', () => {
    const wrapper = shallow(
      <PageWrapper>
        <div>test</div>
      </PageWrapper>,
    );

    expect(wrapper.hasClass('wrapper')).toEqual(true);
  });

  it('should render children', () => {
    const wrapper = shallow(
      <PageWrapper>
        <div id="test">test</div>
      </PageWrapper>,
    );

    expect(wrapper.find('#test')).toHaveLength(1);
  });
});
