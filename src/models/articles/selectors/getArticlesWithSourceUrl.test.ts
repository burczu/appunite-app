import rootReducer from '@/store/rootReducer';
import { IFiltersReducer } from '@Model/filters/types';
import { ISource } from '@Model/sources/types';
import { StateType } from 'typesafe-actions';
import { IArticle } from './../types';
import getArticlesWithSourceUrl from './getArticlesWithSourceUrl';

describe('getArticlesWithSourceUrl selector', () => {
  it('should return articles with modified source', () => {
    const testId = 'test-id';
    const testUrl = 'http://source.com';
    const mockedArticles: IArticle[] = [
      {
        author: 'test',
        content: 'test',
        description: 'test',
        publishedAt: '2019-01-01',
        source: {
          id: testId,
          name: 'test',
          url: undefined,
        },
        title: 'test',
        url: 'test',
        urlToImage: 'http://test.com',
      },
    ];

    const mockedSources: ISource[] = [
      {
        category: 'test',
        country: 'test',
        description: 'test',
        id: testId,
        language: 'test',
        name: 'test',
        url: testUrl,
      },
    ];

    const mockedFilters: IFiltersReducer = {
      selectedCategory: undefined,
      selectedDate: undefined,
      selectedSortBy: undefined,
    };

    const mockedState: StateType<typeof rootReducer> = {
      articles: {
        articles: mockedArticles,
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

    const expectedArticles = [
      {
        ...mockedArticles,
        source: {
          ...mockedArticles[0].source,
          url: testUrl,
        },
      },
    ];

    expect(getArticlesWithSourceUrl(mockedState)[0].source).toEqual(
      expectedArticles[0].source,
    );
  });
});
