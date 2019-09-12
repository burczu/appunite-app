import { createStandardAction } from 'typesafe-actions';
import { SET_CATEGORY_FILTER } from './../constants/constants';

export const setCategoryFilter = createStandardAction(SET_CATEGORY_FILTER)<
  string
>();
