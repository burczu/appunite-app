import { getArticles } from '@Model/articles/actions';
import _Store from '@Store';
import { LOCATION_CHANGE } from 'connected-react-router';
import { of as of$ } from 'rxjs';
import { filter as filter$, mergeMap as mergeMap$ } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

export const requestArticlesWhenLocationChangedToHome: _Store.IEpic = (
  action$,
) => {
  return action$.pipe(
    filter$(isOfType(LOCATION_CHANGE)),
    filter$((action) => action.payload.location.pathname === '/'),
    mergeMap$(() => {
      return of$(getArticles.request());
    }),
  );
};
