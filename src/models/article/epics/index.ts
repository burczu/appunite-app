import routes from '@/routes/routes';
import { getArticlesWithSourceUrl } from '@Model/articles/selectors';
import _Store from '@Store';
import {
  createMatchSelector,
  LOCATION_CHANGE,
  push,
} from 'connected-react-router';
import md5 from 'md5';
import { matchPath } from 'react-router';
import { of as of$ } from 'rxjs';
import {
  filter as filter$,
  mergeMap as mergeMap$,
  withLatestFrom as withLatestFrom$,
} from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import { setArticle } from './../actions';

export const setArticlesWhenLocationChangedToArticles: _Store.IEpic = (
  action$,
  state$,
) => {
  return action$.pipe(
    filter$(isOfType(LOCATION_CHANGE)),
    filter$(
      (action) =>
        !!matchPath(action.payload.location.pathname, routes.articles),
    ),
    withLatestFrom$(state$),
    mergeMap$(([_, state]) => {
      const articles = getArticlesWithSourceUrl(state);
      const matchSelector = createMatchSelector(routes.articles);
      const match = matchSelector(state);
      if (match && match.params) {
        const { hash } = match.params as any;

        const article = articles.find((item) => md5(item.url) === hash);

        if (article) {
          return of$(setArticle(article));
        }
      }

      return of$(push(routes.index));
    }),
  );
};
