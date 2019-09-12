import rootReducer from '@/store/rootReducer';
import { IFiltersReducer } from '@Model/filters/types';
import { StateType } from 'typesafe-actions';
import getPagination from './getPagination';

describe('getPagination selector', () => {
  it('should return pagination', () => {
    const expectedPagination: number = 1;
    const mockedFilters: IFiltersReducer = {
      selectedCategory: undefined,
      selectedDate: undefined,
      selectedSortBy: undefined,
    };

    const mockedState: StateType<typeof rootReducer> = {
      articles: {
        articles: [],
        pagination: expectedPagination,
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
    };

    expect(getPagination(mockedState)).toEqual(expectedPagination);
  });
});
