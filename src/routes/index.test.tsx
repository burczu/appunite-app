import React from 'react';

import Main from '@Compo/pages/Main';
import NotFound from '@Compo/pages/NotFound';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Routes from './index';

describe('Routes', () => {
  it('should render Main page for index route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Routes />
      </MemoryRouter>,
    );

    expect(wrapper.find(Main)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('should render NotFount page for unknow routes', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/some-route']}>
        <Routes />
      </MemoryRouter>,
    );

    expect(wrapper.find(Main)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
