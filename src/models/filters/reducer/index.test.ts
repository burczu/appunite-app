import { ActionType } from 'typesafe-actions';
import { setCategoryFilter } from './../actions';
import { IFiltersReducer } from './../types';
import reducer from './index';

describe('filtersReducer', () => {
  const initialState: IFiltersReducer = {
    selectedCategory: null,
  };

  it('should return initial state', () => {
    expect(reducer(initialState, {} as ActionType<any>)).toEqual(initialState);
  });

  it('should handle SET_CATEGORY_FILTER', () => {
    const mockPayload: string = 'test';

    expect(reducer(initialState, setCategoryFilter(mockPayload))).toEqual({
      selectedCategory: mockPayload,
    });
  });
});
