import _Store from '@Store';
import { Selector } from 'reselect';
import { IArticlesPaginationReducer } from './../types';

const getArticles: Selector<_Store.IState, IArticlesPaginationReducer> = (
  state,
) => state.articles.pagination;

export default getArticles;
