import { ActionType } from 'typesafe-actions';
import { getSources } from './../actions';
import { ISourcesReducer } from './../types';
import reducer from './index';

describe('sourcesReducer', () => {
  it('should return initial state', () => {
    expect(reducer([], {} as ActionType<any>)).toEqual([]);
  });

  it('should handle _GET_SUCCESS', () => {
    const mockData: ISourcesReducer = [
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

    expect(reducer([], getSources.success(mockData))).toEqual(mockData);
  });
});
