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
  selectedCategory: '',
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
): ITopicDropDownFromDispatch => ({
  selectCategory: (value: string) => value,
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
