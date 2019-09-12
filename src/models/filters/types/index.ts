import { ActionType } from 'typesafe-actions';
import * as actions from './../actions';

export type IFiltersSortBy = 'relevancy' | 'popularity' | 'publishedAt';

export interface IFiltersReducer {
  selectedCategory: string | undefined;
  selectedSortBy: IFiltersSortBy | undefined;
}

export type IAction = ActionType<typeof actions>;
