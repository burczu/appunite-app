import _Store from '@Store';
import { Selector } from 'reselect';
import { IArticleReducer } from './../types';

const get: Selector<_Store.IState, IArticleReducer> = (state) => state.article;

export default get;
