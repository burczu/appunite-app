import _Store from '@Store';
import { createSelector } from 'reselect';
import { IFiltersReducer } from './../types';
import get from './get';

const getSelectedCategory = createSelector<
  _Store.IState,
  IFiltersReducer,
  string | undefined
>(
  [get],
  (filters) => filters.selectedCategory,
);

export default getSelectedCategory;
