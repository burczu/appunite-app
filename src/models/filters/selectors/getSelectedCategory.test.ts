import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { IFiltersReducer } from './../types';
import getSelectedCategory from './getSelectedCategory';

describe('getSelectedCategory selector', () => {
  it('should return currently selected category', () => {
    const expected = 'test';
    const mockedFilters: IFiltersReducer = {
      selectedCategory: expected,
      selectedDate: undefined,
      selectedSortBy: undefined,
    };
    const mockedState: StateType<typeof rootReducer> = {
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

    expect(getSelectedCategory(mockedState)).toEqual(expected);
  });
});
