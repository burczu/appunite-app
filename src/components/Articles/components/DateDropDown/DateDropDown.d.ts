import { IFiltersDates } from '@Model/filters/types';

export interface IDateDropDownFromState {
  dates: IFiltersDates[];
  selectedDate: IFiltersDates | undefined;
}

export interface IDateDropDownFromDispatch {
  selectDate: (value: IFiltersDates) => void;
}

export type IDateDropDownProps = IDateDropDownFromDispatch &
  IDateDropDownFromState;
