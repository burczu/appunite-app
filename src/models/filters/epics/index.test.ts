import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import {
  setCategory,
  setCategoryFilter,
  setSortBy,
  setSortByFilter,
} from './../actions';
import { RELEVANCY } from './../constants/constants';
import { IFiltersReducer } from './../types';
import { setCategoryWhenSelected, setSortByWhenSelected } from './index';

describe('filters epic', () => {
  it('should set category filter when expected', (done) => {
    const testPayload = 'test';
    const mockedFilters: IFiltersReducer = {
      selectedCategory: undefined,
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

    const action$ = ActionsObservable.of(setCategoryFilter(testPayload));

    const expected = setCategory(testPayload);

    // @ts-ignore
    setCategoryWhenSelected(action$, state$).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });

  it('should set sort by filter when expected', (done) => {
    const testPayload = RELEVANCY;
    const mockedFilters: IFiltersReducer = {
      selectedCategory: undefined,
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

    const action$ = ActionsObservable.of(setSortByFilter(testPayload));

    const expected = setSortBy(testPayload);

    // @ts-ignore
    setSortByWhenSelected(action$, state$).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });
});
