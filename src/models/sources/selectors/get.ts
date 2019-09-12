import _Store from '@Store';
import { Selector } from 'reselect';
import { ISourcesReducer } from './../types';

const get: Selector<_Store.IState, ISourcesReducer> = (state) => state.sources;

export default get;
