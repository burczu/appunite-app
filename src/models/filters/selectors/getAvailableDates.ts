import { THIS_MONTH, THIS_WEEK, TODAY } from './../constants/constants';
import { IFiltersDates } from './../types';

const getAvailableDates = (): IFiltersDates[] => [TODAY, THIS_WEEK, THIS_MONTH];

export default getAvailableDates;
