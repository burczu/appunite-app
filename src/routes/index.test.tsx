import React from 'react';

import rootReducer from '@/store/rootReducer';
import Article from '@Compo/pages/Article';
import Main from '@Compo/pages/Main';
import NotFound from '@Compo/pages/NotFound';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import { StateType } from 'typesafe-actions';
import Routes from './index';

describe('Routes', () => {
  const mockStore = configureStore([]);

  const initialState: StateType<typeof rootReducer> = {
    article: null,
    articles: {
      articles: [],
      pagination: 1,
    },
    filters: {
      selectedCategory: undefined,
      selectedDate: undefined,
      selectedSortBy: undefined,
    },
    router: {
      action: 'REPLACE',
      location: {
        hash: '',
        pathname: '/',
        search: '',
        state: null,
      },
    },
    sources: [],
    state: {
      errors: {
        articlesError: false,
        sourcesError: false,
      },
      loaders: {
        articlesLoading: false,
        sourcesLoading: false,
      },
    },
  };
  const store = mockStore(initialState);

  it('should render Main page for index route', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.find(Article)).toHaveLength(0);
    expect(wrapper.find(Main)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('should render Article page for article route', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/articles/some-page']}>
          <Routes />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.find(Article)).toHaveLength(1);
    expect(wrapper.find(Main)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  it('should render NotFount page for unknow routes', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/some-route']}>
          <Routes />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.find(Article)).toHaveLength(0);
    expect(wrapper.find(Main)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
