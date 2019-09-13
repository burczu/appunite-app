import { getArticles } from '@Model/articles/actions';
import { getSources } from '@Model/sources/actions';
import _Store from '@Store';
import { of as of$ } from 'rxjs';
import { filter as filter$, mergeMap as mergeMap$ } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { setArticlesLoading, setSourcesLoading } from './../actions';

export const setArticlesLoaderOnArticlesRequest: _Store.IEpic = (action$) => {
  return action$.pipe(
    filter$(isActionOf(getArticles.request)),
    mergeMap$(() => {
      return of$(setArticlesLoading(true));
    }),
  );
};

export const setSourcesLoaderOnSourcesRequest: _Store.IEpic = (action$) => {
  return action$.pipe(
    filter$(isActionOf(getSources.request)),
    mergeMap$(() => {
      return of$(setSourcesLoading(true));
    }),
  );
};

export const setArticlesLoaderOnArticlesGetFinished: _Store.IEpic = (
  action$,
) => {
  return action$.pipe(
    filter$(isActionOf([getArticles.success, getArticles.failure])),
    mergeMap$(() => {
      return of$(setArticlesLoading(false));
    }),
  );
};

export const setSourcesLoaderOnSourcesGetFinished: _Store.IEpic = (action$) => {
  return action$.pipe(
    filter$(isActionOf([getSources.success, getSources.failure])),
    mergeMap$(() => {
      return of$(setSourcesLoading(false));
    }),
  );
};
