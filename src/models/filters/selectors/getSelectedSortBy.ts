import _Store from '@Store';
import { createSelector } from 'reselect';
import { IFiltersReducer, IFiltersSortBy } from './../types';
import get from './get';

const getSelectedSortBy = createSelector<
  _Store.IState,
  IFiltersReducer,
  IFiltersSortBy | undefined
>(
  [get],
  (filters) => filters.selectedSortBy,
);

export default getSelectedSortBy;
