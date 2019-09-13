import { ActionType } from 'typesafe-actions';
import { IStateErrorsReducer } from './../types';
import reducer from './errors';

describe('errorsReducer', () => {
  it('should return initial state', () => {
    const expected: IStateErrorsReducer = {
      articlesError: false,
      sourcesError: false,
    };

    expect(reducer(undefined, {} as ActionType<any>)).toEqual(expected);
  });
});
