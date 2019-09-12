import { setCategoryFilter } from '@Model/filters/actions';
import { getSelectedCategory } from '@Model/filters/selectors';
import { getCategories } from '@Model/sources/selectors';
import _Store from '@Store';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import {
  ITopicDropDownFromDispatch,
  ITopicDropDownFromState,
} from './TopicDropDown';
import TopicDropDown from './TopicDropDown.component';

const mapStateToProps = (state: _Store.IState): ITopicDropDownFromState => ({
  categories: getCategories(state),
  selectedCategory: getSelectedCategory(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
): ITopicDropDownFromDispatch => ({
  selectCategory: (value: string) => dispatch(setCategoryFilter(value)),
});

export default connect<
  ITopicDropDownFromState,
  ITopicDropDownFromDispatch,
  any,
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps,
)(TopicDropDown);
