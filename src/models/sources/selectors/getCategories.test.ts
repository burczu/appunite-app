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
    const testCategories = ['test1', 'test2', 'test3'];
    const expectedCategories = ['Test1', 'Test2', 'Test3'];
    const mockedSources: ISourcesReducer = [
      {
        ...sourceBase,
        category: testCategories[0],
      },
      {
        ...sourceBase,
        category: testCategories[1],
      },
      {
        ...sourceBase,
        category: testCategories[1],
      },
      {
        ...sourceBase,
        category: testCategories[0],
      },
      {
        ...sourceBase,
        category: testCategories[2],
      },
    ];
    const mockedState: StateType<typeof rootReducer> = {
      articles: [],
      filters: {
        selectedCategory: undefined,
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
    };

    expect(getCategories(mockedState)).toEqual(expectedCategories);
  });
});
