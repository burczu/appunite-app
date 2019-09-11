import { ActionType } from 'typesafe-actions';
import { getArticles } from './../actions';
import { IArticlesReducer } from './../types';
import reducer from './index';

describe('articlesReducer', () => {
  it('should return initial state', () => {
    expect(reducer([], {} as ActionType<any>)).toEqual([]);
  });

  it('should handle _GET_SUCCESS', () => {
    const mockData: IArticlesReducer = [
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
        url: 'http://test.com',
        urlToImage: 'http://test.com/image.png',
      },
    ];

    expect(reducer([], getArticles.success(mockData))).toEqual(mockData);
  });
});
