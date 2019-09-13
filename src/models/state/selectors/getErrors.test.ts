import rootReducer from '@/store/rootReducer';
import { StateType } from 'typesafe-actions';
import { IStateErrorsReducer } from './../types';
import getErrors from './getErrors';

describe('get loaders selector', () => {
  it('should return loaders state', () => {
    const expectedErrors: IStateErrorsReducer = {
      articlesError: false,
      sourcesError: false,
    };

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
      sources: [],
      state: {
        errors: expectedErrors,
        loaders: {
          articlesLoading: false,
          sourcesLoading: false,
        },
      },
    };

    expect(getErrors(mockedState)).toEqual(expectedErrors);
  });
});
