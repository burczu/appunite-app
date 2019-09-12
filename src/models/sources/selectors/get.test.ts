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
      articles: [],
      filters: {
        selectedCategory: null,
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

    expect(get(mockedState)).toEqual(mockedSources);
  });
});
