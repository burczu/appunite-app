import _Store from '@Store';
import { createSelector } from 'reselect';
import { IStateErrorsReducer } from './../types';
import getErrors from './getErrors';

const isAnyError = createSelector<_Store.IState, IStateErrorsReducer, boolean>(
  [getErrors],
  (errors) => errors.articlesError || errors.sourcesError,
);

export default isAnyError;
