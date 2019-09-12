import { setSortByFilter } from '@Model/filters/actions';
import {
  getAvailableSortBys,
  getSelectedSortBy,
} from '@Model/filters/selectors';
import { IFiltersSortBy } from '@Model/filters/types';
import _Store from '@Store';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import {
  ISortByDropDownFromDispatch,
  ISortByDropDownFromState,
} from './SortByDropDown';
import SortByDropDown from './SortByDropDown.component';

const mapStateToProps = (state: _Store.IState): ISortByDropDownFromState => ({
  selectedSortBy: getSelectedSortBy(state),
  sortBys: getAvailableSortBys(),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
): ISortByDropDownFromDispatch => ({
  selectSortBy: (value: IFiltersSortBy) => dispatch(setSortByFilter(value)),
});

export default connect<
  ISortByDropDownFromState,
  ISortByDropDownFromDispatch,
  any,
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps,
)(SortByDropDown);
