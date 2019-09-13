import { ActionType } from 'typesafe-actions';
import { setArticlesError, setSourcesError } from './../actions';
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

  it('should handle _SET_ARTICLES_ERROR', () => {
    const expected: IStateErrorsReducer = {
      articlesError: true,
      sourcesError: false,
    };

    expect(reducer(undefined, setArticlesError(true))).toEqual(expected);
  });

  it('should handle _SET_SOURCES_ERROR', () => {
    const expected: IStateErrorsReducer = {
      articlesError: false,
      sourcesError: true,
    };

    expect(reducer(undefined, setSourcesError(true))).toEqual(expected);
  });
});
