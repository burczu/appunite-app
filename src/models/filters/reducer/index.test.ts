import { ActionType } from 'typesafe-actions';
import { setCategory, setDate, setSortBy } from './../actions';
import { RELEVANCY, TODAY } from './../constants/constants';
import { IFiltersDates, IFiltersReducer, IFiltersSortBy } from './../types';
import reducer from './index';

describe('filtersReducer', () => {
  const initialState: IFiltersReducer = {
    selectedCategory: undefined,
    selectedDate: undefined,
    selectedSortBy: undefined,
  };

  it('should return initial state', () => {
    expect(reducer(initialState, {} as ActionType<any>)).toEqual(initialState);
  });

  it('should handle SET_CATEGORY', () => {
    const mockPayload: string = 'test';

    expect(reducer(initialState, setCategory(mockPayload))).toEqual({
      selectedCategory: mockPayload,
    });
  });

  it('should handle SET_SORT_BY', () => {
    const mockPayload: IFiltersSortBy = RELEVANCY;

    expect(reducer(initialState, setSortBy(mockPayload))).toEqual({
      selectedSortBy: mockPayload,
    });
  });

  it('should handle SET_DATE', () => {
    const mockPayload: IFiltersDates = TODAY;

    expect(reducer(initialState, setDate(mockPayload))).toEqual({
      selectedDate: mockPayload,
    });
  });
});
