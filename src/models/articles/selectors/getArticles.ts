import _Store from '@Store';
import { Selector } from 'reselect';
import { IArticlesReducer } from './../types';

const getArticles: Selector<_Store.IState, IArticlesReducer> = (state) =>
  state.articles.articles;

export default getArticles;
