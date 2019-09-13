import _Store from '@Store';
import { Selector } from 'reselect';
import { IStateLoadersReducer } from './../types';

const get: Selector<_Store.IState, IStateLoadersReducer> = (state) =>
  state.state.loaders;

export default get;
