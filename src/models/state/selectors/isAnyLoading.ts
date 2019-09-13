import _Store from '@Store';
import { createSelector } from 'reselect';
import { IStateLoadersReducer } from './../types';
import getLoaders from './getLoaders';

const getCategories = createSelector<
  _Store.IState,
  IStateLoadersReducer,
  boolean
>(
  [getLoaders],
  (loaders) => loaders.articlesLoading || loaders.sourcesLoading,
);

export default getCategories;
