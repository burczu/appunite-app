import _Store from '@Store';
import { createSelector } from 'reselect';
import { ISourcesReducer } from './../types';
import get from './get';

const getCategories = createSelector<_Store.IState, ISourcesReducer, string[]>(
  [get],
  (sources) => {
    const result: string[] = [];

    sources.forEach((source) => {
      const { category } = source;
      const found = result.find(
        (item) => item.toLowerCase() === category.toLowerCase(),
      );

      if (!found) {
        result.push(category);
      }
    });

    return result;
  },
);

export default getCategories;
