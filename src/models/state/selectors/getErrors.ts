import _Store from '@Store';
import { Selector } from 'reselect';
import { IStateErrorsReducer } from './../types';

const getErrors: Selector<_Store.IState, IStateErrorsReducer> = (state) =>
  state.state.errors;

export default getErrors;
