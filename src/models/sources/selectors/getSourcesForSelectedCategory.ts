import { getSelectedCategory } from '@Model/filters/selectors';
import _Store from '@Store';
import { createSelector } from 'reselect';
import { ISourcesReducer } from './../types';
import get from './get';

const getSourcesForSelectedCategory = createSelector<
  _Store.IState,
  ISourcesReducer,
  string | undefined,
  string[]
>(
  [get, getSelectedCategory],
  (sources, category) =>
    sources
      .filter((source) => source.category === category)
      .map((source) => source.id),
);

export default getSourcesForSelectedCategory;
