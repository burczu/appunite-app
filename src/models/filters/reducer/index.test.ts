import { ActionType } from 'typesafe-actions';
import { setFilter, setSortBy } from './../actions';
import { RELEVANCY } from './../constants/constants';
import { IFiltersReducer, IFiltersSortBy } from './../types';
import reducer from './index';

describe('filtersReducer', () => {
  const initialState: IFiltersReducer = {
    selectedCategory: undefined,
    selectedSortBy: undefined,
  };

  it('should return initial state', () => {
    expect(reducer(initialState, {} as ActionType<any>)).toEqual(initialState);
  });

  it('should handle SET_CATEGORY_FILTER', () => {
    const mockPayload: string = 'test';

    expect(reducer(initialState, setFilter(mockPayload))).toEqual({
      selectedCategory: mockPayload,
    });
  });

  it('should handle SET_SORT_BY_FILTER', () => {
    const mockPayload: IFiltersSortBy = RELEVANCY;

    expect(reducer(initialState, setSortBy(mockPayload))).toEqual({
      selectedSortBy: mockPayload,
    });
  });
});
