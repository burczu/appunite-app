import { getType } from 'typesafe-actions';
import { getSources } from './../actions';
import { IAction, ISourcesReducer } from './../types';

const initialState: ISourcesReducer = [];

const sourcesReducer = (
  state: ISourcesReducer = initialState,
  action: IAction,
): ISourcesReducer => {
  switch (action.type) {
    case getType(getSources.success):
      return action.payload;
    default:
      return state;
  }
};

export default sourcesReducer;
