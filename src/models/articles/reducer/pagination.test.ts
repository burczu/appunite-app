import { setPagination } from '@Model/articles/actions';
import { IArticlesPaginationReducer } from '@Model/articles/types';
import { ActionType } from 'typesafe-actions';
import reducer from './pagination';

describe('paginationReducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {} as ActionType<any>)).toEqual(1);
  });

  it('should handle _SET_PAGINATION', () => {
    const mockData: IArticlesPaginationReducer = 2;

    expect(reducer(undefined, setPagination(mockData))).toEqual(mockData);
  });
});
