import { getType } from 'typesafe-actions';
import { getArticles, resetArticles } from './../actions';
import { IAction, IArticlesReducer } from './../types';

const initialState: IArticlesReducer = [];

const articlesReducer = (
  state: IArticlesReducer = initialState,
  action: IAction,
): IArticlesReducer => {
  switch (action.type) {
    case getType(getArticles.success):
      return action.payload;
    case getType(resetArticles):
      return initialState;
    default:
      return state;
  }
};

export default articlesReducer;
