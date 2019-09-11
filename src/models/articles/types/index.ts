import { ActionType, StateType } from 'typesafe-actions';
import * as actions from './../actions';
import reducer from './../reducer';

export interface IArticleSource {
  id: number | null;
  name: string;
}

export interface IArticle {
  author: string;
  content: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: IArticleSource;
  title: string;
}

export type IArticlesReducer = IArticle[];

export type IState = StateType<typeof reducer>;
export type IAction = ActionType<typeof actions>;
