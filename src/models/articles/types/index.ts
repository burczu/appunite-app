import { ActionType } from 'typesafe-actions';
import * as actions from './../actions';

export interface IArticleSource {
  id: string | null;
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

export interface IArticlesRequestPayload {
  sources: string[];
  sortBy: string;
  dateFrom: string;
  dateTo: string;
}

export type IArticlesReducer = IArticle[];

export type IAction = ActionType<typeof actions>;
