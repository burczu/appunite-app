import { setDateFilter } from '@Model/filters/actions';
import { getAvailableDates, getSelectedDate } from '@Model/filters/selectors';
import { IFiltersDates } from '@Model/filters/types';
import _Store from '@Store';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import {
  IDateDropDownFromDispatch,
  IDateDropDownFromState,
} from './DateDropDown';
import DateDropDown from './DateDropDown.component';

const mapStateToProps = (state: _Store.IState): IDateDropDownFromState => ({
  dates: getAvailableDates(),
  selectedDate: getSelectedDate(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
): IDateDropDownFromDispatch => ({
  selectDate: (value: IFiltersDates) => dispatch(setDateFilter(value)),
});

export default connect<
  IDateDropDownFromState,
  IDateDropDownFromDispatch,
  any,
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps,
)(DateDropDown);
