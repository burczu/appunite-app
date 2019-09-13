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
    default:
      return state;
  }
};

export default loadersReducer;
