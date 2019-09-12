import { ActionType } from 'typesafe-actions';
import * as actions from './../actions';

export type IFiltersSortBy = 'relevancy' | 'popularity' | 'publishedAt';
export type IFiltersDates = 'this month' | 'this week' | 'today';

export interface IFiltersReducer {
  selectedCategory: string | undefined;
  selectedDate: IFiltersDates | undefined;
  selectedSortBy: IFiltersSortBy | undefined;
}

export interface IFiltersSelectedDateFormatted {
  from: string;
  to: string;
}

export type IAction = ActionType<typeof actions>;
