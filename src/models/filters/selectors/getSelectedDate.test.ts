import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { TODAY } from './../constants/constants';
import { IFiltersReducer } from './../types';
import getSelectedDate from './getSelectedDate';

describe('getSelectedSortBy selector', () => {
  it('should return current selected sort by value', () => {
    const expected = TODAY;
    const mockedFilters: IFiltersReducer = {
      selectedCategory: undefined,
      selectedDate: expected,
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

    expect(getSelectedDate(mockedState)).toEqual(expected);
  });
});
