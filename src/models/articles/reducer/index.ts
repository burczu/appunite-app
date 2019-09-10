import { IAction, IArticlesReducer } from './../types';

const initialState: IArticlesReducer = [];

const articlesReducer = (
  state: IArticlesReducer = initialState,
  action: IAction,
): IArticlesReducer => {
  switch (action.type) {
    default:
      return state;
  }
};

export default articlesReducer;
