import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { IStateLoadersReducer } from './../types';
import getLoaders from './getLoaders';

describe('get loaders selector', () => {
  it('should return loaders state', () => {
    const expectedLoaders: IStateLoadersReducer = {
      articlesLoading: false,
      sourcesLoading: false,
    };

    const mockedState: StateType<typeof rootReducer> = {
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
        loaders: expectedLoaders,
      },
    };

    expect(getLoaders(mockedState)).toEqual(expectedLoaders);
  });
});
