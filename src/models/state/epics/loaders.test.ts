import { getArticles } from '@Model/articles/actions';
import { getSources } from '@Model/sources/actions';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toArray';
import { setArticlesLoading, setSourcesLoading } from './../actions';
import {
  setArticlesLoaderOnArticlesGetFinished,
  setArticlesLoaderOnArticlesRequest,
  setSourcesLoaderOnSourcesGetFinished,
  setSourcesLoaderOnSourcesRequest,
} from './../epics';

describe('loaders state epic', () => {
  const getArticlesPayload = {
    dateFrom: '',
    dateTo: '',
    sortBy: '',
    sources: [],
  };

  it('should set articles loading on articles get request', (done) => {
    const action$ = ActionsObservable.of(
      getArticles.request(getArticlesPayload),
    );

    // @ts-ignore
    setArticlesLoaderOnArticlesRequest(action$).subscribe((action: any) => {
      expect(action).toEqual(setArticlesLoading(true));
      done();
    });
  });

  it('should set articles loading on articles get success', (done) => {
    const action$ = ActionsObservable.of(getArticles.success([]));

    // @ts-ignore
    setArticlesLoaderOnArticlesGetFinished(action$).subscribe((action: any) => {
      expect(action).toEqual(setArticlesLoading(false));
      done();
    });
  });

  it('should set articles loading on articles get failure', (done) => {
    const action$ = ActionsObservable.of(
      getArticles.failure(new Error('test error')),
    );

    // @ts-ignore
    setArticlesLoaderOnArticlesGetFinished(action$).subscribe((action: any) => {
      expect(action).toEqual(setArticlesLoading(false));
      done();
    });
  });

  it('should set sources loading on sources get request', (done) => {
    const action$ = ActionsObservable.of(getSources.request());

    // @ts-ignore
    setSourcesLoaderOnSourcesRequest(action$).subscribe((action: any) => {
      expect(action).toEqual(setSourcesLoading(true));
      done();
    });
  });

  it('should set sources loading on sources get success', (done) => {
    const action$ = ActionsObservable.of(getSources.success([]));

    // @ts-ignore
    setSourcesLoaderOnSourcesGetFinished(action$).subscribe((action: any) => {
      expect(action).toEqual(setSourcesLoading(false));
      done();
    });
  });

  it('should set sources loading on sources get failure', (done) => {
    const action$ = ActionsObservable.of(
      getSources.failure(new Error('test error')),
    );

    // @ts-ignore
    setSourcesLoaderOnSourcesGetFinished(action$).subscribe((action: any) => {
      expect(action).toEqual(setSourcesLoading(false));
      done();
    });
  });
});
