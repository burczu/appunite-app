import { ActionType, StateType } from 'typesafe-actions';
import * as actions from './../actions';
import reducer from './../reducer';

export interface ISource {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export type ISourcesReducer = ISource[];

export type IState = StateType<typeof reducer>;
export type IAction = ActionType<typeof actions>;
