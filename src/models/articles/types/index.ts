import { IArticle } from '@Model/article/types';
import { ActionType } from 'typesafe-actions';
import * as actions from './../actions';

export interface IArticlesRequestPayload {
  sources: string[];
  sortBy: string;
  dateFrom: string;
  dateTo: string;
}

export type IArticlesReducer = IArticle[];
export type IArticlesPaginationReducer = number;

export type IAction = ActionType<typeof actions>;
