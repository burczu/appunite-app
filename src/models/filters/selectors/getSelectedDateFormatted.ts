import _Store from '@Store';
import endOfMonth from 'date-fns/endOfMonth';
import endOfToday from 'date-fns/endOfToday';
import endOfWeek from 'date-fns/endOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import startOfToday from 'date-fns/startOfToday';
import startOfWeek from 'date-fns/startOfWeek';
import { createSelector } from 'reselect';
import { THIS_MONTH, THIS_WEEK, TODAY } from './../constants/constants';
import { IFiltersDates, IFiltersSelectedDateFormatted } from './../types';
import getSelectedDate from './getSelectedDate';

const getSelectedDateFormatted = createSelector<
  _Store.IState,
  IFiltersDates | undefined,
  IFiltersSelectedDateFormatted | undefined
>(
  [getSelectedDate],
  (selectedDate) => {
    const today = new Date();

    switch (selectedDate) {
      case TODAY:
        return {
          from: startOfToday().toISOString(),
          to: endOfToday().toISOString(),
        };
      case THIS_WEEK:
        return {
          from: startOfWeek(today).toISOString(),
          to: endOfWeek(today).toISOString(),
        };
      case THIS_MONTH:
        return {
          from: startOfMonth(today).toISOString(),
          to: endOfMonth(today).toISOString(),
        };
      default:
        return undefined;
    }
  },
);

export default getSelectedDateFormatted;
