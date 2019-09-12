import { ActionType } from 'typesafe-actions';
import * as actions from './../actions';

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

export type IAction = ActionType<typeof actions>;
