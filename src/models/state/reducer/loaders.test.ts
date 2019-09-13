import { ActionType } from 'typesafe-actions';
import { setArticlesLoading, setSourcesLoading } from './../actions';
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

  it('should handle _SET_ARTICLES_LOADING', () => {
    const expected: IStateLoadersReducer = {
      articlesLoading: true,
      sourcesLoading: false,
    };

    expect(reducer(undefined, setArticlesLoading(true))).toEqual(expected);
  });

  it('should handle _SET_SOURCES_LOADING', () => {
    const expected: IStateLoadersReducer = {
      articlesLoading: false,
      sourcesLoading: true,
    };

    expect(reducer(undefined, setSourcesLoading(true))).toEqual(expected);
  });
});
