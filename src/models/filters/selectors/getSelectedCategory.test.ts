import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { IFiltersReducer } from './../types';
import getSelectedCategory from './getSelectedCategory';

describe('getSelectedCategory selector', () => {
  it('should return currently selected category', () => {
    const expected = 'test';
    const mockedFilters: IFiltersReducer = {
      selectedCategory: expected,
      selectedSortBy: undefined,
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

    expect(getSelectedCategory(mockedState)).toEqual(expected);
  });
});