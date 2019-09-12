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
import { getArticles } from './../actions';
import {
  fetchArticlesWhenRequested,
  requestArticlesWhenFiltersChanged,
  requestArticlesWhenLocationChangedToHome,
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
    requestArticlesWhenLocationChangedToHome(action$).subscribe((action) => {
      expect(action).toEqual(expected);
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

    const action$ = ActionsObservable.of(
      getArticles.request({
        dateFrom: '',
        dateTo: '',
        sortBy: '',
        sources: [],
      }),
    );
    const expected = getArticles.success(response.articles);

    fetchArticlesWhenRequested(
      action$,
      // @ts-ignore
      {},
      { articlesApi: ArticlesApi },
      // @ts-ignore
    ).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });

  it('should send correct action when failure', (done) => {
    const error = new Error('test message');

    jest
      .spyOn(ArticlesApi, 'getArticles')
      // @ts-ignore
      .mockImplementation(() => throwError(error));

    const action$ = ActionsObservable.of(
      getArticles.request({
        dateFrom: '',
        dateTo: '',
        sortBy: '',
        sources: [],
      }),
    );
    const expected = getArticles.failure(error);

    fetchArticlesWhenRequested(
      action$,
      // @ts-ignore
      {},
      { articlesApi: ArticlesApi },
      // @ts-ignore
    ).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });
});
