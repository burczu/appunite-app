import { ActionType } from 'typesafe-actions';
import { IStateLoadersReducer } from './../types';
import reducer from './loaders';

describe('loadersReducer', () => {
  it('should return initial state', () => {
    const expected: IStateLoadersReducer = {
      articlesLoading: false,
      sourcesLoading: false,
    };

    expect(reducer(undefined, {} as ActionType<any>)).toEqual(expected);
  });
});
