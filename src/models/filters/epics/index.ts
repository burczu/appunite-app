import _Store from '@Store';
import { of as of$ } from 'rxjs';
import {
  filter as filter$,
  mergeMap as mergeMap$,
  withLatestFrom as withLatestFrom$,
} from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { setCategoryFilter, setFilter } from './../actions';
import getSelectedCategory from './../selectors/getSelectedCategory';

export const setFiltersWhenSelected: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(setCategoryFilter)),
    withLatestFrom$(state$),
    mergeMap$(([action, state]) => {
      const category = action.payload;
      const selectedCategory = getSelectedCategory(state);

      if (category === selectedCategory) {
        return of$(setFilter(undefined));
      }

      return of$(setFilter(category));
    }),
  );
};
