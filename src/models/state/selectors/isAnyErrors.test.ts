import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { IStateErrorsReducer } from './../types';
import isAnyError from './isAnyError';

describe('is any errors selector', () => {
  const getMockedState = (
    errors: IStateErrorsReducer,
  ): StateType<typeof rootReducer> => {
    return {
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
        errors,
        loaders: {
          articlesLoading: false,
          sourcesLoading: false,
        },
      },
    };
  };

  it('should return true if any of errors is true', () => {
    const mockerErrors: IStateErrorsReducer = {
      articlesError: true,
      sourcesError: false,
    };

    expect(isAnyError(getMockedState(mockerErrors))).toEqual(true);
  });

  it('should return false if all the errors are false', () => {
    const mockerErrors: IStateErrorsReducer = {
      articlesError: false,
      sourcesError: false,
    };

    expect(isAnyError(getMockedState(mockerErrors))).toEqual(false);
  });
});
