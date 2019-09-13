import { getArticles } from '@Model/articles/actions';
import { getSources } from '@Model/sources/actions';
import { ActionsObservable } from 'redux-observable';
import { setArticlesError, setSourcesError } from './../actions';
import {
  setArticlesErrorOnArticlesFailure,
  setSourcesErrorOnSourcesFailure,
} from './errors';

describe('errors state epic', () => {
  it('should set articles error on articles get failure', (done) => {
    const action$ = ActionsObservable.of(
      getArticles.failure(new Error('test error')),
    );

    // @ts-ignore
    setArticlesErrorOnArticlesFailure(action$).subscribe((action: any) => {
      expect(action).toEqual(setArticlesError(true));
      done();
    });
  });

  it('should set articles error on articles get failure', (done) => {
    const action$ = ActionsObservable.of(
      getSources.failure(new Error('test error')),
    );

    // @ts-ignore
    setSourcesErrorOnSourcesFailure(action$).subscribe((action: any) => {
      expect(action).toEqual(setSourcesError(true));
      done();
    });
  });
});
