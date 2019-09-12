import _Store from '@Store';
import { Selector } from 'reselect';
import { IArticlesReducer } from './../types';

const get: Selector<_Store.IState, IArticlesReducer> = (state) =>
  state.articles;

export default get;
