import { ActionType } from 'typesafe-actions';
import * as actions from './../actions';

export interface IStateLoadersReducer {
  articlesLoading: boolean;
  sourcesLoading: boolean;
}

export interface IStateErrorsReducer {
  articlesError: boolean;
  sourcesError: boolean;
}

export type IAction = ActionType<typeof actions>;
