import { createStandardAction } from 'typesafe-actions';
import { _SET_FILTER, SET_CATEGORY_FILTER } from './../constants/constants';

export const setCategoryFilter = createStandardAction(SET_CATEGORY_FILTER)<
  string
>();

export const setFilter = createStandardAction(_SET_FILTER)<
  string | undefined
>();
