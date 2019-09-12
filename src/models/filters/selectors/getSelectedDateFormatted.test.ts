import rootReducer from '@/store/rootReducer';
import {
  THIS_MONTH,
  THIS_WEEK,
  TODAY,
} from '@Model/filters/constants/constants';
import {
  IFiltersDates,
  IFiltersReducer,
  IFiltersSelectedDateFormatted,
} from '@Model/filters/types';
import endOfMonth from 'date-fns/endOfMonth';
import endOfToday from 'date-fns/endOfToday';
import endOfWeek from 'date-fns/endOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import startOfToday from 'date-fns/startOfToday';
import startOfWeek from 'date-fns/startOfWeek';
import { StateType } from 'typesafe-actions';
import getSelectedDateFormatted from './getSelectedDateFormatted';

describe('getSelectedDateFormatted selector', () => {
  const today = new Date();

  const getMockedState = (date: IFiltersDates | undefined) => {
    const mockedFilters: IFiltersReducer = {
      selectedCategory: undefined,
      selectedDate: date,
      selectedSortBy: undefined,
    };
    const mockedState: StateType<typeof rootReducer> = {
      articles: {
        articles: [],
      },
      filters: mockedFilters,
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
    };

    return mockedState;
  };

  it('should return correct value for undefined', () => {
    const expected = undefined;

    expect(getSelectedDateFormatted(getMockedState(undefined))).toEqual(
      expected,
    );
  });

  it('should return correct value for TODAY', () => {
    const expected: IFiltersSelectedDateFormatted = {
      from: startOfToday().toISOString(),
      to: endOfToday().toISOString(),
    };

    expect(getSelectedDateFormatted(getMockedState(TODAY))).toEqual(expected);
  });

  it('should return correct value for THIS_WEEK', () => {
    const expected: IFiltersSelectedDateFormatted = {
      from: startOfWeek(today).toISOString(),
      to: endOfWeek(today).toISOString(),
    };

    expect(getSelectedDateFormatted(getMockedState(THIS_WEEK))).toEqual(
      expected,
    );
  });

  it('should return correct value for THIS_MONT', () => {
    const expected: IFiltersSelectedDateFormatted = {
      from: startOfMonth(today).toISOString(),
      to: endOfMonth(today).toISOString(),
    };

    expect(getSelectedDateFormatted(getMockedState(THIS_MONTH))).toEqual(
      expected,
    );
  });
});
