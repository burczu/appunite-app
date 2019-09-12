import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { IFiltersReducer } from './../types';
import getSelectedCategory from './getSelectedCategory';

describe('getCategories selector', () => {
  it('should return correct categories list', () => {
    const expected = 'test';
    const mockedFilters: IFiltersReducer = {
      selectedCategory: expected,
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
