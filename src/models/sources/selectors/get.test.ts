import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { ISourcesReducer } from './../types';
import get from './get';

describe('get (sources) selector', () => {
  it('should return sources state', () => {
    const mockedSources: ISourcesReducer = [
      {
        category: 'test',
        country: 'test',
        description: 'test',
        id: 'test',
        language: 'test',
        name: 'test',
        url: 'http://test.com',
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

    expect(get(mockedState)).toEqual(mockedSources);
  });
});
