import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import { setCategoryFilter, setFilter } from './../actions';
import { IFiltersReducer } from './../types';
import { setFiltersWhenSelected } from './index';

describe('filters epic', () => {
  it('should set filter category when expected', (done) => {
    const testPayload = 'test';
    const mockedFilters: IFiltersReducer = {
      selectedCategory: undefined,
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

    const expected = setFilter(testPayload);

    // @ts-ignore
    setFiltersWhenSelected(action$, state$).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });
});
