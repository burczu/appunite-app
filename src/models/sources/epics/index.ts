import { ISourcesResponse } from '@Services/$sources-api/types';
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
} from 'rxjs/operators';
import { isActionOf, isOfType } from 'typesafe-actions';
import { getSources } from './../actions';

export const requestSourcesWhenLocationChangedToHome: _Store.IEpic = (
  action$,
) => {
  return action$.pipe(
    filter$(isOfType(LOCATION_CHANGE)),
    filter$((action) => action.payload.location.pathname === '/'),
    mergeMap$(() => {
      return of$(getSources.request());
    }),
  );
};

export const fetchSourcesWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { sourcesApi },
) => {
  return action$.pipe(
    filter$(isActionOf(getSources.request)),
    mergeMap$(() => {
      return from$(sourcesApi.getSources()).pipe(
        map$((data: ISourcesResponse) => {
          return getSources.success(data.sources);
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => sourcesApi.cancelSources()),
          ),
        ),
        catchError$((error: Error) => of$(getSources.failure(error))),
      );
    }),
  );
};
