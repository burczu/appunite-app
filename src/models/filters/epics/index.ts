import { resetArticles, setPagination } from '@Model/articles/actions';
import _Store from '@Store';
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

      const common = [setPagination(1), resetArticles()];

      if (category === selectedCategory) {
        return [...common, setCategory(undefined)];
      }

      return [...common, setCategory(category)];
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

      const common = [setPagination(1), resetArticles()];

      if (sortBy === selectedSortBy) {
        return [...common, setSortBy(undefined)];
      }

      return [...common, setSortBy(sortBy)];
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

      const common = [setPagination(1), resetArticles()];

      if (dateString === selectedDate) {
        return [...common, setDate(undefined)];
      }

      return [...common, setDate(dateString)];
    }),
  );
};
