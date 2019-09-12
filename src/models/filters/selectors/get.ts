import _Store from '@Store';
import { Selector } from 'reselect';
import { IFiltersReducer } from './../types';

const get: Selector<_Store.IState, IFiltersReducer> = (state) => state.filters;

export default get;
