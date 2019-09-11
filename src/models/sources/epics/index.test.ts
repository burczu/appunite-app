import SourcesApi from '@Services/$sources-api';
import { ISourcesResponse } from '@Services/$sources-api/types';
import { LOCATION_CHANGE } from 'connected-react-router';
import { ActionsObservable } from 'redux-observable';
import { of as of$, throwError } from 'rxjs';
import { getSources } from './../actions';
import {
  fetchSourcesWhenRequested,
  requestSourcesWhenLocationChangedToHome,
} from './index';

describe('sources epic', () => {
  it('should request for getting sources when location changes to home', (done) => {
    const action$ = ActionsObservable.of({
      payload: {
        location: {
          pathname: '/',
        },
      },
      type: LOCATION_CHANGE,
    });

    // @ts-ignore
    requestSourcesWhenLocationChangedToHome(action$).subscribe((action) => {
      expect(action).toEqual(getSources.request());
      done();
    });
  });

  it('should send correct action when success', (done) => {
    const response: ISourcesResponse = {
      sources: [
        {
          category: 'test',
          country: 'test',
          description: 'test',
          id: 'test',
          language: 'test',
          name: 'test',
          url: 'http://test.com',
        },
      ],
      status: 'ok',
    };

    jest
      .spyOn(SourcesApi, 'getSources')
      // @ts-ignore
      .mockImplementation(() => of$(response));

    const action$ = ActionsObservable.of(getSources.request());
    const expected = getSources.success(response.sources);

    fetchSourcesWhenRequested(
      action$,
      // @ts-ignore
      {},
      { sourcesApi: SourcesApi },
      // @ts-ignore
    ).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });

  it('should send correct action when failure', (done) => {
    const error = new Error('test message');

    jest
      .spyOn(SourcesApi, 'getSources')
      // @ts-ignore
      .mockImplementation(() => throwError(error));

    const action$ = ActionsObservable.of(getSources.request());
    const expected = getSources.failure(error);

    fetchSourcesWhenRequested(
      action$,
      // @ts-ignore
      {},
      { sourcesApi: SourcesApi },
      // @ts-ignore
    ).subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });
});
