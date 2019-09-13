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
    default:
      return state;
  }
};

export default errorsReducer;
