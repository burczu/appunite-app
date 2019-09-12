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
      selectedSortBy: expected,
    };
    const mockedState: StateType<typeof rootReducer> = {
      articles: [],
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
    };

    expect(getSelectedSortBy(mockedState)).toEqual(expected);
  });
});
