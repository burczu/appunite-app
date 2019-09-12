import _Store from '@Store';
import { of as of$ } from 'rxjs';
import {
  filter as filter$,
  mergeMap as mergeMap$,
  withLatestFrom as withLatestFrom$,
} from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import {
  setCategory,
  setCategoryFilter,
  setDate,
  setDateFilter,
  setSortBy,
  setSortByFilter,
} from './../actions';
import getSelectedCategory from './../selectors/getSelectedCategory';
import getSelectedDate from './../selectors/getSelectedDate';
import getSelectedSortBy from './../selectors/getSelectedSortBy';

export const setCategoryWhenSelected: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(setCategoryFilter)),
    withLatestFrom$(state$),
    mergeMap$(([action, state]) => {
      const category = action.payload;
      const selectedCategory = getSelectedCategory(state);

      if (category === selectedCategory) {
        return of$(setCategory(undefined));
      }

      return of$(setCategory(category));
    }),
  );
};

export const setSortByWhenSelected: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(setSortByFilter)),
    withLatestFrom$(state$),
    mergeMap$(([action, state]) => {
      const sortBy = action.payload;
      const selectedSortBy = getSelectedSortBy(state);

      if (sortBy === selectedSortBy) {
        return of$(setSortBy(undefined));
      }

      return of$(setSortBy(sortBy));
    }),
  );
};

export const setDateWhenSelected: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(setDateFilter)),
    withLatestFrom$(state$),
    mergeMap$(([action, state]) => {
      const dateString = action.payload;
      const selectedDate = getSelectedDate(state);

      if (dateString === selectedDate) {
        return of$(setDate(undefined));
      }

      return of$(setDate(dateString));
    }),
  );
};
