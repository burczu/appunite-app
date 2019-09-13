import { get as getSources } from '@Model/sources/selectors';
import { ISource, ISourcesReducer } from '@Model/sources/types';
import _Store from '@Store';
import { createSelector } from 'reselect';
import { IArticle, IArticlesReducer } from './../types';
import getArticles from './getArticles';

const getArticlesWithSourceUrl = createSelector<
  _Store.IState,
  IArticlesReducer,
  ISourcesReducer,
  IArticle[]
>(
  [getArticles, getSources],
  (articles, sources) => {
    return articles.map((article) => {
      const foundSource = sources.find(
        (source: ISource) => source.id === article.source.id,
      );

      return {
        ...article,
        source: {
          ...article.source,
          url: foundSource && foundSource.url,
        },
      };
    });
  },
);

export default getArticlesWithSourceUrl;
