import {
  clearFilters,
  setCategory,
  setDate,
  setSortBy,
} from '@Model/filters/actions';
import { POPULARITY, TODAY } from '@Model/filters/constants/constants';
import {
  IFiltersDates,
  IFiltersReducer,
  IFiltersSortBy,
} from '@Model/filters/types';
import { ISourcesReducer } from '@Model/sources/types';
import ArticlesApi from '@Services/$articles-api';
import { IArticlesResponse } from '@Services/$articles-api/types';
import { LOCATION_CHANGE } from 'connected-react-router';
import endOfToday from 'date-fns/endOfToday';
import startOfToday from 'date-fns/startOfToday';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { of as of$, Subject, throwError } from 'rxjs';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toArray';
import {
  getArticles,
  getMore,
  resetArticles,
  setPagination,
} from './../actions';
import {
  fetchArticlesWhenRequested,
  requestArticlesWhenFiltersChanged,
  requestArticlesWhenLocationChangedToHome,
  requestForArticlesOnGetMore,
  resetStoreWhenFiltersClear,
} from './../epics';

describe('articles epic', () => {
  const getMockedState = (
    expectedSource: string,
    sortBy: IFiltersSortBy,
    date: IFiltersDates,
  ) => {
    const mockedFilters: IFiltersReducer = {
      selectedCategory: 'test',
      selectedDate: date,
      selectedSortBy: sortBy,
    };

    const mockedSources: ISourcesReducer = [
      {
        category: 'test',
        country: 'test',
        description: 'test',
        id: expectedSource,
        language: 'test',
        name: 'test',
        url: 'http://test.com',
      },
    ];

    return new StateObservable(new Subject(), {
      articles: {
        articles: [],
        pagination: 1,
      },
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
      sources: mockedSources,
    });
  };

  it('should request for getting articles when location changes to home', (done) => {
    const action$ = ActionsObservable.of({
      payload: {
        location: {
          pathname: '/',
        },
      },
      type: LOCATION_CHANGE,
    });

    const expected = getArticles.request({
      dateFrom: '',
      dateTo: '',
      sortBy: '',
      sources: [],
    });

    // @ts-ignore
    requestArticlesWhenLocationChangedToHome(action$)
      .take(3)
      .toArray()
      .subscribe((actions: any) => {
        expect(actions[0]).toEqual(setPagination(1));
        expect(actions[1]).toEqual(resetArticles());
        expect(actions[2]).toEqual(expected);
        done();
      });
  });

  it('should request for getting articles when category filter changes', (done) => {
    const expectedSource = 'test-id';

    const state$ = getMockedState(expectedSource, POPULARITY, TODAY);
    const action$ = ActionsObservable.of(setCategory('test'));

    const expected = getArticles.request({
      dateFrom: startOfToday().toISOString(),
      dateTo: endOfToday().toISOString(),
      sortBy: POPULARITY,
      sources: [expectedSource],
    });

    // @ts-ignore
    requestArticlesWhenFiltersChanged(action$, state$).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });

  it('should request for getting articles when sortBy filter changes', (done) => {
    const expectedSource = 'test-id';

    const state$ = getMockedState(expectedSource, POPULARITY, TODAY);
    const action$ = ActionsObservable.of(setSortBy(POPULARITY));

    const expected = getArticles.request({
      dateFrom: startOfToday().toISOString(),
      dateTo: endOfToday().toISOString(),
      sortBy: POPULARITY,
      sources: [expectedSource],
    });

    // @ts-ignore
    requestArticlesWhenFiltersChanged(action$, state$).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });

  it('should request for getting articles when dates filter changes', (done) => {
    const expectedSource = 'test-id';

    const state$ = getMockedState(expectedSource, POPULARITY, TODAY);
    const action$ = ActionsObservable.of(setDate(TODAY));

    const expected = getArticles.request({
      dateFrom: startOfToday().toISOString(),
      dateTo: endOfToday().toISOString(),
      sortBy: POPULARITY,
      sources: [expectedSource],
    });

    // @ts-ignore
    requestArticlesWhenFiltersChanged(action$, state$).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });

  it('should request for getting articles when dates filter changes', (done) => {
    const expectedSource = 'test-id';

    const state$ = getMockedState(expectedSource, POPULARITY, TODAY);
    const action$ = ActionsObservable.of(clearFilters());

    const expected = getArticles.request({
      dateFrom: startOfToday().toISOString(),
      dateTo: endOfToday().toISOString(),
      sortBy: POPULARITY,
      sources: [expectedSource],
    });

    // @ts-ignore
    requestArticlesWhenFiltersChanged(action$, state$).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });

  it('should send correct action when success', (done) => {
    const expectedSource = 'test-id';
    const response: IArticlesResponse = {
      articles: [
        {
          author: 'test',
          content: 'test',
          description: 'test',
          publishedAt: '2019-01-01',
          source: {
            id: 'test',
            name: 'test',
          },
          title: 'test',
          url: 'http://test.com',
          urlToImage: 'http://test.com/image.png',
        },
      ],
      status: 'ok',
      totalResults: 100,
    };

    jest
      .spyOn(ArticlesApi, 'getArticles')
      // @ts-ignore
      .mockImplementation(() => of$(response));

    const state$ = getMockedState(expectedSource, POPULARITY, TODAY);
    const action$ = ActionsObservable.of(
      getArticles.request({
        dateFrom: startOfToday().toISOString(),
        dateTo: endOfToday().toISOString(),
        sortBy: POPULARITY,
        sources: [expectedSource],
      }),
    );
    const expected = getArticles.success(response.articles);

    fetchArticlesWhenRequested(
      action$,
      // @ts-ignore
      state$,
      { articlesApi: ArticlesApi },
      // @ts-ignore
    ).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });

  it('should send correct action when failure', (done) => {
    const error = new Error('test message');
    const expectedSource = 'test-id';

    jest
      .spyOn(ArticlesApi, 'getArticles')
      // @ts-ignore
      .mockImplementation(() => throwError(error));

    const state$ = getMockedState(expectedSource, POPULARITY, TODAY);
    const action$ = ActionsObservable.of(
      getArticles.request({
        dateFrom: startOfToday().toISOString(),
        dateTo: endOfToday().toISOString(),
        sortBy: POPULARITY,
        sources: [expectedSource],
      }),
    );
    const expected = getArticles.failure(error);

    fetchArticlesWhenRequested(
      action$,
      // @ts-ignore
      state$,
      { articlesApi: ArticlesApi },
      // @ts-ignore
    ).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });

  it('should set pagination when get more requested', (done) => {
    const expectedSource = 'test-id';

    const state$ = getMockedState(expectedSource, POPULARITY, TODAY);
    const action$ = ActionsObservable.of(getMore());

    const expected = setPagination(2);

    // @ts-ignore
    requestForArticlesOnGetMore(action$, state$).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });

  it('should reset pagination and articles on clear filters', (done) => {
    const action$ = ActionsObservable.of(clearFilters());

    // @ts-ignore
    resetStoreWhenFiltersClear(action$)
      .take(2)
      .toArray()
      .subscribe((actions: any) => {
        expect(actions[0]).toEqual(setPagination(1));
        expect(actions[1]).toEqual(resetArticles());
        done();
      });
  });
});
