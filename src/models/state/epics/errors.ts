import { getArticles } from '@Model/articles/actions';
import { getSources } from '@Model/sources/actions';
import _Store from '@Store';
import { of as of$ } from 'rxjs';
import { filter as filter$, mergeMap as mergeMap$ } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { setArticlesError, setSourcesError } from './../actions';

export const setArticlesErrorOnArticlesFailure: _Store.IEpic = (action$) => {
  return action$.pipe(
    filter$(isActionOf(getArticles.failure)),
    mergeMap$(() => {
      return of$(setArticlesError(true));
    }),
  );
};

export const setSourcesErrorOnSourcesFailure: _Store.IEpic = (action$) => {
  return action$.pipe(
    filter$(isActionOf(getSources.failure)),
    mergeMap$(() => {
      return of$(setSourcesError(true));
    }),
  );
};
