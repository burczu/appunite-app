import { RouterState } from 'connected-react-router';
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
    const mockedState = {
      articles: [],
      router: {} as RouterState,
      sources: mockedSources,
    };

    expect(get(mockedState)).toEqual(mockedSources);
  });
});
