import { createStandardAction } from 'typesafe-actions';
import {
  _SET_FILTER,
  _SET_SORT_BY,
  SET_CATEGORY_FILTER,
  SET_SORT_BY_FILTER,
} from './../constants/actions';
import { IFiltersSortBy } from './../types';

export const setCategoryFilter = createStandardAction(SET_CATEGORY_FILTER)<
  string
>();

export const setSortByFilter = createStandardAction(SET_SORT_BY_FILTER)<
  IFiltersSortBy
>();

export const setFilter = createStandardAction(_SET_FILTER)<
  string | undefined
>();

export const setSortBy = createStandardAction(_SET_SORT_BY)<
  IFiltersSortBy | undefined
>();
