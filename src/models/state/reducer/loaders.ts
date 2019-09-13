import { getType } from 'typesafe-actions';
import { setArticlesLoading, setSourcesLoading } from './../actions';
import { IAction, IStateLoadersReducer } from './../types';

const initialState: IStateLoadersReducer = {
  articlesLoading: false,
  sourcesLoading: false,
};

const loadersReducer = (
  state: IStateLoadersReducer = initialState,
  action: IAction,
): IStateLoadersReducer => {
  switch (action.type) {
    case getType(setArticlesLoading):
      return { ...state, articlesLoading: action.payload };
    case getType(setSourcesLoading):
      return { ...state, sourcesLoading: action.payload };
    default:
      return state;
  }
};

export default loadersReducer;
