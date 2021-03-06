import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { RELEVANCY } from './../constants/constants';
import { IFiltersReducer } from './../types';
import getSelectedSortBy from './getSelectedSortBy';

describe('getSelectedSortBy selector', () => {
  it('should return current selected sort by value', () => {
    const expected = RELEVANCY;
    const mockedFilters: IFiltersReducer = {
      selectedCategory: undefined,
      selectedDate: undefined,
      selectedSortBy: expected,
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

    expect(getSelectedSortBy(mockedState)).toEqual(expected);
  });
});
