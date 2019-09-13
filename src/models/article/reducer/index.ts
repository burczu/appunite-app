import { setArticle } from '@Model/article/actions';
import { getType } from 'typesafe-actions';
import { IAction, IArticleReducer } from './../types';

const initialState: IArticleReducer = null;

const articlesReducer = (
  state: IArticleReducer = initialState,
  action: IAction,
): IArticleReducer => {
  switch (action.type) {
    case getType(setArticle):
      return action.payload;
    default:
      return state;
  }
};

export default articlesReducer;
