import { ActionType } from 'typesafe-actions';
import { setArticle } from './../actions';
import { IArticleReducer } from './../types';
import reducer from './index';

describe('articleReducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {} as ActionType<any>)).toEqual(undefined);
  });

  it('should handle _SET_ARTICLE', () => {
    const mockData: IArticleReducer = {
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
    };

    expect(reducer(undefined, setArticle(mockData))).toEqual(mockData);
  });
});
