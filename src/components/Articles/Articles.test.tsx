import React from 'react';

import Filters from '@Compo/Filters';
import Error from '@Compo/reusable/Error';
import Loader from '@Compo/reusable/Loader';
import { shallow } from 'enzyme';
import Articles from './Articles.component';
import GetMore from './components/GetMore';

describe('Articles component', () => {
  it('should render h1', () => {
    const wrapper = shallow(
      <Articles articles={[]} isError={false} isLoading={false} />,
    );

    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render correct title', () => {
    const wrapper = shallow(
      <Articles articles={[]} isError={false} isLoading={false} />,
    );

    expect(wrapper.find('h1').text()).toEqual('Articles');
  });

  it('should render SortByDropDown', () => {
    const wrapper = shallow(
      <Articles articles={[]} isError={false} isLoading={false} />,
    );

    expect(wrapper.find(Filters)).toHaveLength(1);
  });

  it('should render loader if isLoading is true', () => {
    const wrapper = shallow(
      <Articles articles={[]} isError={false} isLoading={true} />,
    );

    expect(wrapper.find(Loader)).toHaveLength(1);
  });

  it('should not render loader if isLoading is false', () => {
    const wrapper = shallow(
      <Articles articles={[]} isError={false} isLoading={false} />,
    );

    expect(wrapper.find(Loader)).toHaveLength(0);
  });

  it('should render getMore is isLoading is false', () => {
    const wrapper = shallow(
      <Articles articles={[]} isError={false} isLoading={false} />,
    );

    expect(wrapper.find(GetMore)).toHaveLength(1);
  });

  it('should render articles list is isLoading is false', () => {
    const wrapper = shallow(
      <Articles articles={[]} isError={false} isLoading={false} />,
    );

    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('should render error message when isError is true', () => {
    const wrapper = shallow(
      <Articles articles={[]} isError={true} isLoading={false} />,
    );

    expect(wrapper.find(Error)).toHaveLength(1);
  });

  it('should not render error message when isError is false', () => {
    const wrapper = shallow(
      <Articles articles={[]} isError={false} isLoading={false} />,
    );

    expect(wrapper.find(Error)).toHaveLength(0);
  });

  it('should not render articles section when isError is true', () => {
    const wrapper = shallow(
      <Articles articles={[]} isError={true} isLoading={false} />,
    );

    expect(wrapper.find('.articles')).toHaveLength(0);
  });

  it('should render articles section when isError is false', () => {
    const wrapper = shallow(
      <Articles articles={[]} isError={false} isLoading={false} />,
    );

    expect(wrapper.find('.articles')).toHaveLength(1);
  });
});
