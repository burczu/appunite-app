import {
  clearFilters,
  setCategory,
  setDate,
  setSortBy,
} from '@Model/filters/actions';
import {
  getSelectedDateFormatted,
  getSelectedSortBy,
} from '@Model/filters/selectors';
import { getSourcesForSelectedCategory } from '@Model/sources/selectors';
import { IArticlesResponse } from '@Services/$articles-api/types';
import _Store from '@Store';
import { LOCATION_CHANGE } from 'connected-react-router';
import { from as from$, of as of$ } from 'rxjs';
import {
  catchError as catchError$,
  filter as filter$,
  map as map$,
  mergeMap as mergeMap$,
  takeUntil as takeUntil$,
  tap as tap$,
  withLatestFrom as withLatestFrom$,
} from 'rxjs/operators';
import { isActionOf, isOfType } from 'typesafe-actions';
import { getArticles } from './../actions';

export const requestArticlesWhenLocationChangedToHome: _Store.IEpic = (
  action$,
) => {
  return action$.pipe(
    filter$(isOfType(LOCATION_CHANGE)),
    filter$((action) => action.payload.location.pathname === '/'),
    mergeMap$(() => {
      return of$(
        getArticles.request({
          dateFrom: '',
          dateTo: '',
          sortBy: '',
          sources: [],
        }),
      );
    }),
  );
};

export const requestArticlesWhenFiltersChanged: _Store.IEpic = (
  action$,
  state$,
) => {
  return action$.pipe(
    filter$(isActionOf([setCategory, setSortBy, setDate, clearFilters])),
    withLatestFrom$(state$),
    mergeMap$(([_, state]) => {
      let dateFrom = '';
      let dateTo = '';
      let sortBy = '';
      const dateFormatted = getSelectedDateFormatted(state);
      const selectedSortBy = getSelectedSortBy(state);
      const sources = getSourcesForSelectedCategory(state);

      if (dateFormatted) {
        dateFrom = dateFormatted.from;
        dateTo = dateFormatted.to;
      }

      if (selectedSortBy) {
        sortBy = selectedSortBy;
      }

      return of$(
        getArticles.request({
          dateFrom,
          dateTo,
          sortBy,
          sources,
        }),
      );
    }),
  );
};

export const fetchArticlesWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { articlesApi },
) => {
  return action$.pipe(
    filter$(isActionOf(getArticles.request)),
    mergeMap$((action) => {
      const { dateTo, dateFrom, sortBy, sources } = action.payload;

      return from$(
        articlesApi.getArticles(sources, sortBy, dateFrom, dateTo, 1),
      ).pipe(
        map$((data: IArticlesResponse) => {
          return getArticles.success(data.articles);
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => articlesApi.cancelArticles()),
          ),
        ),
        catchError$((error: Error) => of$(getArticles.failure(error))),
      );
    }),
  );
};
