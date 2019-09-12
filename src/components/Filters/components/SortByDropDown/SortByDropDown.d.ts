import { IFiltersSortBy } from '@Model/filters/types';

export interface ISortByDropDownFromState {
  sortBys: IFiltersSortBy[];
  selectedSortBy: IFiltersSortBy | undefined;
}

export interface ISortByDropDownFromDispatch {
  selectSortBy: (value: IFiltersSortBy) => void;
}

export type ISortByDropDownProps = ISortByDropDownFromDispatch &
  ISortByDropDownFromState;
