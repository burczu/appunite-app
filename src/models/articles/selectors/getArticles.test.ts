import rootReducer from '@/store/rootReducer';
import { IArticle } from '@Model/article/types';
import { IFiltersReducer } from '@Model/filters/types';
import { StateType } from 'typesafe-actions';
import getArticles from './getArticles';

describe('getArticles selector', () => {
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
      article: null,
      articles: {
        articles: expectedArticles,
        pagination: 1,
      },
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

    expect(getArticles(mockedState)).toEqual(expectedArticles);
  });
});
