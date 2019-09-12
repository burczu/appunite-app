import { resetArticles, setPagination } from '@Model/articles/actions';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toArray';
import {
  setCategory,
  setCategoryFilter,
  setDate,
  setDateFilter,
  setSortBy,
  setSortByFilter,
} from './../actions';
import { RELEVANCY, TODAY } from './../constants/constants';
import { IFiltersReducer } from './../types';
import {
  setCategoryWhenSelected,
  setDateWhenSelected,
  setSortByWhenSelected,
} from './index';

describe('filters epic', () => {
  const mockedFilters: IFiltersReducer = {
    selectedCategory: undefined,
    selectedDate: undefined,
    selectedSortBy: undefined,
  };

  const state$ = new StateObservable(new Subject(), {
    articles: [],
    filters: mockedFilters,
    router: {
      action: 'REPLACE',
      location: {
        hash: '',
        pathname: '/',
        search: '',
        state: null,
      },
    },
    sources: [],
  });

  it('should set category filter when expected', (done) => {
    const testPayload = 'test';
    const action$ = ActionsObservable.of(setCategoryFilter(testPayload));
    const expected = setCategory(testPayload);

    // @ts-ignore
    setCategoryWhenSelected(action$, state$)
      .take(3)
      .toArray()
      .subscribe((action: any) => {
        expect(action[0]).toEqual(setPagination(1));
        expect(action[1]).toEqual(resetArticles());
        expect(action[2]).toEqual(expected);
        done();
      });
  });

  it('should set sort by filter when expected', (done) => {
    const testPayload = RELEVANCY;
    const action$ = ActionsObservable.of(setSortByFilter(testPayload));
    const expected = setSortBy(testPayload);

    // @ts-ignore
    setSortByWhenSelected(action$, state$)
      .take(3)
      .toArray()
      .subscribe((action: any) => {
        expect(action[0]).toEqual(setPagination(1));
        expect(action[1]).toEqual(resetArticles());
        expect(action[2]).toEqual(expected);
        done();
      });
  });

  it('should set date filter when expected', (done) => {
    const testPayload = TODAY;
    const action$ = ActionsObservable.of(setDateFilter(testPayload));
    const expected = setDate(testPayload);

    // @ts-ignore
    setDateWhenSelected(action$, state$)
      .take(3)
      .toArray()
      .subscribe((action: any) => {
        expect(action[0]).toEqual(setPagination(1));
        expect(action[1]).toEqual(resetArticles());
        expect(action[2]).toEqual(expected);
        done();
      });
  });
});
