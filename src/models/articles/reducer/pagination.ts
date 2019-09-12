import { setPagination } from '@Model/articles/actions';
import { getType } from 'typesafe-actions';
import { IAction, IArticlesPaginationReducer } from './../types';

const initialState: IArticlesPaginationReducer = 1;

const articlesReducer = (
  state: IArticlesPaginationReducer = initialState,
  action: IAction,
): IArticlesPaginationReducer => {
  switch (action.type) {
    case getType(setPagination):
      return action.payload;
    default:
      return state;
  }
};

export default articlesReducer;
