import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { IFiltersReducer } from './../types';
import get from './get';

describe('get (filters) selector', () => {
  it('should return filters state', () => {
    const mockedFilters: IFiltersReducer = {
      selectedCategory: 'test',
      selectedDate: undefined,
      selectedSortBy: undefined,
    };

    const mockedState: StateType<typeof rootReducer> = {
      article: null,
      articles: {
        articles: [],
        pagination: 1,
      },
      filters: mockedFilters,
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

    expect(get(mockedState)).toEqual(mockedFilters);
  });
});
