import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { ISource, ISourcesReducer } from './../types';
import getCategories from './getCategories';

const sourceBase: ISource = {
  category: 'test',
  country: 'test',
  description: 'test',
  id: 'test',
  language: 'test',
  name: 'test',
  url: 'http://test.com',
};

describe('getCategories selector', () => {
  it('should return correct categories list', () => {
    const expectedCategories = ['test1', 'test2', 'test3'];
    const mockedSources: ISourcesReducer = [
      {
        ...sourceBase,
        category: expectedCategories[0],
      },
      {
        ...sourceBase,
        category: expectedCategories[1],
      },
      {
        ...sourceBase,
        category: expectedCategories[1],
      },
      {
        ...sourceBase,
        category: expectedCategories[0],
      },
      {
        ...sourceBase,
        category: expectedCategories[2],
      },
    ];
    const mockedState: StateType<typeof rootReducer> = {
      article: null,
      articles: {
        articles: [],
        pagination: 1,
      },
      filters: {
        selectedCategory: undefined,
        selectedDate: undefined,
        selectedSortBy: undefined,
      },
      router: {
        action: 'REPLACE',
        location: {
          hash: '',
          pathname: '/',
          search: '',
          state: null,
        },
      },
      sources: mockedSources,
      state: {
        errors: {
          articlesError: false,
          sourcesError: false,
        },
        loaders: {
          articlesLoading: false,
          sourcesLoading: false,
        },
      },
    };

    expect(getCategories(mockedState)).toEqual(expectedCategories);
  });
});
