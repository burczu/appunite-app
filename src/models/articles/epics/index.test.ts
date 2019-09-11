import { LOCATION_CHANGE } from 'connected-react-router';
import { ActionsObservable } from 'redux-observable';
import { getArticles } from './../actions';
import { requestArticlesWhenLocationChangedToHome } from './../epics';

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
});
