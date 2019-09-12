import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { IFiltersReducer } from './../types';
import get from './get';

describe('get (filters) selector', () => {
  it('should return filters state', () => {
    const mockedFilters: IFiltersReducer = {
      selectedCategory: 'test',
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

    expect(get(mockedState)).toEqual(mockedFilters);
  });
});