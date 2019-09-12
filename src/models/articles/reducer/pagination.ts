import { IAction, IArticlesPaginationReducer } from './../types';

const initialState: IArticlesPaginationReducer = 1;

const articlesReducer = (
  state: IArticlesPaginationReducer = initialState,
  action: IAction,
): IArticlesPaginationReducer => {
  switch (action.type) {
    default:
      return state;
  }
};

export default articlesReducer;
