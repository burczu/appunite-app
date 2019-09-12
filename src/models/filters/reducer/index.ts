import { setCategoryFilter } from '@Model/filters/actions';
import { getType } from 'typesafe-actions';
import { IAction, IFiltersReducer } from './../types';

const initialState: IFiltersReducer = {
  selectedCategory: null,
};

const sourcesReducer = (
  state: IFiltersReducer = initialState,
  action: IAction,
): IFiltersReducer => {
  switch (action.type) {
    case getType(setCategoryFilter):
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};

export default sourcesReducer;
