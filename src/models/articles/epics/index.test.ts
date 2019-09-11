import ArticlesApi from '@Services/$articles-api';
import { IArticlesResponse } from '@Services/$articles-api/types';
import { LOCATION_CHANGE } from 'connected-react-router';
import { ActionsObservable } from 'redux-observable';
import { of as of$, throwError } from 'rxjs';
import { getArticles } from './../actions';
import {
  fetchArticlesWhenRequested,
  requestArticlesWhenLocationChangedToHome,
} from './../epics';

describe('articles epic', () => {
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
