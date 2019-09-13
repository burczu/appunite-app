import { getType } from 'typesafe-actions';
import { setArticlesError, setSourcesError } from './../actions';
import { IAction, IStateErrorsReducer } from './../types';

const initialState: IStateErrorsReducer = {
  articlesError: false,
  sourcesError: false,
};

const errorsReducer = (
  state: IStateErrorsReducer = initialState,
  action: IAction,
): IStateErrorsReducer => {
  switch (action.type) {
    case getType(setArticlesError):
      return { ...state, articlesError: action.payload };
    case getType(setSourcesError):
      return { ...state, sourcesError: action.payload };
    default:
      return state;
  }
};

export default errorsReducer;
