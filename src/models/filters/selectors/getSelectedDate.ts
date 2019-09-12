import _Store from '@Store';
import { createSelector } from 'reselect';
import { IFiltersDates, IFiltersReducer } from './../types';
import get from './get';

const getSelectedDate = createSelector<
  _Store.IState,
  IFiltersReducer,
  IFiltersDates | undefined
>(
  [get],
  (filters) => filters.selectedDate,
);

export default getSelectedDate;
