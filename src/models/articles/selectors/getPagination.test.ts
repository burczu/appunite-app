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
      article: null,
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

    expect(getPagination(mockedState)).toEqual(expectedPagination);
  });
});
