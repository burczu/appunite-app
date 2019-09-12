import { setCategory, setDate, setSortBy } from '@Model/filters/actions';
import { getType } from 'typesafe-actions';
import { IAction, IFiltersReducer } from './../types';

const initialState: IFiltersReducer = {
  selectedCategory: undefined,
  selectedDate: undefined,
  selectedSortBy: undefined,
};

const sourcesReducer = (
  state: IFiltersReducer = initialState,
  action: IAction,
): IFiltersReducer => {
  switch (action.type) {
    case getType(setCategory):
      return { ...state, selectedCategory: action.payload };
    case getType(setSortBy):
      return { ...state, selectedSortBy: action.payload };
    case getType(setDate):
      return { ...state, selectedDate: action.payload };
    default:
      return state;
  }
};

export default sourcesReducer;
