import { ActionType, StateType } from 'typesafe-actions';
import * as actions from './../actions';
import reducer from './../reducer';

export interface IArticle {
  id: number;
}

export type IArticlesReducer = IArticle[];

export type IState = StateType<typeof reducer>;
export type IAction = ActionType<typeof actions>;
