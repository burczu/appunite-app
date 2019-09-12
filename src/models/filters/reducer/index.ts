import { setFilter, setSortBy } from '@Model/filters/actions';
import { getType } from 'typesafe-actions';
import { IAction, IFiltersReducer } from './../types';

const initialState: IFiltersReducer = {
  selectedCategory: undefined,
  selectedSortBy: undefined,
};

const sourcesReducer = (
  state: IFiltersReducer = initialState,
  action: IAction,
): IFiltersReducer => {
  switch (action.type) {
    case getType(setFilter):
      return { ...state, selectedCategory: action.payload };
    case getType(setSortBy):
      return { ...state, selectedSortBy: action.payload };
    default:
      return state;
  }
};

export default sourcesReducer;
