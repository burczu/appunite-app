import { ActionType } from 'typesafe-actions';
import reducer from './pagination';

describe('paginationReducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {} as ActionType<any>)).toEqual(1);
  });
});
