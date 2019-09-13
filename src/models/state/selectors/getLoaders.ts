import _Store from '@Store';
import { Selector } from 'reselect';
import { IStateLoadersReducer } from './../types';

const getLoaders: Selector<_Store.IState, IStateLoadersReducer> = (state) =>
  state.state.loaders;

export default getLoaders;
