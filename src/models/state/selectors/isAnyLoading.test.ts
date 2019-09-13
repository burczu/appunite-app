import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { IStateLoadersReducer } from './../types';
import isAnyLoading from './isAnyLoading';

describe('is any loading selector', () => {
  const getMockedState = (
    loaders: IStateLoadersReducer,
  ): StateType<typeof rootReducer> => {
    return {
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
      sources: [],
      state: {
        errors: {
          articlesError: false,
          sourcesError: false,
        },
        loaders,
      },
    };
  };

  it('should return true if any of loaders is true', () => {
    const mockedLoaders: IStateLoadersReducer = {
      articlesLoading: true,
      sourcesLoading: false,
    };

    expect(isAnyLoading(getMockedState(mockedLoaders))).toEqual(true);
  });

  it('should return false if all the loaders are false', () => {
    const mockedLoaders: IStateLoadersReducer = {
      articlesLoading: false,
      sourcesLoading: false,
    };

    expect(isAnyLoading(getMockedState(mockedLoaders))).toEqual(false);
  });
});
