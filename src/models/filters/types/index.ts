import { ActionType } from 'typesafe-actions';
import * as actions from './../actions';

export interface IFiltersReducer {
  selectedCategory: string | undefined;
}

export type IAction = ActionType<typeof actions>;
