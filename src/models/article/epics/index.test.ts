import { RELEVANCY, TODAY } from '@Model/filters/constants/constants';
import { IFiltersReducer } from '@Model/filters/types';
import { ISourcesReducer } from '@Model/sources/types';
import { LOCATION_CHANGE, push } from 'connected-react-router';
import md5 from 'md5';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import { setArticle } from './../actions';
import { IArticle } from './../types';
import { setArticlesWhenLocationChangedToArticles } from './index';

describe('article epic', () => {
  const getMockedState = (articles: IArticle[], router: any) => {
    const mockedFilters: IFiltersReducer = {
      selectedCategory: 'test',
      selectedDate: TODAY,
      selectedSortBy: RELEVANCY,
    };

    const mockedSources: ISourcesReducer = [
      {
        category: 'test',
        country: 'test',
        description: 'test',
        id: 'test-id',
        language: 'test',
        name: 'test',
        url: 'http://test.com',
      },
    ];

    return new StateObservable(new Subject(), {
      article: null,
      articles: {
        articles,
        pagination: 1,
      },
      filters: mockedFilters,
      router,
      sources: mockedSources,
    });
  };

  it('should set article based on hash passed as url parameter', (done) => {
    const testUrl = 'http://test';
    const testHash = md5(testUrl);

    const expectedArticle: IArticle = {
      author: 'test',
      content: 'test',
      description: 'test',
      publishedAt: '2019-01-01',
      source: {
        id: 'test-id',
        name: 'test',
        url: 'http://test.com',
      },
      title: 'test',
      url: testUrl,
      urlToImage: 'http://test.com/image.png',
    };

    const mockRouter = {
      action: 'REPLACE',
      location: {
        hash: '',
        pathname: `/articles/${testHash}`,
        search: '',
        state: null,
      },
    };

    const action$ = ActionsObservable.of({
      payload: {
        location: {
          pathname: `/articles/${testHash}`,
        },
      },
      type: LOCATION_CHANGE,
    });
    const state$ = getMockedState([expectedArticle], mockRouter);

    // @ts-ignore
    setArticlesWhenLocationChangedToArticles(action$, state$).subscribe(
      (action: any) => {
        expect(action).toEqual(setArticle(expectedArticle));
        done();
      },
    );
  });

  it('should redirect to home page if no article found', (done) => {
    const testUrl = 'http://test';
    const testHash = md5(testUrl);

    const mockRouter = {
      action: 'REPLACE',
      location: {
        hash: '',
        pathname: `/articles/${testHash}`,
        search: '',
        state: null,
      },
    };

    const action$ = ActionsObservable.of({
      payload: {
        location: {
          pathname: `/articles/${testHash}`,
        },
      },
      type: LOCATION_CHANGE,
    });
    const state$ = getMockedState([], mockRouter);

    // @ts-ignore
    setArticlesWhenLocationChangedToArticles(action$, state$).subscribe(
      (action: any) => {
        expect(action).toEqual(push('/'));
        done();
      },
    );
  });
});
