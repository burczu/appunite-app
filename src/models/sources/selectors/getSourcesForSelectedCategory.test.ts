import rootReducer from '@/store/rootReducer';
import { ISource, ISourcesReducer } from '@Model/sources/types';
import { StateType } from 'typesafe-actions';
import getSourcesForSelectedCategory from './getSourcesForSelectedCategory';

const sourceBase: ISource = {
  category: 'test',
  country: 'test',
  description: 'test',
  id: 'test',
  language: 'test',
  name: 'test',
  url: 'http://test.com',
};

describe('getSourcesForSelectedCategory selector', () => {
  it('should return correct values', () => {
    const expectedIds = ['test1', 'test2', 'test3'];
    const mockSelectedCategory = 'test';
    const mockedSources: ISourcesReducer = [
      {
        ...sourceBase,
        category: mockSelectedCategory,
        id: expectedIds[0],
      },
      {
        ...sourceBase,
        category: 'test2',
      },
      {
        ...sourceBase,
        category: mockSelectedCategory,
        id: expectedIds[1],
      },
      {
        ...sourceBase,
        category: 'test2',
      },
      {
        ...sourceBase,
        category: mockSelectedCategory,
        id: expectedIds[2],
      },
    ];
    const mockedState: StateType<typeof rootReducer> = {
      articles: {
        articles: [],
        pagination: 1,
      },
      filters: {
        selectedCategory: mockSelectedCategory,
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
    };

    expect(getSourcesForSelectedCategory(mockedState)).toEqual(expectedIds);
  });
});
