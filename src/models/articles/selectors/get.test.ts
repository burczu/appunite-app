import rootReducer from '@/store/rootReducer';
import { IFiltersReducer } from '@Model/filters/types';
import { StateType } from 'typesafe-actions';
import { IArticle } from './../types';
import get from './get';

describe('get (filters) selector', () => {
  it('should return filters state', () => {
    const expectedArticles: IArticle[] = [
      {
        author: 'test',
        content: 'test',
        description: 'test',
        publishedAt: '2019-01-01',
        source: {
          id: 'test',
          name: 'test',
        },
        title: 'test',
        url: 'test',
        urlToImage: 'http://test.com',
      },
    ];
    const mockedFilters: IFiltersReducer = {
      selectedCategory: undefined,
      selectedDate: undefined,
      selectedSortBy: undefined,
    };

    const mockedState: StateType<typeof rootReducer> = {
      articles: expectedArticles,
      filters: mockedFilters,
      router: {
        action: 'REPLACE',
        location: {
          hash: '',
          pathname: '/',
          search: '',
          state: null,
        },
      },
      sources: [],
    };

    expect(get(mockedState)).toEqual(expectedArticles);
  });
});
