import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { IArticleReducer } from './../types';
import get from './get';

describe('get (filters) selector', () => {
  it('should return filters state', () => {
    const expectedArticle: IArticleReducer = {
      author: 'test',
      content: 'test',
      description: 'test',
      publishedAt: '2019-01-01',
      source: {
        id: 'test-id',
        name: 'test',
        url: 'http://test.com',
      },
      title: 'test',
      url: 'http://test/com',
      urlToImage: 'http://test.com/image.png',
    };

    const mockedState: StateType<typeof rootReducer> = {
      article: expectedArticle,
      articles: {
        articles: [],
        pagination: 1,
      },
      filters: {
        selectedCategory: 'test',
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

    expect(get(mockedState)).toEqual(expectedArticle);
  });
});
