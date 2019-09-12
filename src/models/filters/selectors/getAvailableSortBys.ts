import { POPULARITY, PUBLISHED_AT, RELEVANCY } from './../constants/constants';
import { IFiltersSortBy } from './../types';

const getAvailableSortBys = (): IFiltersSortBy[] => [
  POPULARITY,
  PUBLISHED_AT,
  RELEVANCY,
];

export default getAvailableSortBys();
